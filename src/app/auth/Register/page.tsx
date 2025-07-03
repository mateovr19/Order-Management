import React from 'react'
import { Container, Card, Heading, Flex, Text, Link } from '@radix-ui/themes'
import NavLink from 'next/link'
import SignupForm from '../../../components/auth/SignupForm'

export default function Register() {
  return (
    <>
      <Container size="1" height="100%" className="md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className='w-full' size="5">
            <Heading>Sign Up</Heading>
            <SignupForm />
            <Flex justify="between" my="4">
            <Text>
              Already have an Account?
            </Text>
            <Link asChild>
              <NavLink href="/auth/Login" passHref>Sign In</NavLink>
            </Link>
          </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}