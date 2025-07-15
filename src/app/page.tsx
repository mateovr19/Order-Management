'use client'
import React, { useState } from "react"
import { Text } from '@radix-ui/themes'
import ToggleText from "@/components/molecules/ToggleText"
import SignIn from '@/app/auth/Login/page'
import SignUp from '@/app/auth/Register/page'

export default function Home() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  }

  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/Home-page.jpg)'}}
    >
      <div className="h-full w-full flex flex-col justify-center items-center lg:ml-20 lg:max-w-sm">
        <Text size="7" weight="bold" as="p" align="center" className="!text-yellow-300">
          Bienvenid@
        </Text>
        <div className="lg:mb-15 w-full max-w-xl flex flex-col items-center my-50 lg:my-0">
          {isSignUp ? <SignUp /> : <SignIn />}
          <ToggleText
            toggleForm={toggleForm}
            isSignUp={isSignUp}
          />
        </div>
      </div>
    </div>
  )
}