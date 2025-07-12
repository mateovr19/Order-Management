import React from "react"
import { Text } from '@radix-ui/themes'
import SignIn from '@/app/auth/Login/page'

export default function Home() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/Home-page.jpg)'}}
    >
      <div className="h-full w-full bg-black/50 flex items-center">
        <div className="lg:ml-20 lg:max-w-sm w-full max-w-xl flex flex-col items-center gap-6">
          <Text size="8" weight="bold" color="yellow" as="p" className="mb-6">
            Bienvenid@
          </Text>
          <SignIn />
        </div>
      </div>
    </div>
  )
}