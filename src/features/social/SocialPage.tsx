import { PostsProvider } from "./PostsProvider";
import NewPostForm from "./components/NewPostForm";
import PostFeed from "./components/PostFeed";

export default function SocialPage() {
  return (
    <PostsProvider>
      <main className="mx-auto max-w-2xl space-y-4 p-4">
        <h1 className="text-xl font-semibold">Social</h1>
        <NewPostForm />
        <PostFeed />
      </main>
    </PostsProvider>
  );
}