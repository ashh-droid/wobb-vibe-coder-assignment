import { useShortlistStore } from "@/store/shortlistStore";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { useState } from "react";

import { card, button, dangerButton } from "@/styles/ui";

export function ShortlistPage() {
  const shortlisted = useShortlistStore((state) => state.shortlisted);
  const removeProfile = useShortlistStore((state) => state.removeProfile);
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-1">
        Shortlisted Creators
      </h1>
      <p className="text-gray-500 mb-6">
        Your saved influencer list
      </p>

      {/* Empty State */}
      {shortlisted.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500">No profiles added yet</p>
          <p className="text-sm text-gray-400 mt-1">
            Add creators from search to build your shortlist
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {shortlisted.map((profile) => (
            <div
              key={profile.user_id}
              className={`
                ${card}
                flex items-center justify-between gap-4 p-4
              `}
            >
              {/* Left section */}
              <div className="flex items-center gap-3">
                <img
                  src={profile.picture}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <div className="font-bold flex items-center gap-1">
                    @{profile.username}
                    <VerifiedBadge verified={profile.is_verified} />
                  </div>

                  <div className="text-sm text-gray-600">
                    {profile.fullname}
                  </div>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => {
                  removeProfile(profile.user_id);
                  setToast("Removed successfully");
                  setTimeout(() => setToast(null), 1500);
                }}
                className={`
                  ${button}
                  ${dangerButton}
                `}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          {toast}
        </div>
      )}
    </div>
  );
}