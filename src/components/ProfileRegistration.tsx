import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserCheck, MapPin } from "lucide-react";
import { useCrop } from "@/contexts/CropContext";

const ProfileRegistration = () => {
  const { setProfileCompleted } = useCrop();
  const [formData, setFormData] = useState({
    farmerName: "",
    phoneNumber: "",
    state: "",
    district: "",
    village: ""
  });

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.farmerName && formData.phoneNumber && formData.state) {
      setProfileCompleted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-card">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-primary">
            <UserCheck className="w-6 h-6" />
            Profile Registration
          </CardTitle>
          <p className="text-muted-foreground">प्रोफाइल पंजीकरण</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="farmerName">Farmer Name / किसान का नाम *</Label>
              <Input
                id="farmerName"
                value={formData.farmerName}
                onChange={(e) => setFormData({...formData, farmerName: e.target.value})}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phoneNumber">Phone Number / फोन नंबर *</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                placeholder="Enter phone number"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="state">State / राज्य *</Label>
              <Select value={formData.state} onValueChange={(value) => setFormData({...formData, state: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase().replace(/\s+/g, '-')}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="district">District / जिला</Label>
              <Input
                id="district"
                value={formData.district}
                onChange={(e) => setFormData({...formData, district: e.target.value})}
                placeholder="Enter district"
              />
            </div>
            
            <div>
              <Label htmlFor="village">Village / गाँव</Label>
              <Input
                id="village"
                value={formData.village}
                onChange={(e) => setFormData({...formData, village: e.target.value})}
                placeholder="Enter village"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-primary-glow"
            >
              Complete Registration / पंजीकरण पूरा करें
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileRegistration;