"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function UserProfile() {
  const router = useRouter()

  const handleProfileClick = () => {
    router.push('/profile')
  }

  return (
    <Button 
      variant="ghost" 
      className="relative h-10 w-10 rounded-full"
      onClick={handleProfileClick}
    >
      <Avatar className="h-10 w-10">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </Button>
  )
}