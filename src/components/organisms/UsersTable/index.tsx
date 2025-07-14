import React from 'react'

const Index = () => {
  return (

    <div className='flex flex-col gap-5 rounded-lg border bg-background-card p-7 '>
      <h3>
        Lista de Usuarios
      </h3>

      <table className="table-w-full table-auto border-collapse text-sm">
        <thead>
          <tr>
            <th className='border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-700 dark:border-gray-600 dark:text-gray-200'>Usuario</th>
            <th className='border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-700 dark:border-gray-600 dark:text-gray-200'>Correo Electrónico</th>
            <th className='border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-700 dark:border-gray-600 dark:text-gray-200'>Rol</th>
            <th className='border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-700 dark:border-gray-600 dark:text-gray-200'>Fecha Creación</th>
            <th className='border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-700 dark:border-gray-600 dark:text-gray-200'>Acciones</th>
          </tr>
        </thead>
        <tbody className='bg-white dark:bg-gray-800'>
          <tr>
            <td className='border-b border-gray-100 p-4 pl-8 text-gray-700 dark:border-gray-700 dark:text-gray-200'>Juan Pérez</td>
            <td className='border-b border-gray-100 p-4 pl-8 text-gray-700 dark:border-gray-700 dark:text-gray-200'>juan.perez@email.com</td>
            <td className='border-b border-gray-100 p-4 pl-8 text-blue-600 dark:text-blue-400'>ADMIN</td>
            <td className='border-b border-gray-100 p-4 pl-8 text-gray-500 dark:text-gray-400'>2025-07-01</td>
            <td className='border-b border-gray-100 p-4 pl-8'>
              <button className='px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition'>Editar</button>
            </td>
          </tr>
          <tr>
            <td className='border-b border-gray-100 p-4 pl-8 text-gray-700 dark:border-gray-700 dark:text-gray-200'>Ana Gómez</td>
            <td className='border-b border-gray-100 p-4 pl-8 text-gray-700 dark:border-gray-700 dark:text-gray-200'>ana.gomez@email.com</td>
            <td className='border-b border-gray-100 p-4 pl-8 text-green-600 dark:text-green-400'>USER</td>
            <td className='border-b border-gray-100 p-4 pl-8 text-gray-500 dark:text-gray-400'>2025-06-15</td>
            <td className='border-b border-gray-100 p-4 pl-8'>
              <button className='px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition'>Editar</button>
            </td>
          </tr>
          <tr>
            <td className='border-b border-gray-100 p-4 pl-8 text-gray-700 dark:border-gray-700 dark:text-gray-200'>Carlos Ruiz</td>
            <td className='border-b border-gray-100 p-4 pl-8 text-gray-700 dark:border-gray-700 dark:text-gray-200'>carlos.ruiz@email.com</td>
            <td className='border-b border-gray-100 p-4 pl-8 text-green-600 dark:text-green-400'>USER</td>
            <td className='border-b border-gray-100 p-4 pl-8 text-gray-500 dark:text-gray-400'>2025-05-20</td>
            <td className='border-b border-gray-100 p-4 pl-8'>
              <button className='px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition'>Editar</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Index