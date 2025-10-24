import { v4 as uuid } from "uuid";
import { load, save } from "./storage";
import { toRuntime, toPersist } from "./transform";
import type { SocialAPI, User, Post, CreatePostInput, CreateCommentInput, ID } from "../postsprovider";

export const postsApi: SocialAPI = {
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
    likes[likes.has(userId) ? "delete" : "add"](userId);

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