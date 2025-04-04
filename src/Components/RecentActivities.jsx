import React from "react";
import profileImage from '../assets/IMG20200104112800.jpg'
const activities = [
  {
    id: 1,
    userImg: "https://via.placeholder.com/40",
    text: "This is a sample text. Insert your desired text here.",
    username: "Username",
    time: "2 hours ago",
  },
  {
    id: 2,
    userImg: "https://via.placeholder.com/40",
    text: "This is a sample text. Insert your desired text here.",
    username: "Username",
    time: "5 hours ago",
  },
  {
    id: 3,
    userImg: "https://via.placeholder.com/40",
    text: "This is a sample text. Insert your desired text here.",
    username: "Username",
    time: "6 hours ago",
  },
];

const RecentActivities = () => {
  return (
    <div className="bg-[#1a1c2c] p-6 rounded-2xl shadow-lg text-white w-full">
      <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <img
              src={profileImage}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm">{activity.text}</p>
              <p className="text-xs text-gray-400">
                {activity.username}, {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;