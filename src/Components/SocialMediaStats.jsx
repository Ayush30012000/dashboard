import React from "react";

const socialStats = [
  { id: 1, platform: "Twitter", count: "26.5k", color: "text-blue-400", icon: "🐦" },
  { id: 2, platform: "Facebook", count: "21.2k", color: "text-blue-600", icon: "📘" },
  { id: 3, platform: "LinkedIn", count: "14.7k", color: "text-orange-400", icon: "🔗" },
  { id: 4, platform: "Instagram", count: "74.4k", color: "text-pink-500", icon: "📸" },
];

const SocialMediaStats = () => {
  return (
    <div className="bg-[#1a1c2c] p-6 rounded-2xl shadow-lg text-white w-full">
      <h2 className="text-lg font-semibold mb-4">Social Media Followers</h2>
      <div className="grid grid-cols-2 gap-4">
        {socialStats.map((stat) => (
          <div
            key={stat.id}
            className="flex items-center justify-between bg-[#262b44] p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-2">
              <span className={`text-2xl ${stat.color}`}>{stat.icon}</span>
              <h3 className="text-lg font-bold">{stat.count}</h3>
            </div>
            <p className="text-sm text-gray-400">{stat.platform}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaStats;
