import type { SocialState, Post } from '../types';

export type Action =
  | { type: 'SET_POSTS'; posts: Post[] }
  | { type: 'ADD_POST'; post: Post }
  | { type: 'UPDATE_POST'; post: Post }
  | { type: 'ADD_COMMENT'; postId: string; comment: Post['comments'][number] };

export const reducer = (state: SocialState, action: Action): SocialState => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.posts };
    case 'ADD_POST':
      return { ...state, posts: [action.post, ...state.posts] };
    case 'UPDATE_POST':
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.post.id ? action.post : p
        ),
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.postId
            ? { ...p, comments: [action.comment, ...p.comments] }
            : p
        ),
      };
    default:
      return state;
  }
};
