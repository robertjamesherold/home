import { useCallback, type Dispatch } from "react";
import type { CreatePostInput, CreateCommentInput, Post, SocialState } from "../types";
import type { Action } from "./PostsProvider.reducer";
import { api } from "../api";

export const useSocialActions = (state: SocialState, dispatch: Dispatch<Action>) => {
  const createPost = useCallback(
    async (input: CreatePostInput) => {
      if (!input.content.trim()) return;
      const post = await api.createPost(input, state.currentUser);
      dispatch({ type: "ADD_POST", post });
    },
    [state.currentUser, dispatch]
  );

  const toggleLike = useCallback(
    async (postId: string) => {
      const updated = await api.toggleLike(postId, state.currentUser.id);
      dispatch({ type: "UPDATE_POST", post: updated });
    },
    [state.currentUser.id, dispatch]
  );

  const createComment = useCallback(
    async (input: CreateCommentInput) => {
      if (!input.content.trim()) return;
      const comment = await api.createComment(input, state.currentUser);
      dispatch({ type: "ADD_COMMENT", postId: input.postId, comment });
    },
    [state.currentUser, dispatch]
  );

  const isLikedByMe = useCallback(
    (post: Post) => post.likes.has(state.currentUser.id),
    [state.currentUser.id]
  );

  return { createPost, toggleLike, createComment, isLikedByMe };
}