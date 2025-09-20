import { useState } from "react";
import BottomNavigation from "./BottomNavigation";
import HomePage from "./pages/HomePage";
import CropsPage from "./pages/CropsPage";
import SocialPage from "./pages/SocialPage";
import PredictionPage from "./pages/PredictionPage";
import ProfileRegistration from "./ProfileRegistration";
import { useCrop } from "@/contexts/CropContext";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { isProfileCompleted } = useCrop();

  if (!isProfileCompleted) {
    return <ProfileRegistration />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "crops":
        return <CropsPage />;
      case "social":
        return <SocialPage />;
      case "prediction":
        return <PredictionPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {renderContent()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Dashboard;