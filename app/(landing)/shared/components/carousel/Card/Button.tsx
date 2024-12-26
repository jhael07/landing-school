import { CardButtonProps } from "./types";

const Button = ({ title, onClick }: CardButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-3 font-semibold rounded-lg text-secondary-500 transition-all duration-500
  bg-secondary-500/20 border border-secondary-400 w-full h-fit text-lg hover:bg-secondary-600/40 "
    >
      {title}
    </button>
  );
};

export default Button;
