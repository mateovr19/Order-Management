import React from "react"
import { Container, Text } from '@radix-ui/themes'
import SignIn from '@/app/auth/Login/page'

export default function Home() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/Home-page.jpg)'}}
    >
      <div className="h-full w-full bg-black/50 flex items-center">
        <div className="ml-20 max-w-sm w-full">
          <Text size="8" weight="bold" color="yellow" as="p" className="mb-6">
            Bienvenid@
          </Text>
          <SignIn />
        </div>
      </div>
    </div>
  )
}