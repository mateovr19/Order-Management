import React from 'react'

import { Users} from 'lucide-react';

const page = () => {
  return (
    <div className='flex flex-col gap-6'>

      <div className='flex flex-col gap-1'>

        <h1 >Usuarios</h1>
        <p >  Administra usuarios y roles del sistema</p>
      </div>

      <div className='flex flex-row max-w-[200px] p-[24px] border'>

        <div className="flex flex-row gap-2" >

          <div>
            <Users size={30}/>
          </div>

          <div className='flex flex-col'>
            <h2>
              Total Usuarios
            </h2>
            <span>
              3
            </span>
          </div>

        </div>



      </div>

    </div>
  )
}

export default page