"use client"
import React, { useState } from 'react'

import { Users } from 'lucide-react';
import HeadingBlock from '@/components/molecules/HeadingBlock';
import UsersTable from '@/components/organisms/UsersTable';
import { prisma } from '@/libs/prisma';
import { Button } from '@radix-ui/themes';
import UserDialog from '@/components/molecules/UserDialog';



// async function loadUsers() {

//   return await prisma.user.findMany();

// }

const page =  () => {

  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => setDialogOpen(prev => !prev);

  // const users = await loadUsers().then(users =>
  //   users.map(user => ({
  //     ...user,
  //     createdDate: user.createdAt.toISOString(),
  //   }))
  // );
  return (
    <div className='flex flex-col gap-6'>

      <div className="flex flex-row justify-between items-center">
        <HeadingBlock title={'Usuarios'} description={'Administra usuarios y roles del sistema'} />

        <div className='flex flex-row gap-4 items-center justify-center'>

          <Users size={30} className='text-secondary' />
          <Button color='yellow' size="3" style={{ cursor: 'pointer' }} onClick={toggleDialog}>
            Agregar Usuario
          </Button>
        </div>
      </div>

      {/* <UsersTable users={users} /> */}

      <UserDialog open={dialogOpen} onClose={toggleDialog}/>

    </div>
  )
}

export default page