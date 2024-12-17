export type UseNavStoreProps = {
  isSubMenuOpen: boolean;
  optionHover: string;
  openSubmenu: () => void;
  closeSubMenu: () => void;
  setOptionHover: (option: string) => void;
};
