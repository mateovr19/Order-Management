import React from 'react'
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const role = user?.role ?? 'USER';
  return (
          <div className="flex items-center gap-3 mb-4">
            {user?.image ? (
              <img
                src={user.image}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0).toUpperCase() ?? "U"}
              </div>
            )}
            <div className="text-sm">
              <p className="font-semibold">{user?.name ?? 'Usuario'}</p>
              <p className="text-xs text-gray-400">{user?.email}</p>
              <p className="text-xs text-gray-400">Rol: {role}</p>
            </div>
          </div>
  )
}

export default Profile