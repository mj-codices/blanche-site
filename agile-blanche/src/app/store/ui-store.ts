// store/ui-store.ts
import { create } from 'zustand';

interface UIState {
  isContactDrawerOpen: boolean;
  openContactDrawer: () => void;
  closeContactDrawer: () => void;
  toggleContactDrawer: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isContactDrawerOpen: false,
  openContactDrawer: () => set({ isContactDrawerOpen: true }),
  closeContactDrawer: () => set({ isContactDrawerOpen: false }),
  toggleContactDrawer: () =>
    set((state) => ({ isContactDrawerOpen: !state.isContactDrawerOpen })),
}));
