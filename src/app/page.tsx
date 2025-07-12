import { ThemeToggle } from "@/components/theme-toggle";
import { UserProfile } from "@/components/user-profile";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const patients = [
  {
    id: 1,
    name: "Sarah Johnson",
    bloodType: "O+",
    status: "critical",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b85b1d4c?w=120&h=120&fit=crop&crop=face",
    fallback: "SJ"
  },
  {
    id: 2,
    name: "Michael Roberts",
    bloodType: "AB-",
    status: "moderate", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    fallback: "MR"
  },
  {
    id: 3,
    name: "Emma Wilson",
    bloodType: "B+",
    status: "stable",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
    fallback: "EW"
  },
  {
    id: 4,
    name: "David Chen",
    bloodType: "A-",
    status: "critical",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    fallback: "DC"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    bloodType: "O-",
    status: "moderate",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
    fallback: "LT"
  },
  {
    id: 6,
    name: "James Parker",
    bloodType: "AB+",
    status: "stable",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
    fallback: "JP"
  },
  {
    id: 7,
    name: "Maria Garcia",
    bloodType: "A+",
    status: "critical",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
    fallback: "MG"
  },
  {
    id: 8,
    name: "Alex Kumar",
    bloodType: "B-",
    status: "moderate",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
    fallback: "AK"
  },
  {
    id: 9,
    name: "Sophie Miller",
    bloodType: "O+",
    status: "stable",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face",
    fallback: "SM"
  },
  {
    id: 10,
    name: "Ryan Foster",
    bloodType: "A-",
    status: "critical",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face",
    fallback: "RF"
  },
  {
    id: 11,
    name: "Nina Patel",
    bloodType: "AB-",
    status: "moderate",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&h=120&fit=crop&crop=face",
    fallback: "NP"
  },
  {
    id: 12,
    name: "Carlos Rivera",
    bloodType: "B+",
    status: "stable",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=120&h=120&fit=crop&crop=face",
    fallback: "CR"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "critical":
      return "bg-red-500";
    case "moderate":
      return "bg-yellow-500";
    case "stable":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header - Clean and minimal */}
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <div>
          <h1 className="text-xl font-medium">AI Patients</h1>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserProfile />
        </div>
      </header>

      {/* AI Patient Grid - Globos Style */}
      <main className="px-6 py-8">
        <div className="grid grid-cols-3 gap-6">
          {patients.map((patient) => (
            <div key={patient.id} className="flex flex-col items-center space-y-2">
              {/* Large Circular Profile Image - 120px as per design system */}
              <div className="relative">
                <Avatar className="h-[120px] w-[120px] border-2 border-border">
                  <AvatarImage 
                    src={patient.avatar} 
                    alt={patient.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl font-medium">
                    {patient.fallback}
                  </AvatarFallback>
                </Avatar>
                
                {/* Status Indicator - 12px circle at bottom-right */}
                <div className="absolute -bottom-1 -right-1">
                  <Badge 
                    className={`h-3 w-3 p-0 rounded-full border-2 border-background ${getStatusColor(patient.status)}`}
                  />
                  {/* Bell icon overlay for critical patients */}
                  {patient.status === "critical" && (
                    <Bell className="absolute -top-2 -right-2 h-4 w-4 text-red-500 bg-background rounded-full p-0.5" />
                  )}
                </div>
              </div>
              
              {/* Patient Name - 16px medium weight, centered */}
              <div className="text-center space-y-1">
                <h3 className="text-base font-medium text-foreground leading-tight">
                  {patient.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {patient.bloodType}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
