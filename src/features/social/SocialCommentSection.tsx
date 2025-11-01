import { PostsProvider } from './postsprovider';
import { NewPostForm } from './components';
import { PostFeed } from './components';

const SocialCommentSection: React.FC = () => {
  return (
    <PostsProvider>
      <main className="mx-auto max-w-2xl space-y-4 p-4">
        <h1 className="text-xl font-semibold">Social</h1>
        <NewPostForm />
        <PostFeed />
      </main>
    </PostsProvider>
  );
};

export default SocialCommentSection;
