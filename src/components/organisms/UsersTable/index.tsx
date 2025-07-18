import React from 'react'


interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdDate: string;
}

interface UsersTableProps {
  users: User[];
}


const Index = ({ users }: UsersTableProps) => {

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

                {users.map((user, index) => (

                  <tr className="border-b table-row" key={user.id}>
                    <td className="table-cell">{user.name}</td>
                    <td className="table-cell">{user.email}</td>
                    <td className="table-cell table-cell-role-admin">{user.role}</td>
                    <td className="table-cell table-cell-muted">{user.createdDate}</td>
                    <td className="table-cell">

                      {index > 0 && ( <button className="table-action-button">Editar</button>) }
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

    </div>

  )
}

export default Index