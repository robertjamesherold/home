type ButtonProps = {
  isPrev?: boolean;
  isNext?: boolean;
  onClick: () => void;
};

const NavigationButton: React.FC<ButtonProps> = ({
  isPrev,
  isNext,
  onClick,
}: ButtonProps) => {
  return (
    <>
      {!isNext && isPrev ? (
        <button
          type="button"
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 font-serif text-xl text-slate-900 shadow-lg transition-transform hover:-translate-y-1 hover:bg-white sm:h-12 sm:w-12 sm:text-2xl"
          onClick={onClick}
          aria-label="Nächster Slide"
        >
          ‹
        </button>
      ) : (
        <button
          type="button"
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 font-serif text-xl text-slate-900 shadow-lg transition-transform hover:-translate-y-1 hover:bg-white sm:h-12 sm:w-12 sm:text-2xl"
          onClick={onClick}
          aria-label="Nächster Slide"
        >
          ›
        </button>
      )}
    </>
  );
};

export default NavigationButton;
