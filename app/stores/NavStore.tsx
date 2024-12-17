import { create } from "zustand";
import { UseNavStoreProps } from "./types";

const useNavStore = create<UseNavStoreProps>((set) => ({
  isSubMenuOpen: false,
  optionHover: "",
  openSubmenu: () => set(() => ({ isSubMenuOpen: true })),
  closeSubMenu: () => set(() => ({ isSubMenuOpen: false })),
  setOptionHover: (option: string) => set(() => ({ optionHover: option })),
}));

export default useNavStore;
