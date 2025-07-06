'use client'
import React from 'react';
import { Flex, TextField, Button, Text } from '@radix-ui/themes';
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { useForm, Controller } from 'react-hook-form';
import { signIn } from 'next-auth/react';

export default function SigninForm() {
  const { 
    control, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    values: {
      email: "",
      password:""
    }
  });
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: "/dashboard"
    })
    if (result?.ok && result.url) {
      window.location.href = result.url;
    } else if (result?.error) {
      // Muestra un mensaje de error
      alert("Credenciales incorrectas");
    }
  })
  return (
    <form onSubmit={onSubmit}>
      <Flex direction='column' gap="2">
        <label htmlFor="email">Email</label>
        <Controller
          name='email'
          control={control}
          rules={{
            required: { 
              message: "Email is required", 
              value: true
            }
          }}
          render={({field}) => {
            return (
              <TextField.Root 
                id='email'
                type='email' 
                placeholder='email@domain.com'
                { ... field }
              >
                <TextField.Slot>
                    <EnvelopeClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />
        { errors.email && <Text color='red'>{errors.email.message}</Text>}

        <label htmlFor="password">Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: { 
              message: "Password is required", 
              value: true
            },
            minLength: {
              message: "Password must be at least 6 characters",
              value: 6
            }
          }}
          render={({ field }) => (
            <TextField.Root id= 'password' type="password" placeholder="********" {...field}>
              <TextField.Slot>
                <LockClosedIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          )}
        />
        { errors.password && <Text color='red' className='text-xs'>{errors.password.message}</Text>}

        <Button type='submit' mt="4">
            Sign In
        </Button>

      </Flex>
    </form>
  )
}