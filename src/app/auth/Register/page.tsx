import React from 'react'
import { Container, Heading } from '@radix-ui/themes'
import SignupForm from '../../../components/auth/SignupForm'

export default function Register() {
  return (
    <Container size="1" height="100%" className="w-full p-6">
        <div className='bg-zinc-800/20 rounded-xl p-6 py-10'>
          <Heading className='!text-yellow-300'>Registrarse</Heading>
          <SignupForm />
        </div>
    </Container>
  );
}