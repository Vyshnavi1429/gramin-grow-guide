import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Smartphone, Lock, Globe } from "lucide-react";
import farmerProfile from "@/assets/farmer-profile.jpg";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("en");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-0 bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden shadow-card">
            <img 
              src={farmerProfile} 
              alt="Smart Krishi Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">Smart Krishi</h1>
          <p className="text-muted-foreground">स्मार्ट कृषि - Modern Farming Solutions</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 text-base">
                <Smartphone className="w-4 h-4 text-primary" />
                Phone Number / ID
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-12 text-base"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2 text-base">
                <Lock className="w-4 h-4 text-primary" />
                Password / PIN
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base">
                <Globe className="w-4 h-4 text-primary" />
                Language / भाषा
              </Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                  <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                  <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
                  <SelectItem value="bn">বাংলা (Bengali)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-button transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              Login / लॉगिन करें
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;