import { PostCard } from "./PostCard";
import { useSocial } from "../PostsProvider";

export default function PostFeed() {
  const { posts } = useSocial();
  if (!posts.length) return <p className="text-sm text-gray-500">Keine Posts vorhanden.</p>;
  return (
    <ul className="space-y-4">
      {posts.map(p => (
        <li key={p.id}>
          <PostCard post={p} />
        </li>
      ))}
    </ul>
  );
}