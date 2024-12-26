import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={` absolute bg-black/70 backdrop-blur-[2px] group-hover:opacity-0 transition-all
  font-medium text-white w-full px-4 py-6 bottom-0 text-center  `}
    >
      {children}
    </div>
  );
};

export default Title;
