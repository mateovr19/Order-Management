"use client"
import HeadingBlock from '@/components/molecules/HeadingBlock'
import UserDialog from '@/components/molecules/UserDialog'
import UsersTable from '@/components/organisms/UsersTable'
import { Button } from '@radix-ui/themes'
import { Users } from 'lucide-react'
import React, { useState } from 'react'
import { Role } from '@prisma/client'

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


const UserPageClient = ({ users }: UsersTableProps) => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const toggleDialog = () => setDialogOpen(prev => !prev);
    
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

            <UsersTable users={users} />

            <UserDialog open={dialogOpen} onClose={toggleDialog} />

        </div>
    )
}

export default UserPageClient