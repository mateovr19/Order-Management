import React from 'react'

const Index = () => {
  return (

    <div className='card flex flex-col gap-5 '>
      <h3>
        Lista de Usuarios
      </h3>

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
          <tbody className="bg-white dark:bg-gray-900">
            <tr className="border-b hover:bg-gray-50">
              <td className="table-cell">Juan Pérez</td>
              <td className="table-cell">juan.perez@email.com</td>
              <td className="table-cell table-cell-role-admin">ADMIN</td>
              <td className="table-cell table-cell-muted">2025-07-01</td>
              <td className="table-cell">
                <button className="table-action-button">Editar</button>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="table-cell">Ana Gómez</td>
              <td className="table-cell">ana.gomez@email.com</td>
              <td className="table-cell table-cell-role-user">USER</td>
              <td className="table-cell table-cell-muted">2025-06-15</td>
              <td className="table-cell">
                <button className="table-action-button">Editar</button>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="table-cell">Carlos Ruiz</td>
              <td className="table-cell">carlos.ruiz@email.com</td>
              <td className="table-cell table-cell-role-user">USER</td>
              <td className="table-cell table-cell-muted">2025-05-20</td>
              <td className="table-cell">
                <button className="table-action-button">Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Index