import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br 
        from-[#e3f2ff] via-[#ffe7f5] to-[#e5ffe9]  /* pastel blue → pink → green */
        flex justify-center px-4 py-10
      "
    >
      <div className="w-full max-w-5xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-[#201522]">Profile</h1>
            <p className="text-sm text-[#8c6f99] mt-1">
              View and update your profile details.
            </p>
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 rounded-xl bg-[#ff6b81] text-xs font-semibold text-white shadow-sm hover:bg-[#ff4d67]"
          >
            Logout
          </button>
        </div>

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: avatar */}
          <div
            className="
              col-span-1 
              bg-white/80 backdrop-blur-xl 
              border border-[#c5d8ff] 
              rounded-2xl p-6 shadow-[0_18px_45px_rgba(87,66,117,0.18)]
            "
          >
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-[#a5b4fc] via-[#f9a8d4] to-[#6ee7b7] p-[3px] mb-4">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-center text-[#201522]">
              {user.name}
            </h2>
            {user.username && (
              <p className="text-xs text-center text-[#8b6f7a] mt-1">
                @{user.username}
              </p>
            )}
            <p className="mt-3 text-[11px] text-center text-[#9c7ca9]">
              Luvierra beauty enthusiast
            </p>
          </div>

          {/* Card 2: details */}
          <div
            className="
              col-span-2 
              bg-white/85 backdrop-blur-xl 
              border border-[#ffd6ea] 
              rounded-2xl p-6 shadow-[0_18px_45px_rgba(204,112,141,0.16)]
            "
          >
            <h3 className="text-sm font-semibold text-[#3c2831] mb-4">
              Profile details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <Detail label="Name" value={user.name} />
              <Detail label="Username" value={user.username || "—"} />
              <Detail label="Email" value={user.email} />
              <Detail label="Gender" value={user.gender || "Not specified"} />
              <Detail label="Country" value={user.country || "Not specified"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="space-y-1">
      <p className="text-[11px] uppercase tracking-wide text-[#b095c3]">
        {label}
      </p>
      <p className="text-sm font-medium text-[#261a20]">{value}</p>
    </div>
  );
}
