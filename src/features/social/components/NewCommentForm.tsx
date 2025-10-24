import { useState } from "react";
import { useSocial } from "../PostsProvider";

export default function NewCommentForm({ postId }: { postId: string }) {
  const [content, setContent] = useState("");
  const { createComment } = useSocial();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await createComment({ postId, content });
    setContent("");
  }

  return (
    <form onSubmit={onSubmit} className="mt-2 flex items-start gap-2">
      <input
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Kommentieren…"
        className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-lg bg-gray-100 px-3 py-2 text-xs text-gray-800 disabled:opacity-50"
        disabled={!content.trim()}
      >
        Senden
      </button>
    </form>
  );
}