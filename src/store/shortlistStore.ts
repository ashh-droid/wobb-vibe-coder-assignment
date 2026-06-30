import { create } from "zustand";
import type { UserProfileSummary } from "@/types";

interface ShortlistStore {
  shortlisted: UserProfileSummary[];
  addProfile: (profile: UserProfileSummary) => void;
  removeProfile: (userId: string) => void;
}

const STORAGE_KEY = "shortlist-storage";

const getInitialState = (): UserProfileSummary[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const useShortlistStore = create<ShortlistStore>((set) => ({
  shortlisted: getInitialState(),

  addProfile: (profile) =>
    set((state) => {
      const exists = state.shortlisted.some(
        (p) => p.user_id === profile.user_id
      );
      if (exists) return state;

      const updated = [...state.shortlisted, profile];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      return { shortlisted: updated };
    }),

  removeProfile: (userId) =>
    set((state) => {
      const updated = state.shortlisted.filter(
        (p) => p.user_id !== userId
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      return { shortlisted: updated };
    }),
}));