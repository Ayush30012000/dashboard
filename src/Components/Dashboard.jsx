import React from "react";
import ProfileCard from "./ProfileCard";
import "../index.css";
import RecentActivities from "./RecentActivities";
import SocialMediaStats from "./SocialMediaStats";
import Analytics from "./Analytics";
import AdPerformance from "./AdPerformance";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-[#0d0f1b] min-h-screen">
      {/* Left Section - Profile and Recent Activities */}
      <div className="md:col-span-1 space-y-6">
        <ProfileCard />
        <RecentActivities />
      </div>

      {/* Middle Section - Social Media Stats and Analytics */}
      <div className="md:col-span-2 space-y-6">
        <SocialMediaStats />
        <Analytics />
      </div>

      {/* Right Section - Ad Performance */}
      <div className="md:col-span-1 space-y-6">
        <AdPerformance />
      </div>
    </div>
  );
};

export default Dashboard;