"use client"

import { useStoreModalStore } from "@/hooks/use-store-modal";
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function HomePage() {
  const onOpen = useStoreModalStore((state) => state.onOpen)
  const isOpen = useStoreModalStore((state) => state.isOpen)

  useEffect(() => {
    if(!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])
  
  return(
    <div className="p-4">
      Root Page
    </div>
  )
}