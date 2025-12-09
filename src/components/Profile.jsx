import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-white flex justify-center px-4 py-10">
      <div className="w-full max-w-xl flex flex-col gap-6">

        {/* Avatar + Name card */}
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              {user.name}
            </h1>
            <p className="text-sm text-gray-500">
              Luvierra beauty enthusiast
            </p>
          </div>
        </div>

        {/* Details card */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 flex-1">
          <Detail label="Name" value={user.name} />
          <Detail label="DOB" value={user.dob || "Not specified"} />
          <Detail label="Phone number" value={user.phone || "Not specified"} />
          <Detail label="City" value={user.city || "Not specified"} />
          <Detail label="Email address" value={user.email} />
        </div>

        {/* Logout at bottom */}
        <button
  onClick={logout}
  className= "w-full rounded-2xl bg-gradient-to-r from-[#ff9ac8] via-[#ff8fb7] to-[#ffb08e] py-3 text-sm font-semibold text-white"
>
  Logout
</button>

      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-medium text-gray-400 uppercase">
        {label}
      </span>
      <span className="text-sm font-medium text-gray-800">
        {value}
      </span>
    </div>
  );
}
