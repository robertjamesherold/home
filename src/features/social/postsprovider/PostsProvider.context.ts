import { createContext, useContext } from "react";
import type { SocialState, Post, CreatePostInput, CreateCommentInput } from "../types";

export type Ctx = SocialState & {
  createPost: (input: CreatePostInput) => Promise<void>;
  toggleLike: (postId: string) => Promise<void>;
  createComment: (input: CreateCommentInput) => Promise<void>;
  isLikedByMe: (post: Post) => boolean;
};

export const SocialContext = createContext<Ctx | null>(null);

export const useSocial = () => {
  const ctx = useContext(SocialContext);
  if (!ctx) throw new Error("useSocial must be used within PostsProvider");
  return ctx;
}