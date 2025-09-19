import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, MapPin, Droplets, Bug, CheckCircle, AlertCircle } from "lucide-react";
import cropsImage from "@/assets/crops-variety.jpg";

const CropsPage = () => {
  const [selectedCrop, setSelectedCrop] = useState("");
  const [formData, setFormData] = useState({
    farmerName: "",
    state: "",
    landArea: "",
    soilFertility: "",
    season: "",
    cropType: "",
    plantingDate: "",
    harvestDate: "",
  });

  // Sample registered crops data
  const registeredCrops = [
    {
      id: 1,
      name: "Rice",
      plantingDate: "2024-06-15",
      harvestDate: "2024-11-15",
      daysFromPlanting: 45,
      fertilizer: { name: "NPK 20-20-20", qty: "50kg", applied: true },
      pesticide: { name: "Carbofuran", qty: "2L", applied: false },
      workDone: {
        soilPlugging: true,
        wasteRemoval: true,
        yieldRecording: false,
      },
      yield: 35,
      status: "Growing"
    },
    {
      id: 2,
      name: "Wheat",
      plantingDate: "2024-01-10",
      harvestDate: "2024-05-10",
      daysFromPlanting: 120,
      fertilizer: { name: "DAP", qty: "75kg", applied: true },
      pesticide: { name: "Chlorpyrifos", qty: "1.5L", applied: true },
      workDone: {
        soilPlugging: true,
        wasteRemoval: true,
        yieldRecording: true,
      },
      yield: 42,
      status: "Harvested"
    },
  ];

  const suggestions = [
    { icon: Droplets, text: "Water needed tomorrow", type: "info", textHi: "कल पानी की जरूरत" },
    { icon: Bug, text: "Fertilizer required in 3 days", type: "warning", textHi: "3 दिन में उर्वरक की आवश्यकता" },
    { icon: AlertCircle, text: "Rain alert – avoid pesticides", type: "danger", textHi: "बारिश की चेतावनी - कीटनाशक से बचें" },
    { icon: Calendar, text: "Hot weather ahead – protect crops", type: "warning", textHi: "गर्म मौसम आगे - फसलों की सुरक्षा करें" },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-primary mb-4">My Crop Data / मेरी फसल डेटा</h1>
      
      <Tabs defaultValue="registration" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="registration">Crop Registration</TabsTrigger>
          <TabsTrigger value="registered">Registered Crops</TabsTrigger>
          <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
        </TabsList>

        {/* Crop Registration */}
        <TabsContent value="registration" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-primary" />
                Register New Crop / नई फसल रजिस्टर करें
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="farmerName">Farmer Name / किसान का नाम</Label>
                  <Input
                    id="farmerName"
                    value={formData.farmerName}
                    onChange={(e) => setFormData({...formData, farmerName: e.target.value})}
                    placeholder="Enter farmer name"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State / राज्य</Label>
                  <Select value={formData.state} onValueChange={(value) => setFormData({...formData, state: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="haryana">Haryana</SelectItem>
                      <SelectItem value="up">Uttar Pradesh</SelectItem>
                      <SelectItem value="bihar">Bihar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="landArea">Land Area (acres) / भूमि क्षेत्र</Label>
                  <Input
                    id="landArea"
                    type="number"
                    value={formData.landArea}
                    onChange={(e) => setFormData({...formData, landArea: e.target.value})}
                    placeholder="Enter land area"
                  />
                </div>
                <div>
                  <Label htmlFor="cropType">Crop Type / फसल प्रकार</Label>
                  <Select value={formData.cropType} onValueChange={(value) => setFormData({...formData, cropType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rice">Rice / चावल</SelectItem>
                      <SelectItem value="wheat">Wheat / गेहूं</SelectItem>
                      <SelectItem value="corn">Corn / मक्का</SelectItem>
                      <SelectItem value="soybean">Soybean / सोयाबीन</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Upload Soil Photo / मिट्टी की फोटो अपलोड करें</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <img src={cropsImage} alt="Sample" className="w-24 h-24 mx-auto mb-2 rounded-lg object-cover" />
                  <p className="text-sm text-muted-foreground">Click to upload soil photo</p>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-primary-glow">
                Submit Registration / रजिस्ट्रेशन सबमिट करें
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Registered Crops */}
        <TabsContent value="registered" className="space-y-4">
          {registeredCrops.map((crop) => (
            <Card key={crop.id} className="shadow-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    <span>{crop.name}</span>
                    <Badge variant={crop.status === "Harvested" ? "default" : "secondary"}>
                      {crop.status}
                    </Badge>
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    Day {crop.daysFromPlanting}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Bug className="w-4 h-4 text-primary" />
                      Fertilizer / उर्वरक
                    </h4>
                    <p className="text-sm">{crop.fertilizer.name}</p>
                    <p className="text-xs text-muted-foreground">{crop.fertilizer.qty}</p>
                    <Badge variant={crop.fertilizer.applied ? "default" : "secondary"}>
                      {crop.fertilizer.applied ? "Applied" : "Pending"}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Bug className="w-4 h-4 text-success" />
                      Pesticide / कीटनाशक
                    </h4>
                    <p className="text-sm">{crop.pesticide.name}</p>
                    <p className="text-xs text-muted-foreground">{crop.pesticide.qty}</p>
                    <Badge variant={crop.pesticide.applied ? "default" : "secondary"}>
                      {crop.pesticide.applied ? "Applied" : "Pending"}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Work Done / काम पूरा</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 ${crop.workDone.soilPlugging ? 'text-success' : 'text-muted-foreground'}`} />
                        <span className="text-sm">Soil Plugging</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 ${crop.workDone.wasteRemoval ? 'text-success' : 'text-muted-foreground'}`} />
                        <span className="text-sm">Waste Removal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 ${crop.workDone.yieldRecording ? 'text-success' : 'text-muted-foreground'}`} />
                        <span className="text-sm">Yield Recording</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Current Yield / वर्तमान उपज:</span>
                    <span className="text-lg font-bold text-primary">{crop.yield} quintals</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* AI Suggestions */}
        <TabsContent value="suggestions" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>AI Suggestions / AI सुझाव</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {suggestions.map((suggestion, index) => {
                const Icon = suggestion.icon;
                return (
                  <div key={index} className={`p-3 rounded-lg border-l-4 ${
                    suggestion.type === 'danger' ? 'border-l-destructive bg-destructive/5' :
                    suggestion.type === 'warning' ? 'border-l-warning bg-warning/5' :
                    'border-l-primary bg-primary/5'
                  }`}>
                    <div className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 mt-0.5 ${
                        suggestion.type === 'danger' ? 'text-destructive' :
                        suggestion.type === 'warning' ? 'text-warning' :
                        'text-primary'
                      }`} />
                      <div>
                        <p className="font-medium">{suggestion.text}</p>
                        <p className="text-sm text-muted-foreground">{suggestion.textHi}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CropsPage;