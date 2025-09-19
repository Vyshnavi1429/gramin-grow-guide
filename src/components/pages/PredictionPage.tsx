import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, BarChart3, MapPin, Crop } from "lucide-react";

const PredictionPage = () => {
  const [predictionType, setPredictionType] = useState("my-crop");
  const [formData, setFormData] = useState({
    state: "",
    acres: "",
    cropType: "",
  });

  // Sample prediction data
  const myCropData = [
    { month: "Jan", expected: 20, actual: 18 },
    { month: "Feb", expected: 25, actual: 22 },
    { month: "Mar", expected: 30, actual: 28 },
    { month: "Apr", expected: 35, actual: 32 },
    { month: "May", expected: 40, actual: 35 },
    { month: "Jun", expected: 38, actual: 0 }, // Future prediction
  ];

  const stateData = [
    { crop: "Rice", actual: 45, predicted: 48 },
    { crop: "Wheat", actual: 38, predicted: 42 },
    { crop: "Corn", actual: 32, predicted: 35 },
    { crop: "Soybean", actual: 25, predicted: 28 },
    { crop: "Cotton", actual: 18, predicted: 22 },
  ];

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    // Prediction logic would go here
  };

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-primary mb-2">Yield Prediction</h1>
        <p className="text-muted-foreground">उपज की भविष्यवाणी</p>
      </div>

      {/* Input Form */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crop className="w-5 h-5 text-primary" />
            Prediction Input / भविष्यवाणी इनपुट
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePredict} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="acres">Land Area (acres) / भूमि क्षेत्र</Label>
                <Input
                  id="acres"
                  type="number"
                  value={formData.acres}
                  onChange={(e) => setFormData({...formData, acres: e.target.value})}
                  placeholder="Enter acres"
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
                    <SelectItem value="cotton">Cotton / कपास</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Auto-collected: Rainfall, Fertilizers, Climate History
              </p>
              <p className="text-xs text-muted-foreground">
                स्वचालित एकत्रित: वर्षा, उर्वरक, जलवायु इतिहास
              </p>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Prediction Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button
          onClick={() => setPredictionType("my-crop")}
          variant={predictionType === "my-crop" ? "default" : "outline"}
          className="h-16 flex flex-col gap-1"
        >
          <TrendingUp className="w-5 h-5" />
          <span>My Crop Data</span>
          <span className="text-xs opacity-70">मेरी फसल डेटा</span>
        </Button>
        
        <Button
          onClick={() => setPredictionType("state-data")}
          variant={predictionType === "state-data" ? "default" : "outline"}
          className="h-16 flex flex-col gap-1"
        >
          <MapPin className="w-5 h-5" />
          <span>State Data</span>
          <span className="text-xs opacity-70">राज्य डेटा</span>
        </Button>
      </div>

      {/* Prediction Results */}
      {predictionType === "my-crop" && (
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="w-5 h-5 text-primary" />
              My Crop Yield Prediction / मेरी फसल उपज की भविष्यवाणी
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={myCropData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Line 
                  type="monotone" 
                  dataKey="expected" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  name="Expected Yield"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="Actual Yield"
                />
              </LineChart>
            </ResponsiveContainer>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Prediction Result / भविष्यवाणी परिणाम
                </h3>
                <div className="text-3xl font-bold text-primary mb-1">
                  38 quintals
                </div>
                <p className="text-muted-foreground">
                  Expected yield for your next harvest
                </p>
                <p className="text-sm text-muted-foreground">
                  आपकी अगली फसल की अपेक्षित उपज
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center p-3 bg-success/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Current Average</p>
                <p className="text-xl font-bold text-success">35 quintals</p>
              </div>
              <div className="text-center p-3 bg-warning/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Improvement</p>
                <p className="text-xl font-bold text-warning">+8.6%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {predictionType === "state-data" && (
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              State Yield Comparison / राज्य उपज तुलना
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stateData}>
                <XAxis dataKey="crop" />
                <YAxis />
                <Bar dataKey="actual" fill="hsl(var(--muted))" name="Actual Yield" />
                <Bar dataKey="predicted" fill="hsl(var(--primary))" name="Predicted Yield" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-4 space-y-2">
              <h4 className="font-semibold">State Performance Analysis / राज्य प्रदर्शन विश्लेषण</h4>
              {stateData.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <span className="font-medium">{item.crop}</span>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">
                      {item.actual} → {item.predicted} quintals
                    </span>
                    <div className="text-xs text-success">
                      +{((item.predicted - item.actual) / item.actual * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PredictionPage;