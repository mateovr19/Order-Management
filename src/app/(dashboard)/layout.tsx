'use client';

/**
 * Layout protegido para el dashboard de la aplicación.
 * 
 * Este layout:
 * - Verifica si el usuario tiene una sesión activa con Supabase.
 * - Redirige automáticamente a `/login` si no hay sesión.
 * - Muestra un Sidebar fijo en el lado izquierdo.
 * - Renderiza el contenido de las páginas del dashboard dentro del `<main>`.
 */

/*
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
*/
import Sidebar from '@/components/organisms/Sidebar/index';
import { SessionProvider } from 'next-auth/react';

export default function DashboardLayout({
  children,
}: {
  /** Elementos secundarios (páginas específicas) que se renderizan dentro del layout */
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-64 p-4 md:ml-0 md:pl-64">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
}
