"use server"

import { UserButton, auth, currentUser } from "@clerk/nextjs";

export default async function HomePage() {
  const user = await currentUser  

  const { userId } = auth()

  console.log(userId)
  
  return(
    <div className="'h-screen">
      <UserButton />
    </div>
  )
}