"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"

type Props = {}

export default function Providers({children}:{children:React.ReactNode}) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}