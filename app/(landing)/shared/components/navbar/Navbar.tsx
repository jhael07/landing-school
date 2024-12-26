"use client";

import Link from "next/link";
import useNavStore from "../../../../stores/NavStore";
import { HTMLAttributes, ReactNode } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import Image from "next/image";

export type NavbarOption = { name: string; path?: string; id: string; children?: ReactNode };
export type NavbarProps = { options: NavbarOption[]; logo: string };

const Navbar = ({ options, logo }: NavbarProps) => {
  return (
    <>
      <NavbarContent logo={logo} options={options} />
      <NavbarBackDrop />
    </>
  );
};

export default Navbar;

const NavbarContent = ({ logo, options }: NavbarProps) => {
  return (
    <nav className="hidden w-full bg-white sm:flex justify-between shadow-sm items-center px-4 relative z-50">
      <Link href={"/"} className="h-14 w-fit">
        <Image
          src={logo}
          alt=""
          width={100}
          height={100}
          unoptimized
          className="w-full h-full object-contain"
        />
      </Link>
      <OptionsList options={options} />
    </nav>
  );
};

const NavbarBackDrop = () => {
  const { isSubMenuOpen, closeSubMenu, setOptionHover } = useNavStore();

  const backDropStyle = isSubMenuOpen
    ? "z-30 opacity-100 transition-all duration-300"
    : "-z-20 opacity-0 ";

  const handleOnBackDropMouseOver = () => {
    closeSubMenu();
    setOptionHover("");
  };

  return (
    <div
      className={`fixed left-0 top-0 ${backDropStyle} bg-black/20 w-full h-full `}
      onMouseEnter={handleOnBackDropMouseOver}
    ></div>
  );
};

const OptionsList = ({ options }: Omit<NavbarProps, "logo">) => {
  return (
    <ul className="flex gap-x-4 relative">
      {options.map((props) =>
        (props.path ?? "")?.length > 0 && props.path ? (
          <NavbarOption id={props.id} key={props.name} name={props.name} path={props.path} />
        ) : (
          <NavbarGroupOption {...props} key={props.name} />
        )
      )}
    </ul>
  );
};

const NavbarOption = ({ name, id, path }: Omit<Required<NavbarOption>, "children">) => {
  const { closeSubMenu, setOptionHover, optionHover } = useNavStore();

  const handleOnMouseEnter = () => {
    closeSubMenu();
    setOptionHover(name);
  };

  return (
    <Link
      key={id}
      onMouseEnter={handleOnMouseEnter}
      href={path}
      className={`navbar justify-between z-50 option ${
        optionHover === name ? "navbar-active" : "navbar-inactive"
      }`}
    >
      {name}
    </Link>
  );
};

export const NavbarGroupOption = ({ name, id, children }: Omit<NavbarOption, "path">) => {
  const { openSubmenu, setOptionHover, optionHover } = useNavStore();

  return (
    <div className="relative flex items-center">
      <button
        onMouseEnter={() => {
          openSubmenu();
          setOptionHover(name);
        }}
        className={`navbar option flex justify-between items-center gap-x-2 z-10 duration-500 transition-all ${
          optionHover === name ? "navbar-active" : "navbar-inactive"
        }`}
        key={id}
      >
        {name}

        {optionHover !== name ? <FaAngleDown /> : <FaAngleRight />}
      </button>
      {children}
    </div>
  );
};

export const NavbarGroupOptionContent = ({
  children,
  currentOptionSelected,
  style,
}: {
  children: ReactNode;
  currentOptionSelected: string;
} & Pick<HTMLAttributes<HTMLDivElement>, "style">) => {
  const { isSubMenuOpen, optionHover } = useNavStore();
  return (
    <div
      className={`  border absolute  ${
        isSubMenuOpen && optionHover === currentOptionSelected
          ? "opacity-100   top-[2.88rem] "
          : "opacity-0 -top-6 -z-40 h-2 duration-150 overflow-hidden "
      } bg-white rounded-b-xl  transition-all shadow-sm`}
      style={style}
    >
      {isSubMenuOpen ? children : null}
    </div>
  );
};

export const SubMenuSectionTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-sm font-medium p-2 mb-2 border-b">{children}</h3>;
};
