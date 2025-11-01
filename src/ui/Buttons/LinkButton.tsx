type LinkButtonProps = {
  entry: string;
  label: string;
  icon?: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  entry,
  label,
  icon,
}: LinkButtonProps) => {
  return (
    <a
      href={entry}
      className="inline-flex w-fit items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800 sm:w-auto"
    >
      {label}
      {icon && (
        <span aria-hidden className="text-lg">
          {icon}
        </span>
      )}
    </a>
  );
};

export default LinkButton;
