"use client"
import React from 'react'
import { signIn, signOut } from "next-auth/react"

type Props = {}

export default function Appbar({}: Props) {
  return (
    <>
    <div className="top-0 left-0 sticky bg-black flex justify-end gap-2 p-2">
      <div className=" p-2 bg-white rounded-sm text-black" onClick={() => {
          signIn();
        }}> 
        SignIn
      </div>
      <div className=" p-2 bg-white rounded-sm text-black" onClick={() => {
        signOut();
      }}>Logout</div>
    </div>
    </>
  )
}