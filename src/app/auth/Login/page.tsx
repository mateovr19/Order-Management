import React from 'react'
import { Container, Card, Heading, Flex, Text, Link } from '@radix-ui/themes'
import NavLink from 'next/link'
import SignIn from '../../../components/auth/SigninForm'

export default function Login() {
  return (
    <>
      <Container size="1" height="100%" className="md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className='w-full' size="5">
            <Heading>Sign In</Heading>
            <SignIn />
            <Flex justify="between" my="4">
            <Text>
              Don't have an Account?
            </Text>
            <Link asChild>
              <NavLink href="/auth/Register" passHref>Sign Up</NavLink>
            </Link>
          </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}