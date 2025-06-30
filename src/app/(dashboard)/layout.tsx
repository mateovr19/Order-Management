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
import Sidebar from '@/app/components/organisms/Sidebar';

export default function DashboardLayout({
  children,
}: {
  /** Elementos secundarios (páginas específicas) que se renderizan dentro del layout */
  children: React.ReactNode;
}) {
/* 
  // Estado para mostrar una pantalla de carga mientras se verifica la sesión
  const [loading, setLoading] = useState(true);

  // Hook de navegación de Next.js (App Router)
  const router = useRouter();

  // Cliente de Supabase configurado para componentes cliente
  const supabase = createClientComponentClient();

  // Verifica la sesión del usuario al montar el componente
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        // Redirige a /login si el usuario no está autenticado
        router.push('/login');
      } else {
        // Si hay sesión, desactiva la pantalla de carga
        setLoading(false);
      }
    });
  }, [supabase, router]);

  // Mientras se verifica la sesión, se muestra un mensaje de carga
  if (loading) return <div className="p-4">Cargando...</div>;
*/
  // Layout con Sidebar fijo a la izquierda y contenido dinámico en el main
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 p-4">
        {children}
      </main>
    </div>
  );
}
