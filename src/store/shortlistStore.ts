import { create } from "zustand";
import type { UserProfileSummary } from "@/types";

interface ShortlistStore {
  shortlisted: UserProfileSummary[];
  addProfile: (profile: UserProfileSummary) => void;
  removeProfile: (userId: string) => void;
}

export const useShortlistStore = create<ShortlistStore>((set) => ({
  shortlisted: [],

  addProfile: (profile) =>
    set((state) => {
      const exists = state.shortlisted.some(
        (p) => p.user_id === profile.user_id
      );

      if (exists) return state;

      return {
        shortlisted: [...state.shortlisted, profile],
      };
    }),

  removeProfile: (userId) =>
    set((state) => ({
      shortlisted: state.shortlisted.filter(
        (profile) => profile.user_id !== userId
      ),
    })),
}));