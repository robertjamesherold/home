export type ID = string;

export type User = {
  id: ID;
  name: string;
  avatar?: string; // URL
};

export type Comment = {
  id: ID;
  postId: ID;
  author: User;
  content: string;
  createdAt: string; // ISO
};

export type Post = {
  id: ID;
  author: User;
  content: string;
  createdAt: string; // ISO
  likes: Set<ID>; // userIds
  comments: Comment[];
};

export type CreatePostInput = { content: string };
export type CreateCommentInput = { postId: ID; content: string };

export type SocialState = {
  currentUser: User;
  posts: Post[];
};

export type SocialAPI = {
  listPosts(): Promise<Post[]>;
  createPost(input: CreatePostInput, user: User): Promise<Post>;
  toggleLike(postId: ID, userId: ID): Promise<Post>;
  createComment(input: CreateCommentInput, user: User): Promise<Comment>;
};