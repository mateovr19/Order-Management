import { Users } from 'lucide-react'
import React from 'react'

const Index = () => {
  return (
    <div className='flex flex-row max-w-[200px] p-[24px] border'>

        <div className="flex flex-row gap-2" >

          <div>
            <Users size={30} />
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

  )
}

export default Index