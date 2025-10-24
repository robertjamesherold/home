import { createContext, useContext, useEffect, useMemo, useReducer, useCallback } from "react";
import { api } from "./api";
import type { SocialState, Post, CreatePostInput, CreateCommentInput } from "./types";

type Action =
  | { type: "SET_POSTS"; posts: Post[] }
  | { type: "ADD_POST"; post: Post }
  | { type: "UPDATE_POST"; post: Post }
  | { type: "ADD_COMMENT"; postId: string; comment: Post["comments"][number] };

type Ctx = SocialState & {
  createPost: (input: CreatePostInput) => Promise<void>;
  toggleLike: (postId: string) => Promise<void>;
  createComment: (input: CreateCommentInput) => Promise<void>;
  isLikedByMe: (post: Post) => boolean;
};

const SocialContext = createContext<Ctx | null>(null);

const initialUser = { id: "user_robert", name: "Robert James Herold", avatar: undefined };

function reducer(state: SocialState, action: Action): SocialState {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.posts };
    case "ADD_POST":
      return { ...state, posts: [action.post, ...state.posts] };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map(p => (p.id === action.post.id ? action.post : p)),
      };
    case "ADD_COMMENT":
      return {
        ...state,
        posts: state.posts.map(p =>
          p.id === action.postId ? { ...p, comments: [action.comment, ...p.comments] } : p
        ),
      };
    default:
      return state;
  }
}

export function PostsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { currentUser: initialUser, posts: [] });

  useEffect(() => {
    api.listPosts().then(posts => dispatch({ type: "SET_POSTS", posts }));
  }, []);

const createPost = useCallback(async (input: CreatePostInput) => {
  if (!input.content.trim()) return;
  const post = await api.createPost(input, state.currentUser);
  dispatch({ type: "ADD_POST", post });
}, [state.currentUser]);

const toggleLike = useCallback(async (postId: string) => {
  const updated = await api.toggleLike(postId, state.currentUser.id);
  dispatch({ type: "UPDATE_POST", post: updated });
}, [state.currentUser.id]);

const createComment = useCallback(async (input: CreateCommentInput) => {
  if (!input.content.trim()) return;
  const comment = await api.createComment(input, state.currentUser);
  dispatch({ type: "ADD_COMMENT", postId: input.postId, comment });
}, [state.currentUser]);

const isLikedByMe = useCallback((post: Post) => 
  post.likes.has(state.currentUser.id),
[state.currentUser.id]);

const value = useMemo<Ctx>(() => ({
  ...state,
  createPost,
  toggleLike,
  createComment,
  isLikedByMe,
}), [state, createPost, toggleLike, createComment, isLikedByMe]);

  return (
    <SocialContext.Provider value={value}>
      {children}
    </SocialContext.Provider>
  );
}

export function useSocial() {
  const ctx = useContext(SocialContext);
  if (!ctx) throw new Error("useSocial must be used within PostsProvider");
  return ctx;
}