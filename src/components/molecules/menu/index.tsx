import React from 'react'
import Link from 'next/link'
import { Briefcase, Home, Users } from 'lucide-react'
import { useSession } from 'next-auth/react'

const Menu = () => {
    const { data: session } = useSession();
    const user = session?.user;
    const role = user?.role ?? 'USER';
  return (
    <div>
        <div className="p-10 md:p-0">
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
    </div>
  )
}

export default Menu