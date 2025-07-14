import HeadingBlock from '@/components/molecules/HeadingBlock'
import { ArrowDownUp } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <HeadingBlock title={'Transacciones'} description={'Gestiona los movimientos de inventario'}  />
       <ArrowDownUp size={30} className='text-secondary'/>
    </div>
  )
}

export default page