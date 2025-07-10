'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  // Mostrar nada mientras se carga la sesión
  if (status === 'loading') return null;

  const userRole = session?.user?.role ?? 'USER';

  return (
    <>
      {/* Botón hamburguesa en móvil */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screem w-64 bg-gray-900 text-white p-4 z-40 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-xl font-bold mb-4">Menú</h2>
        <ul>
          <li className="mb-2">
            <Link href="/dashboard/transitions" className="hover:underline">Transacciones</Link>
          </li>
          <li className="mb-2">
            <Link href="/dashboard/masterful" className="hover:underline">Maestros</Link>
          </li>

          {/* Solo para administradores */}
          {userRole === 'ADMIN' && (
            <li className="mb-2">
              <Link href="/dashboard/users" className="hover:underline">Usuarios</Link>
            </li>
          )}
        </ul>
      </aside>

      {/* Capa oscura detrás en móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
