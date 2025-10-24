import { v4 as uuid } from "uuid";
import type { SocialAPI, User, Post, CreatePostInput, CreateCommentInput, ID } from "./types";

const LS_KEY = "social_data_v1";

type Store = {
  posts: Omit<Post, "likes"> & { likes: string[] }[];
};

function load(): Store {
  const raw = localStorage.getItem(LS_KEY);
  if (!raw) return { posts: [] } as Store;
  try {
    return JSON.parse(raw) as Store;
  } catch {
    return { posts: [] } as Store;
  }
}

function save(store: Store) {
  localStorage.setItem(LS_KEY, JSON.stringify(store));
}

function toRuntime(store: Store): Post[] {
  return store.posts.map(p => ({ ...p, likes: new Set(p.likes) }));
}
function toPersist(posts: Post[]): Store {
  return { posts: posts.map(p => ({ ...p, likes: Array.from(p.likes) })) };
}

export const api: SocialAPI = {
  async listPosts() {
    return toRuntime(load()).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  },
  async createPost(input: CreatePostInput, user: User) {
    const store = load();
    const post: Post = {
      id: uuid(),
      author: user,
      content: input.content.trim(),
      createdAt: new Date().toISOString(),
      likes: new Set<string>(),
      comments: [],
    };
    const next = [post, ...toRuntime(store)];
    save(toPersist(next));
    return post;
  },
  async toggleLike(postId: ID, userId: ID) {
    const posts = toRuntime(load());
    const idx = posts.findIndex(p => p.id === postId);
    if (idx === -1) throw new Error("Post not found");
    const likes = posts[idx].likes;
    likes.has(userId) ? likes.delete(userId) : likes.add(userId);
    save(toPersist(posts));
    return posts[idx];
  },
  async createComment(input: CreateCommentInput, user: User) {
    const posts = toRuntime(load());
    const idx = posts.findIndex(p => p.id === input.postId);
    if (idx === -1) throw new Error("Post not found");
    const comment = {
      id: uuid(),
      postId: input.postId,
      author: user,
      content: input.content.trim(),
      createdAt: new Date().toISOString(),
    };
    posts[idx].comments.unshift(comment);
    save(toPersist(posts));
    return comment;
  },
};