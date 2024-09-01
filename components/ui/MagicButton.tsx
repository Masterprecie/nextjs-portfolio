const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  href,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  // handleClick?: () => void;
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  otherClasses?: string;
  href?: string;
}) => {
  return (
    <a href={href}>
      <button
        className={`relative inline-flex gap-2 h-12  z-50 cursor-pointer animate-shimmer md:w-60 md:mt-5 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 font-medium text-slate-400 transition-colors ${otherClasses} `}
        onClick={handleClick}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </button>
    </a>
  );
};
export default MagicButton;
