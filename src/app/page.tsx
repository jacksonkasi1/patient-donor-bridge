import { ThemeToggle } from "@/components/theme-toggle";
import { UserProfile } from "@/components/user-profile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Bell } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen p-4 space-y-6">
      {/* Header with Theme Toggle and User Profile */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">BloodConnect</h1>
          <p className="text-sm text-muted-foreground">Patient Donor Bridge</p>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserProfile />
        </div>
      </header>

      {/* AI Patient Grid - Demo */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          <h2 className="text-lg font-semibold">AI Patients</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {/* Patient Card 1 */}
          <Card className="relative">
            <CardHeader className="pb-2">
              <div className="relative">
                <Avatar className="h-16 w-16 mx-auto">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Sarah" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <Badge 
                  variant="destructive" 
                  className="absolute -bottom-1 -right-1 h-3 w-3 p-0 flex items-center justify-center"
                >
                  <Bell className="h-2 w-2" />
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              <CardTitle className="text-sm">Sarah</CardTitle>
              <CardDescription className="text-xs">Critical</CardDescription>
            </CardContent>
          </Card>

          {/* Patient Card 2 */}
          <Card>
            <CardHeader className="pb-2">
              <div className="relative">
                <Avatar className="h-16 w-16 mx-auto">
                  <AvatarImage src="https://github.com/vercel.png" alt="Mike" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <Badge 
                  className="absolute -bottom-1 -right-1 h-3 w-3 p-0 bg-yellow-500"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              <CardTitle className="text-sm">Mike</CardTitle>
              <CardDescription className="text-xs">Moderate</CardDescription>
            </CardContent>
          </Card>

          {/* Patient Card 3 */}
          <Card>
            <CardHeader className="pb-2">
              <div className="relative">
                <Avatar className="h-16 w-16 mx-auto">
                  <AvatarImage src="https://github.com/github.png" alt="Emma" />
                  <AvatarFallback>EW</AvatarFallback>
                </Avatar>
                <Badge 
                  className="absolute -bottom-1 -right-1 h-3 w-3 p-0 bg-green-500"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              <CardTitle className="text-sm">Emma</CardTitle>
              <CardDescription className="text-xs">Stable</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">shadcn/ui Demo</CardTitle>
          <CardDescription>
            Testing theme toggle and user profile components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This is a mobile-only design (max-width: 480px) using shadcn/ui components exclusively.
            Try switching between light and dark themes using the toggle button above.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
