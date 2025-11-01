import { useEffect, useReducer, useMemo } from 'react';
import { api } from '../api';
import { reducer } from './PostsProvider.reducer';
import { initialState } from './PostsProvider.initialState';
import { SocialContext } from './PostsProvider.context';
import { useSocialActions } from './PostsProvider.hooks';
import type { Ctx } from './PostsProvider.context';
import type { Post } from '../types';

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useSocialActions(state, dispatch);

  useEffect(() => {
    api
      .listPosts()
      .then((posts: Post[]) => dispatch({ type: 'SET_POSTS', posts }));
  }, []);

  const value = useMemo<Ctx>(
    () => ({ ...state, ...actions }),
    [state, actions]
  );

  return (
    <SocialContext.Provider value={value}>{children}</SocialContext.Provider>
  );
};
