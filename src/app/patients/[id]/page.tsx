"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

const patientData = {
  1: {
    name: "Sarah Johnson",
    bloodType: "O+",
    status: "critical",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b85b1d4c?w=300&h=300&fit=crop&crop=face",
    conversation: [
      "How can I help you?",
      "I need blood donations to continue my treatment.",
      "As a teacher, I want to get back to my students.",
      "Your donation could save my life.",
      "Thank you for considering helping me."
    ]
  },
  2: {
    name: "Michael Roberts", 
    bloodType: "AB-",
    status: "moderate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    conversation: [
      "How can I help you?",
      "I need AB- blood for my rare disorder treatment.",
      "I want to be there for my two kids.",
      "Your donation helps me stay strong for them.",
      "Thank you for considering being my hero."
    ]
  }
}

export default function PatientProfile() {
  const params = useParams()
  const router = useRouter()
  const patientId = params.id as string
  const patient = patientData[patientId as keyof typeof patientData]
  
  const [isListening, setIsListening] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const startConversation = setTimeout(() => {
      setIsListening(true)
      setIsTyping(true)
    }, 1000)
    return () => clearTimeout(startConversation)
  }, [])

  useEffect(() => {
    if (!isListening || !patient?.conversation) return

    const currentMessage = patient.conversation[currentMessageIndex]
    if (!currentMessage) return

    let charIndex = 0
    setDisplayedText("")
    
    const typewriterInterval = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setDisplayedText(currentMessage.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typewriterInterval)
        setIsTyping(false)
        
        // Move to next message after a pause
        setTimeout(() => {
          if (currentMessageIndex < patient.conversation.length - 1) {
            setCurrentMessageIndex(prev => prev + 1)
            setIsTyping(true)
          }
        }, 2000)
      }
    }, 50) // Typing speed

    return () => clearInterval(typewriterInterval)
  }, [currentMessageIndex, isListening, patient?.conversation])

  if (!patient) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Patient not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className="absolute top-4 left-0 right-0 w-full max-w-[480px] mx-auto px-6 z-20">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => router.back()}
          className="text-foreground hover:bg-muted"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </header>

      {/* Conversation Text at Top */}
      <div className="absolute top-24 left-0 right-0 px-8 text-center z-10">
        {isListening && displayedText && (
          <div className="space-y-2 animate-fade-in">
            <p className="text-2xl font-light tracking-wide text-foreground">
              Hey {patient.name.split(' ')[0]}
            </p>
            <p className="text-lg font-light text-muted-foreground">
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </p>
          </div>
        )}
      </div>

      {/* Central Patient Avatar Animation */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          {/* Patient Avatar with Border */}
          <div className={`w-48 h-48 rounded-full bg-card border-4 border-border p-2 transition-transform duration-1000 ${
            isListening ? 'scale-110' : 'scale-100'
          }`}>
            <Avatar className="w-full h-full">
              <AvatarImage 
                src={patient.avatar} 
                alt={patient.name}
                className="object-cover"
              />
              <AvatarFallback className="text-4xl font-medium text-card-foreground">
                {patient.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
          
          {/* Outer Pulse Ring */}
          {isListening && (
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping scale-125"></div>
          )}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="absolute bottom-8 left-0 right-0 px-6 w-full max-w-[480px] mx-auto">
        <div className="flex gap-3">
          <Button 
            variant="outline"
            size="lg"
            className="flex-1 h-12"
            onClick={() => router.push(`/patients/${patientId}/details`)}
          >
            View Details
          </Button>
          
          <Button 
            size="lg"
            className="flex-1 h-12"
            onClick={() => router.push(`/donate/${patientId}/book`)}
          >
            Donate
          </Button>
        </div>
      </div>
    </div>
  )
}