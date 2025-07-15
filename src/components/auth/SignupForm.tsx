'use client'
import React, { useState } from 'react'
import { Flex, TextField, Button } from '@radix-ui/themes';
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

export default function SigninForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { 
    control,
    handleSubmit
  } = useForm({
    values: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    console.log(data)
    const res = await axios.post('/api/auth/register', data)
    console.log(res)
  })
  return (
    <form onSubmit={onSubmit}>
      <Flex direction='column' gap="2">
        <label htmlFor="name" className='text-yellow-300'>Nombre:</label>
        <Controller
          name='name'
          control={control}
          rules={{
            required: {
              message: "El nombre es requerido",
              value: true
            }
          }}
          render={({field}) => {
            return (
              <TextField.Root 
                type='text' 
                placeholder='Escribe tu nombre'
                autoFocus
                { ... field }
              >
                  <TextField.Slot>
                      <PersonIcon height="16" width="16" />
                  </TextField.Slot>
              </TextField.Root>
            )
          }}
        />

        <label htmlFor="email" className='text-yellow-300'>Correo:</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              message: "El correo es requerido",
              value: true
            }
          }}
          render={({ field }) => {
            return (
              <TextField.Root 
                type='email' 
                placeholder='email@domain.com'
                { ... field }
              >
                  <TextField.Slot>
                      <EnvelopeClosedIcon height="16" width="16" />
                  </TextField.Slot>
              </TextField.Root>
            )
          }}
        
        />

        <label htmlFor="password" className='text-yellow-300'>Contraseña:</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              message: "La contraseña es requerida",
              value: true
            }
          }}
          render={({ field }) => {
            return (
              <TextField.Root 
                type='password' 
                placeholder='********'
                { ... field }
              >
                  <TextField.Slot>
                      <LockClosedIcon height="16" width="16" />
                  </TextField.Slot>
              </TextField.Root>
            )
          }}
        />

        <Button type='submit' mt="4" color='orange' style={{ cursor: 'pointer' }} loading={isLoading} variant='classic'>
            Registrarse
        </Button>

      </Flex>
    </form>
  )
}