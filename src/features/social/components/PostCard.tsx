import type { Post } from '../types';
import { LikeButton, CommentList, NewCommentForm } from './';
import { useSocial } from '../postsprovider';

const PostCard = ({ post }: { post: Post }) => {
  const { isLikedByMe } = useSocial();

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <header className="mb-3 flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200" />
        <div>
          <div className="text-sm font-medium">{post.author.name}</div>
          <div className="text-xs text-gray-500">
            {new Date(post.createdAt).toLocaleString()}
          </div>
        </div>
      </header>

      <p className="mb-4 whitespace-pre-wrap text-sm">{post.content}</p>

      <div className="mb-3 flex items-center gap-4">
        <LikeButton
          postId={post.id}
          liked={isLikedByMe(post)}
          count={post.likes.size}
        />
        <span className="text-xs text-gray-500">
          {post.comments.length} Kommentare
        </span>
      </div>

      <NewCommentForm postId={post.id} />
      <CommentList comments={post.comments} />
    </article>
  );
};

export default PostCard;
