import Link from 'next/link';

const Sidebar = () => {
  const userRole = 'admin'; // Simula el rol mientras no este la base de datso

  return (
    <div>
      <aside className="w-64 h-screen bg-gray-900 text-white p-4 fixed left-0 top-0">
        <h2 className="text-xl font-bold mb-4">Menú</h2>
        <ul>
          <li className="mb-2">
            <Link href="/transitions" className="hover:underline">Transacciones</Link>
          </li>
          <li className="mb-2">
            <Link href="/masterful" className="hover:underline">Maestros</Link>
          </li>

          {/* Solo los admin pueden ver este enlace */}
          {userRole === 'admin' && (
            <li className="mb-2">
              <Link href="/users" className="hover:underline">Usuarios</Link>
            </li>
          )}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;