import { useShortlistStore } from "@/store/shortlistStore";
import { VerifiedBadge } from "@/components/VerifiedBadge";

export function ShortlistPage() {
  const shortlisted = useShortlistStore((state) => state.shortlisted);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Shortlisted Profiles</h1>

      {shortlisted.length === 0 ? (
        <p className="text-gray-500">No profiles added yet.</p>
      ) : (
        shortlisted.map((profile) => (
          <div
            key={profile.user_id}
            className="flex items-center gap-3 p-3 border mb-2"
          >
            <img
              src={profile.picture}
              className="w-10 h-10 rounded-full"
            />

            <div>
              <div className="font-bold">
                @{profile.username}
                <VerifiedBadge verified={profile.is_verified} />
              </div>
              <div className="text-sm text-gray-600">
                {profile.fullname}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}