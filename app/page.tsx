import { signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth"
import {NEXT_AUTH_CONFIG} from "@/lib/auth"
import Appbar from "@/Appbar";

export default async function Home() {

  async function getUser() {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    return session;
  }
  
  const session = await getUser();

  return (
   <>
    <Appbar/>
    <div>
      {
        JSON.stringify(session)
      }
    </div>

   </>
  );
}
