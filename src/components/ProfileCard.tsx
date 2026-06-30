import { useState } from "react";
import { useShortlistStore } from "@/store/shortlistStore";
import { useNavigate } from "react-router-dom";
import type { Platform, UserProfileSummary } from "@/types";
import { VerifiedBadge } from "./VerifiedBadge";

interface ProfileCardProps {
  profile: UserProfileSummary;
  platform: Platform;
  searchQuery: string;
  onProfileClick?: (username: string) => void;
}

function formatFollowersLocal(count: number) {
  if (count >= 1000000) return (count / 1000000).toFixed(1) + "M followers";
  if (count >= 1000) return (count / 1000).toFixed(0) + "K followers";
  return count + " followers";
}

export function ProfileCard({
  profile,
  platform,
  searchQuery,
  onProfileClick,
}: ProfileCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onProfileClick) onProfileClick(profile.username);
    navigate(`/profile/${profile.username}?platform=${platform}`);
  };

  const addToShortlist = useShortlistStore((state) => state.addProfile);
  const shortlisted = useShortlistStore((state) => state.shortlisted);

  const isAlreadyAdded = shortlisted.some(
    (p) => p.user_id === profile.user_id
  );

  const [toast, setToast] = useState<string | null>(null);

  return (
    <div
      onClick={handleClick}
      className={`flex items-center gap-4 p-4 mb-2 cursor-pointer w-[700px]
        bg-white rounded-xl shadow-sm
        hover:shadow-md transition-all duration-200
        ${isAlreadyAdded ? "ring-1 ring-blue-200 border-blue-500" : ""}
      `}
      data-search={searchQuery}
    >
      {/* Avatar */}
      <img
        src={profile.picture}
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Info */}
      <div className="text-left flex-1">
        <div className="font-bold flex items-center gap-1">
          @{profile.username}
          <VerifiedBadge verified={profile.is_verified} />
        </div>

        <div className="text-sm text-gray-600">
          {profile.fullname}
        </div>

        <div className="text-sm text-gray-500">
          {formatFollowersLocal(profile.followers)}
        </div>
      </div>

      {/* Button */}
      <button
        disabled={isAlreadyAdded}
        className={`px-3 py-1 text-sm rounded transition-all duration-200 transform hover:scale-105 ${
          isAlreadyAdded
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          addToShortlist(profile);

          setToast("Added to shortlist");
          setTimeout(() => setToast(null), 1500);
        }}
      >
        {isAlreadyAdded ? "Added" : "Add to List"}
      </button>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          {toast}
        </div>
      )}
    </div>
  );
}