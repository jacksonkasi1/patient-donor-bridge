"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mic, MicOff, Phone, PhoneOff } from "lucide-react"

const patientData = {
  1: {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b85b1d4c?w=200&h=200&fit=crop&crop=face"
  },
  2: {
    name: "Michael Roberts",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  }
}

type CallState = "connecting" | "connected" | "speaking" | "listening" | "ended"

export default function VoiceCall() {
  const params = useParams()
  const router = useRouter()
  const patientId = params.patientId as string
  const patient = patientData[patientId as keyof typeof patientData]
  
  const [callState, setCallState] = useState<CallState>("connecting")
  const [isMuted, setIsMuted] = useState(false)
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    // Simulate connection process
    const timer = setTimeout(() => {
      setCallState("connected")
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!patient) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Patient not found</p>
      </div>
    )
  }

  const handleMicToggle = () => {
    setIsMuted(!isMuted)
    if (!isMuted) {
      setIsListening(false)
    }
  }

  const handleTalk = () => {
    if (!isMuted && callState === "connected") {
      setIsListening(!isListening)
      setCallState(isListening ? "connected" : "speaking")
    }
  }

  const handleEndCall = () => {
    setCallState("ended")
    setTimeout(() => router.back(), 1000)
  }

  const getStatusText = () => {
    switch (callState) {
      case "connecting":
        return "Connecting..."
      case "connected":
        return "Connected"
      case "speaking":
        return "You are speaking..."
      case "listening":
        return `${patient.name.split(' ')[0]} is speaking...`
      case "ended":
        return "Call ended"
      default:
        return "Unknown"
    }
  }

  const getStatusColor = () => {
    switch (callState) {
      case "connecting":
        return "text-yellow-500"
      case "connected":
        return "text-green-500"
      case "speaking":
        return "text-blue-500"
      case "listening":
        return "text-green-500"
      case "ended":
        return "text-gray-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center px-6 py-4 border-b">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => router.back()}
          className="mr-4"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-medium">Voice Call</h1>
      </header>

      {/* Voice Call Interface - Globos Style */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 space-y-8">
        {/* Patient Name */}
        <h2 className="text-2xl font-medium text-center">
          {patient.name}
        </h2>

        {/* Large Patient Profile - 200px centered */}
        <div className="relative">
          <Avatar className="h-[200px] w-[200px] border-4 border-border">
            <AvatarImage 
              src={patient.avatar} 
              alt={patient.name}
              className="object-cover"
            />
            <AvatarFallback className="text-4xl font-medium">
              {patient.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          {/* Active Status Indicator - 16px green circle during conversation */}
          {callState === "connected" || callState === "speaking" || callState === "listening" ? (
            <div className="absolute -bottom-2 -right-2">
              <div className={`h-4 w-4 rounded-full border-4 border-background ${
                callState === "speaking" ? "bg-blue-500" : 
                callState === "listening" ? "bg-green-500" : "bg-green-500"
              } ${isListening || callState === "speaking" ? "animate-pulse" : ""}`} />
            </div>
          ) : null}
        </div>

        {/* Status Text */}
        <p className={`text-lg font-medium ${getStatusColor()}`}>
          {getStatusText()}
        </p>

        {/* Voice Controls - Large circular buttons */}
        <div className="flex items-center justify-center space-x-6 pt-8">
          {/* Microphone Button - 80px primary action */}
          <Button
            size="icon"
            variant={isMuted ? "secondary" : (isListening ? "default" : "outline")}
            className={`h-20 w-20 rounded-full ${
              isListening && !isMuted ? "animate-pulse bg-blue-500 hover:bg-blue-600" : ""
            }`}
            onClick={handleTalk}
            disabled={callState !== "connected" && callState !== "speaking"}
          >
            {isMuted ? (
              <MicOff className="h-8 w-8" />
            ) : (
              <Mic className="h-8 w-8" />
            )}
          </Button>

          {/* Mute Button - 60px circular */}
          <Button
            size="icon"
            variant={isMuted ? "destructive" : "outline"}
            className="h-16 w-16 rounded-full"
            onClick={handleMicToggle}
            disabled={callState === "connecting" || callState === "ended"}
          >
            {isMuted ? (
              <MicOff className="h-6 w-6" />
            ) : (
              <Mic className="h-6 w-6" />
            )}
          </Button>

          {/* End Call Button - 60px red circular */}
          <Button
            size="icon"
            variant="destructive"
            className="h-16 w-16 rounded-full"
            onClick={handleEndCall}
            disabled={callState === "ended"}
          >
            <PhoneOff className="h-6 w-6" />
          </Button>
        </div>

        {/* Instructions */}
        {callState === "connected" && (
          <div className="text-center space-y-2 max-w-sm">
            <p className="text-sm text-muted-foreground">
              Tap the microphone to speak
            </p>
            <p className="text-xs text-muted-foreground">
              ElevenLabs v3 voice integration ready
            </p>
          </div>
        )}
      </main>
    </div>
  )
}