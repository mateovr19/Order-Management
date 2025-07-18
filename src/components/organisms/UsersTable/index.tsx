import React, { useState } from 'react';
import { Button } from '@radix-ui/themes';
import Dialog from '@/components/organisms/DialogEditUsers/index';


type Role = 'ADMIN' | 'USER';

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  createdDate: string;
}

interface UsersTableProps {
  users: User[];
}


const Index = ({ users }: UsersTableProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const openEditDialog = (user: User) => {
    setSelectedUser(user);
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className='card flex flex-col gap-5 '>
      <h3>
        Lista de Usuarios
      </h3>

      {users.length > 0 ?
        (
          <div className="max-h-90 overflow-y-auto">
            <table className="table-base">
              <thead>
                <tr>
                  <th className="table-header-cell">Usuario</th>
                  <th className="table-header-cell">Correo Electrónico</th>
                  <th className="table-header-cell">Rol</th>
                  <th className="table-header-cell">Fecha Creación</th>
                  <th className="table-header-cell">Acciones</th>
                </tr>
              </thead>
              <tbody >

                {users.map((user) => (

                  <tr className="border-b table-row" key={user.id}>
                  <td className="table-cell">{user.name}</td>
                  <td className="table-cell">{user.email}</td>
                  <td className="table-cell table-cell-role-admin">{user.role}</td>
                  <td className="table-cell table-cell-muted">{new Date(user.createdDate).toLocaleDateString()}</td>
                  <td className="table-cell">
                    <Button
                      onClick={() => openEditDialog(user)}
                      color="yellow"
                      size="2"
                      style={{ cursor: 'pointer' }}
                      className="!px-4 !py-3"
                    >
                      Editar
                    </Button>
                  </td>
                </tr>
                ))}

              </tbody>
            </table>
          </div>

        )
        :
        (
          <p className="text-gray-500">No hay usuarios registrados.</p>
        )
      }
      {selectedUser && (
        <Dialog
          open={isDialogOpen}
          onClose={closeDialog}
          url="/api/auth/register" 
          method="PUT"
          initialValues={{
            name: selectedUser.name,
            email: selectedUser.email,
            role: selectedUser.role,
          }}
          id={selectedUser.id}
        />
      )}
    </div>
  )
}

export default Index