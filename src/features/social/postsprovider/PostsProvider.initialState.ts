import type { SocialState } from "../types";

export const initialUser = {
  id: "user_robert",
  name: "Robert James Herold",
  avatar: undefined,
};

export const initialState: SocialState = {
  currentUser: initialUser,
  posts: [],
};