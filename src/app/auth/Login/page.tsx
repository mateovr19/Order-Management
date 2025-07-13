import React from 'react'
import { Container, Heading } from '@radix-ui/themes'
import SignIn from '../../../components/auth/SigninForm'

export default function Login() {
  return (
    <Container size="1" height="100%" className='w-full p-6'>
      <div className="bg-zinc-800/20 rounded-xl p-6 py-10">
        <Heading color="yellow">Iniciar Sesión</Heading>
        <SignIn />
      </div>
    </Container>
  )
}