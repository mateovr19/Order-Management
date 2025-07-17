import { Button } from '@radix-ui/themes';
import React from 'react'


interface DialogProps {
    open: boolean;
    onClose: () => void;
}


const index = ({ open, onClose }: DialogProps) => {
    return !open ? null : (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Crear Nuevo Maestro</h2>


                <h1>
                    hola mundo
                </h1>

                <div className="flex justify-end space-x-2 mt-4 gap-2">
                    <Button type='submit'  onClick={onClose} mt="4" color='red' style={{ cursor: 'pointer' }}>
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>



    )
}



export default index