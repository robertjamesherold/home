import type { Comment } from "../types";

export default function CommentList({ comments }: { comments: Comment[] }) {
  if (!comments.length) return null;
  return (
    <ul className="mt-3 space-y-3">
      {comments.map(c => (
        <li key={c.id} className="rounded-lg bg-gray-50 p-3">
          <div className="mb-1 flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gray-300" />
            <div className="text-xs text-gray-700">{c.author.name}</div>
            <div className="text-[10px] text-gray-400">
              {new Date(c.createdAt).toLocaleString()}
            </div>
          </div>
          <p className="text-sm">{c.content}</p>
        </li>
      ))}
    </ul>
  );
}