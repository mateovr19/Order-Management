import React from 'react'

import { Users } from 'lucide-react';
import HeadingBlock from '@/components/molecules/HeadingBlock';
import UsersTable from '@/components/organisms/UsersTable';
import { prisma } from '@/libs/prisma';



async function loadUsers() {

  return await prisma.user.findMany();

}

const page = async () => {

  const users = await loadUsers().then(users => 
    users.map(user => ({
      ...user,
      createdDate: user.createdAt.toISOString(),
    }))
  );
  return (
    <div className='flex flex-col gap-6'>

      <div className="flex flex-row justify-between items-center">
        <HeadingBlock title={'Usuarios'} description={'Administra usuarios y roles del sistema'} />
        <Users size={30} className='text-secondary' />
      </div>

    <UsersTable users={users} />
    
    </div>
  )
}

export default page