export type * from '../types/types';
export type * from './PostsProvider.context'
export type * from './PostsProvider.hooks'
export type * from './PostsProvider.initialState'
export type * from './PostsProvider.reducer'
export type * from './PostsProvider'

export { SocialContext, useSocial } from './PostsProvider.context'
export { useSocialActions } from './PostsProvider.hooks'
export { initialState, initialUser } from './PostsProvider.initialState'
export { reducer } from './PostsProvider.reducer'

export { PostsProvider } from './PostsProvider'