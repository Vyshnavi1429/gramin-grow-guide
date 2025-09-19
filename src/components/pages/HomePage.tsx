import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, Droplets, Sun, AlertTriangle, Heart, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import farmerProfile from "@/assets/farmer-profile.jpg";

const HomePage = () => {
  // Sample data for charts
  const cropData = [
    { name: "Rice", expected: 40, actual: 35 },
    { name: "Wheat", expected: 30, actual: 32 },
    { name: "Corn", expected: 25, actual: 28 },
    { name: "Soybean", expected: 20, actual: 18 },
  ];

  const marketData = [
    { day: "Mon", rice: 2500, wheat: 2200 },
    { day: "Tue", rice: 2600, wheat: 2300 },
    { day: "Wed", rice: 2400, wheat: 2100 },
    { day: "Thu", rice: 2700, wheat: 2400 },
    { day: "Fri", rice: 2800, wheat: 2500 },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-primary mb-2">Smart Krishi Dashboard</h1>
        <p className="text-muted-foreground">स्मार्ट कृषि डैशबोर्ड</p>
      </div>

      {/* Crop Overview Chart */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Registered Crops Overview
            <span className="text-sm text-muted-foreground ml-2">पंजीकृत फसल विवरण</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={cropData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="expected" fill="hsl(var(--primary))" name="Expected" />
              <Bar dataKey="actual" fill="hsl(var(--primary-glow))" name="Actual" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Feed Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Latest Updates / नवीनतम अपडेट</h2>
        
        {/* Government Scheme Card */}
        <Card className="shadow-card hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground">PM-KISAN Scheme Update</h3>
                <p className="text-sm text-muted-foreground mb-2">Your next installment of ₹2,000 will be credited on 15th March</p>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-success h-2 rounded-full w-3/4"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">75% farmers received payments</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Prices Card */}
        <Card className="shadow-card hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <h3 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
              <BarChart className="w-5 h-5 text-primary" />
              Market Prices / बाजार मूल्य
            </h3>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={marketData}>
                <XAxis dataKey="day" />
                <Line type="monotone" dataKey="rice" stroke="hsl(var(--primary))" strokeWidth={2} />
                <Line type="monotone" dataKey="wheat" stroke="hsl(var(--success))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-primary">Rice: ₹2,800/quintal</span>
              <span className="text-success">Wheat: ₹2,500/quintal</span>
            </div>
          </CardContent>
        </Card>

        {/* Farmer Post Card */}
        <Card className="shadow-card hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <img 
                src={farmerProfile} 
                alt="Farmer" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-card-foreground">Raj Kumar Patel</h4>
                <p className="text-sm text-muted-foreground mb-2">Excellent wheat harvest this season! Using organic methods increased my yield by 20%.</p>
                <img 
                  src={heroImage} 
                  alt="Crop" 
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-primary">
                    <Heart className="w-4 h-4" />
                    <span>24 likes</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary">
                    <MessageCircle className="w-4 h-4" />
                    <span>8 comments</span>
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weather Alert Card */}
        <Card className="shadow-card border-l-4 border-l-warning">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                <Sun className="w-6 h-6 text-warning" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-card-foreground">Weather Alert</h3>
                  <Badge variant="secondary" className="bg-warning text-warning-foreground">Moderate</Badge>
                </div>
                <p className="text-sm text-muted-foreground">High temperature expected tomorrow (38°C). Ensure adequate water supply for crops.</p>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <Droplets className="w-4 h-4 text-primary" />
                  <span>30% chance of rain</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;