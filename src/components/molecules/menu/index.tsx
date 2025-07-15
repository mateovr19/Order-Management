// Menu.tsx
import React from 'react'
import Link from 'next/link'
import { Briefcase, Home, Users } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation';


type Props = {
  onNavigate?: () => void;
};

const Menu = ({ onNavigate }: Props) => {
  const { data: session } = useSession();
  const user = session?.user;
  const role = user?.role ?? 'USER';

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="p-10 md:p-0">
      <h2 className="text-2xl font-bold mb-6">Menú</h2>
      <ul className="space-y-4">
        <li>
          <Link
            href="/transitions"
            className={isActive('/transitions') ? 'flex items-center gap-2 bg-primary rounded p-2' : 'flex items-center gap-2 hover:underline'}
            onClick={onNavigate}
          >
            <Briefcase size={18} />
            Transacciones
          </Link>
        </li>
        <li>
          <Link
            href="/masterful"
            className={isActive('/masterful') ? 'flex items-center gap-2 bg-primary rounded p-2' : 'flex items-center gap-2 hover:underline'}
            onClick={onNavigate}
          >
            <Home size={18} />
            Maestros
          </Link>
        </li>
        {role === 'ADMIN' && (
          <li>
            <Link
              href="/users"
              className={isActive('/users') ? 'flex items-center gap-2 bg-primary rounded p-2' : 'flex items-center gap-2 hover:underline'}
              onClick={onNavigate}
            >
              <Users size={18} />
              Usuarios
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Menu;
