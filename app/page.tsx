"use server"

import { UserButton, auth, currentUser } from "@clerk/nextjs";

export default async function HomePage() {
  return(
    <div className="'h-screen">
      <UserButton />
    </div>
  )
}