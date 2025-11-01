import { useState } from 'react';
import { useSocial } from '../postsprovider';

const NewPostForm = () => {
  const [content, setContent] = useState('');
  const { createPost } = useSocial();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await createPost({ content });
    setContent('');
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Was gibt’s Neues?"
        className="mb-3 h-24 w-full resize-none rounded-lg border border-gray-200 p-3 text-sm focus:border-gray-400 focus:outline-none"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white disabled:opacity-50"
          disabled={!content.trim()}
        >
          Posten
        </button>
      </div>
    </form>
  );
};

export default NewPostForm;
