import { useSocial } from "../PostsProvider";

type Props = { postId: string; liked: boolean; count: number };

export function LikeButton({ postId, liked, count }: Props) {
  const { toggleLike } = useSocial();
  return (
    <button
      onClick={() => toggleLike(postId)}
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm ${
        liked ? "border-pink-500 text-pink-600" : "border-gray-200 text-gray-700"
      }`}
      aria-pressed={liked}
    >
      <span>♥</span>
      <span>{count}</span>
    </button>
  );
}