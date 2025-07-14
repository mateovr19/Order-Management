import React from 'react'

import { Info, Users } from 'lucide-react';
import HeadingBlock from '@/components/molecules/HeadingBlock';
import InfoCard from '@/components/organisms/InfoCard';
import UsersTable from '@/components/organisms/UsersTable';

const page = () => {
  return (
    <div className='flex flex-col gap-6'>



      <div className="flex flex-row justify-between items-center">
        <HeadingBlock title={'Usuarios'} description={'Administra usuarios y roles del sistema'} />
        <Users size={30} className='text-secondary' />
      </div>

    <UsersTable />
    
    </div>
  )
}

export default page