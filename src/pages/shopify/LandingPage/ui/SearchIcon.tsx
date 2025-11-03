const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      d="m21 21-4.35-4.35m1.1-3.65a5.75 5.75 0 1 1-11.5 0 5.75 5.75 0 0 1 11.5 0Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;
