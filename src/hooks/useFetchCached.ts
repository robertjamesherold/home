// useFetchCached.ts
import { useEffect, useRef, useState } from 'react';

type CacheEntry<T> = {
  timestamp: number;
  data: T;
};

type UseFetchOpts = {
  ttlMs?: number; // wie lange Cache gültig ist
  retry?: number; // Anzahl zusätzlicher Versuche (0 = kein Retry)
  parseJson?: boolean; // ob response.json() aufgerufen werden soll
};

const CACHE = new Map<string, CacheEntry<unknown>>();
const IN_FLIGHT = new Map<string, Promise<unknown>>();

export function useFetchCached<T = unknown>(
  url: string | null,
  opts: UseFetchOpts = {}
) {
  const { ttlMs = 30_000, retry = 1, parseJson = true } = opts;
  const mounted = useRef(true);

  const [data, setData] = useState<T | null>(() =>
    url && CACHE.has(url) ? (CACHE.get(url)!.data as T) : null
  );
  const [loading, setLoading] = useState<boolean>(
    () => !!url && !CACHE.has(url)
  );
  const [error, setError] = useState<Error | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      controllerRef.current?.abort();
    };
  }, []);

  const doFetch = (force = false): Promise<T> => {
    if (!url) return Promise.reject(new Error('No URL'));

    // Cache hit and not forced
    const cached = CACHE.get(url);
    if (!force && cached && Date.now() - cached.timestamp < ttlMs) {
      return Promise.resolve(cached.data as T);
    }

    // If there's already an in-flight request, return it (dedupe)
    if (IN_FLIGHT.has(url)) {
      return IN_FLIGHT.get(url)! as Promise<T>;
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    const attemptFetch = (attempt = 0): Promise<T> => {
      const p = fetch(url, { signal: controller.signal })
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return parseJson
            ? (res.json() as Promise<T>)
            : (res as unknown as Promise<T>);
        })
        .then((json) => {
          CACHE.set(url, { timestamp: Date.now(), data: json });
          return json;
        });

      IN_FLIGHT.set(url, p);

      return p.catch((err) => {
        IN_FLIGHT.delete(url);
        if (err.name === 'AbortError') throw err;
        if (attempt < retry) return attemptFetch(attempt + 1);
        throw err;
      });
    };

    return attemptFetch();
  };

  useEffect(() => {
    if (!url) return;
    let cancelled = false;

    const cached = CACHE.get(url);
    if (cached && Date.now() - cached.timestamp < ttlMs) {
      setData(cached.data as T);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    doFetch(false)
      .then((json) => {
        if (cancelled || !mounted.current) return;
        setData(json);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        if (cancelled || !mounted.current) return;
        setError(err);
      })
      .finally(() => {
        if (cancelled || !mounted.current) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
      controllerRef.current?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, ttlMs, retry, parseJson]);

  const refetch = (opts?: { force?: boolean }) => {
    if (!url) return Promise.reject(new Error('No URL'));
    setLoading(true);
    setError(null);
    return doFetch(Boolean(opts?.force))
      .then((json) => {
        if (!mounted.current) return json;
        setData(json);
        return json;
      })
      .catch((err) => {
        if (!mounted.current) throw err;
        setError(err);
        throw err;
      })
      .finally(() => {
        if (mounted.current) setLoading(false);
      });
  };

  return { data, loading, error, refetch };
}
