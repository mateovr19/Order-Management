'use client'
import React from 'react'
import { Flex, TextField, Button } from '@radix-ui/themes';
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

export default function SigninForm() {
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
    console.log(data)
    const res = await axios.post('/api/auth/register', data)
    console.log(res)
  })
  return (
    <form onSubmit={onSubmit}>
      <Flex direction='column' gap="2">
        <label htmlFor="name">Name:</label>
        <Controller
          name='name'
          control={control}
          rules={{
            required: {
              message: "Name is required",
              value: true
            }
          }}
          render={({field}) => {
            return (
              <TextField.Root 
                type='text' 
                placeholder='Write yout name'
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

        <label htmlFor="email">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              message: "Email is required",
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

        <label htmlFor="password">Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              message: "Password is required",
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

        <Button type='submit'>
            Sign Up
        </Button>

      </Flex>
    </form>
  )
}