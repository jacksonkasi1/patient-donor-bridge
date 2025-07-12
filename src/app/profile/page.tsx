"use client"

import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, Heart, Settings, LogOut, Calendar, Award, Activity } from "lucide-react"

const donorData = {
  name: "John Donor",
  email: "john@bloodconnect.com",
  bloodType: "O+",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  totalDonations: 12,
  lastDonation: "March 15, 2024",
  nextEligible: "May 15, 2024",
  avatar: "https://github.com/shadcn.png"
}

const donationHistory = [
  { date: "March 15, 2024", type: "Whole Blood", location: "SF Blood Center", recipient: "Sarah J." },
  { date: "January 10, 2024", type: "Platelets", location: "UCSF Medical", recipient: "Michael R." },
  { date: "November 5, 2023", type: "Whole Blood", location: "SF Blood Center", recipient: "Emma W." },
  { date: "September 2, 2023", type: "Plasma", location: "Red Cross Center", recipient: "David C." }
]

const achievements = [
  { title: "First Time Donor", icon: "🩸", date: "2020" },
  { title: "10 Donations", icon: "🏆", date: "2023" },
  { title: "Life Saver", icon: "❤️", date: "2024" },
  { title: "Regular Donor", icon: "⭐", date: "2024" }
]

export default function DonorProfile() {
  const router = useRouter()

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
        <h1 className="text-xl font-medium">My Profile</h1>
      </header>

      {/* Profile Content */}
      <main className="px-6 py-8 space-y-6">
        {/* Donor Profile Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={donorData.avatar} alt={donorData.name} />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-medium">{donorData.name}</h2>
                <p className="text-sm text-muted-foreground">{donorData.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline">{donorData.bloodType}</Badge>
                  <Badge className="bg-green-100 text-green-800">Active Donor</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">{donorData.phone}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm text-muted-foreground">{donorData.location}</p>
            </div>
          </CardContent>
        </Card>

        {/* Donation Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Donation Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-red-500">{donorData.totalDonations}</p>
                <p className="text-xs text-muted-foreground">Total Donations</p>
              </div>
              <div>
                <p className="text-lg font-medium">Mar 15</p>
                <p className="text-xs text-muted-foreground">Last Donation</p>
              </div>
              <div>
                <p className="text-lg font-medium">May 15</p>
                <p className="text-xs text-muted-foreground">Next Eligible</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Donations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Recent Donations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {donationHistory.slice(0, 3).map((donation, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <div>
                  <p className="text-sm font-medium">{donation.type}</p>
                  <p className="text-xs text-muted-foreground">{donation.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{donation.date}</p>
                  <p className="text-xs text-muted-foreground">for {donation.recipient}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start" asChild>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              View Full Donation History
            </div>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <div className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Account Settings
            </div>
          </Button>
          
          <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700" asChild>
            <div className="flex items-center">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </div>
          </Button>
        </div>
      </main>
    </div>
  )
}