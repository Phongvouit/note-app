import { create } from "zustand";

interface FolderModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFolderModal = create<FolderModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFolderModal;
