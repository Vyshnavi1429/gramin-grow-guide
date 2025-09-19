import { BarChart3, Users, TrendingUp } from "lucide-react";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const tabs = [
    { id: "home", icon: BarChart3, label: "Home", labelHi: "होम" },
    { id: "crops", icon: TrendingUp, label: "My Crops", labelHi: "मेरी फसल" },
    { id: "social", icon: Users, label: "Social", labelHi: "सामाजिक" },
    { id: "prediction", icon: BarChart3, label: "Prediction", labelHi: "भविष्यवाणी" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="flex justify-around items-center py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center p-3 min-w-0 flex-1 transition-all duration-200 ${
                isActive 
                  ? "text-primary scale-110" 
                  : "text-muted-foreground hover:text-primary/80"
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-primary" : ""}`} />
              <span className={`text-xs font-medium ${isActive ? "text-primary" : ""}`}>
                {tab.label}
              </span>
              <span className={`text-xs opacity-70 ${isActive ? "text-primary" : ""}`}>
                {tab.labelHi}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;