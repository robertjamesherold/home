import { PostCard } from './';
import { useSocial } from '../postsprovider';

const PostFeed = () => {
  const { posts } = useSocial();
  if (!posts.length)
    return <p className="text-sm text-gray-500">Keine Posts vorhanden.</p>;
  return (
    <ul className="space-y-4">
      {posts.map((p) => (
        <li key={p.id}>
          <PostCard post={p} />
        </li>
      ))}
    </ul>
  );
};

export default PostFeed;
