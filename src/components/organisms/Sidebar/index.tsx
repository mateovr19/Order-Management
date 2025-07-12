'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import {
  Menu,
  Home,
  Users,
  Briefcase,
  LogOut,
} from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  if (status === 'loading') return null;

  const user = session?.user;
  const role = user?.role ?? 'USER';

  return (
    <>
      {/* Botón hamburguesa en móvil */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      <div>
        
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-4 z-40 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block flex flex-col justify-between`}
      >
        {/* Menú principal */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Menú</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/transitions" className="flex items-center gap-2 hover:underline">
                <Briefcase size={18} />
                Transacciones
              </Link>
            </li>
            <li>
              <Link href="/masterful" className="flex items-center gap-2 hover:underline">
                <Home size={18} />
                Maestros
              </Link>
            </li>
            {role === 'ADMIN' && (
              <li>
                <Link href="/users" className="flex items-center gap-2 hover:underline">
                  <Users size={18} />
                  Usuarios
                </Link>
              </li>
            )}
          </ul>
        </div>
        
        <div>
          
        </div>

        {/* Perfil de usuario + cerrar sesión */}
        <div className="border-t border-gray-700 pt-4 mt-6">
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

          {/* Botón cerrar sesión */}
          <button
            onClick={() => signOut({ callbackUrl: '/' })}

            className="cursor-pointer flex items-center gap-2 text-sm text-red-400 hover:text-red-200 transition"
          >
            <LogOut size={18} />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Fondo oscuro en móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
