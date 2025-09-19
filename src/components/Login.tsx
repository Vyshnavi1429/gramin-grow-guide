import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone, Lock, Globe, Leaf } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* Farmer Profile Image */}
          <div className="mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
            <img 
              src={farmerProfile} 
              alt="Smart Krishi Farmer" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Brand Title */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <Leaf className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-primary">Smart Krishi</h1>
          </div>
          <p className="text-lg text-primary/70 font-medium">Intelligent Farming Dashboard</p>
        </div>

        {/* Login Form Container */}
        <div className="space-y-6">
          {/* Language Selector */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/50">
            <Label className="flex items-center gap-2 text-base font-semibold text-gray-700 mb-3">
              <Globe className="w-5 h-5 text-primary" />
              Select Language / भाषा चुनें
            </Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="h-14 text-base bg-gray-50 border-gray-200 rounded-xl">
                <SelectValue placeholder="English (English)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English (English)</SelectItem>
                <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
                <SelectItem value="bn">বাংলা (Bengali)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/50">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Phone Number Field */}
              <div className="space-y-3">
                <Label htmlFor="phone" className="flex items-center gap-2 text-base font-semibold text-gray-700">
                  <Smartphone className="w-5 h-5 text-primary" />
                  Phone Number / फोन नंबर
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="h-14 text-base bg-gray-50 border-gray-200 rounded-xl px-4 placeholder:text-gray-400"
                  required
                />
              </div>
              
              {/* Password Field */}
              <div className="space-y-3">
                <Label htmlFor="password" className="flex items-center gap-2 text-base font-semibold text-gray-700">
                  <Lock className="w-5 h-5 text-primary" />
                  Password (PIN) / पासवर्ड
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your PIN"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 text-base bg-gray-50 border-gray-200 rounded-xl px-4 placeholder:text-gray-400"
                  required
                />
              </div>
              
              {/* Login Button */}
              <Button 
                type="submit" 
                className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] text-white"
              >
                Login / लॉगिन करें
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;