import type { Post } from "../postsprovider";
import type { Store } from "./storage";

export function toRuntime(store: Store): Post[] {
  return store.posts.map(p => ({ ...p, likes: new Set(p.likes) }));
}

export function toPersist(posts: Post[]): Store {
  return { posts: posts.map(p => ({ ...p, likes: Array.from(p.likes) })) };
}