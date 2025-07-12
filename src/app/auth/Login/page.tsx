import React from 'react'
import { Container, Card, Heading, Flex, Text, Link } from '@radix-ui/themes'
import NavLink from 'next/link'
import SignIn from '../../../components/auth/SigninForm'

export default function Login() {
  return (
    <Container size="1" height="100%" className="md:p-0">
      <div className="bg-zinc-800/20 rounded-xl p-6">
        <Heading color="yellow">Sign In</Heading>
        <SignIn />
        <Flex justify="between" my="4">
          <Text color="yellow">Don&apos;t have an Account?</Text>
          <Link color='yellow' asChild>
            <NavLink href="/auth/Register" passHref>Sign Up</NavLink>
          </Link>
        </Flex>
      </div>
    </Container>
  )
}