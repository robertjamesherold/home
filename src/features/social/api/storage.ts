import type { Post } from "../postsprovider";

const LS_KEY = "social_data_v1";

export type Store = {
  posts: (Omit<Post, "likes"> & { likes: string[] })[];
};

export function load(): Store {
  const raw = localStorage.getItem(LS_KEY);
  if (!raw) return { posts: [] };
  try {
    return JSON.parse(raw) as Store;
  } catch {
    return { posts: [] };
  }
}

export function save(store: Store) {
  localStorage.setItem(LS_KEY, JSON.stringify(store));
}