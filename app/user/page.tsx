import React from 'react'
import { getServerSession } from "next-auth"
import {NEXT_AUTH_CONFIG} from "@/lib/auth"

type Props = {}

async function getUser() {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    return session;
  }

export default async function Home() {
    
    const session = await getUser();

    return <>
        <div>{JSON.stringify(session)}</div>
    </>
}