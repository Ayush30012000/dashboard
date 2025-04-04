import React from "react";
import profileImage from '../assets/IMG20200104112800.jpg'
const ProfileCard = () => {
  return (
    <div className="bg-[#1a1c2c] p-6 rounded-2xl shadow-lg text-white w-full">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-orange-400"
        />
        <h2 className="mt-3 text-xl font-semibold">Profile Name</h2>
        <p className="text-gray-400">Ayush Verma</p>
      </div>
      
      {/* Stats */}
      <div className="flex justify-between mt-6 bg-[#262b44] p-4 rounded-lg">
        <div className="text-center">
          <h3 className="text-lg font-bold">2.3K</h3>
          <p className="text-sm text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold">701</h3>
          <p className="text-sm text-gray-400">Posts</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold">1.5K</h3>
          <p className="text-sm text-gray-400">Likes</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
