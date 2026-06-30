import { useState } from "react";
import type { Platform } from "@/types";
import { Layout } from "@/components/Layout";
import { PlatformFilter } from "@/components/PlatformFilter";
import { ProfileList } from "@/components/ProfileList";
import { extractProfiles, filterProfiles } from "@/utils/dataHelpers";
import { useNavigate } from "react-router-dom";

import { button } from "@/styles/ui";

export function SearchPage() {
  const [platform, setPlatform] = useState<Platform>("instagram");
  const [searchQuery, setSearchQuery] = useState("");
  const [clickCount, setClickCount] = useState(0);

  const navigate = useNavigate();

  const allProfiles = extractProfiles(platform);
  const filtered = filterProfiles(allProfiles, searchQuery);

  const handleProfileClick = (username: string) => {
    setClickCount((prev) => prev + 1);
    console.log("Clicked profile:", username, "total clicks:", clickCount);
  };

  return (
    <Layout title="Discover Creators">
      {/* Subtitle */}
      <p className="text-gray-500 mb-6">
        Search and shortlist influencers across platforms
      </p>

      {/* Header Actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-medium text-gray-700">
            {filtered.length}
          </span>{" "}
          of{" "}
          <span className="font-medium text-gray-700">
            {allProfiles.length}
          </span>
        </div>

        <button
          onClick={() => navigate("/shortlist")}
          className={`
            ${button}
            bg-white border border-gray-200 shadow-sm text-gray-700
            hover:shadow-md
          `}
        >
          View Shortlist
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <PlatformFilter
          selected={platform}
          onChange={(p) => {
            setPlatform(p);
            setSearchQuery("");
          }}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        <ProfileList
          profiles={filtered}
          platform={platform}
          searchQuery={searchQuery}
          onProfileClick={handleProfileClick}
        />
      </div>
    </Layout>
  );
}