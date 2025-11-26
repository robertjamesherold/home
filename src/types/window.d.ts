/**
 * File: src/types/window.d.ts
 * Global type declarations for Claude.ai window.storage API
 */

interface StorageResult<T = unknown> {
  key: string;
  value: T;
  shared?: boolean;
}

interface StorageListResult {
  keys: string[];
  prefix?: string;
  shared?: boolean;
}

interface WindowStorage {
  /**
   * Get a value from storage by key
   * @param key - Storage key (max 200 chars, no whitespace/slashes/quotes)
   * @param shared - If true, retrieves shared data; otherwise personal data
   * @returns Promise resolving to StorageResult or null if not found
   */
  get(key: string, shared?: boolean): Promise<StorageResult | null>;

  /**
   * Set a value in storage
   * @param key - Storage key (max 200 chars, no whitespace/slashes/quotes)
   * @param value - Value to store (max 5MB)
   * @param shared - If true, stores as shared data; otherwise personal data
   * @returns Promise resolving to StorageResult on success
   */
  set(
    key: string,
    value: string,
    shared?: boolean
  ): Promise<StorageResult | null>;

  /**
   * Delete a value from storage
   * @param key - Storage key to delete
   * @param shared - If true, deletes from shared data; otherwise personal data
   * @returns Promise resolving to {key, deleted, shared}
   */
  delete(
    key: string,
    shared?: boolean
  ): Promise<{ key: string; deleted: boolean; shared?: boolean } | null>;

  /**
   * List all keys matching a prefix
   * @param prefix - Key prefix to filter by (optional)
   * @param shared - If true, lists shared data; otherwise personal data
   * @returns Promise resolving to StorageListResult
   */
  list(prefix?: string, shared?: boolean): Promise<StorageListResult | null>;
}

declare global {
  interface Window {
    storage?: WindowStorage;
  }
}

export {};
