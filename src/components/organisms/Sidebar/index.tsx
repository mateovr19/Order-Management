'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import {
  LogOut,
  Menu as MenuIcon,
} from 'lucide-react';
import Menu from '@/components/molecules/menu';
import Profile from '@/components/molecules/profile';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };
  return (
    <>
      {/* Botón hamburguesa en móvil */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-primary text-white  p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >   
        <MenuIcon size={24} />
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 md:h-screen h-full w-64 bg-secondary text-white p-4 z-40 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static flex flex-col justify-between`}
      >
        {/* Menú principal */}
        <Menu onNavigate={() => setIsOpen(false)} />
        {/* Perfil de usuario + cerrar sesión */}
        <div className="border-t border-gray-700 pt-4 mt-6">
        <Profile />

          {/* Botón cerrar sesión */}
          <button
            onClick={() => handleSignOut()}
            className="cursor-pointer flex items-center gap-2 text-sm bg-primary text-white p-2 rounded hover:text-red-200 transition"
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
