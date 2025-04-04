import React from "react";

const adStats = [
  { id: 1, platform: "Facebook", spend: "$3,500", clicks: "12,500", cpc: "$0.28" },
  { id: 2, platform: "Instagram", spend: "$4,200", clicks: "15,200", cpc: "$0.27" },
];

const AdPerformance = () => {
  return (
    <div className="bg-[#1a1c2c] p-6 rounded-2xl shadow-lg text-white w-full">
      <h2 className="text-lg font-semibold mb-4">Ad Performance</h2>
      <div className="space-y-4">
        {adStats.map((ad) => (
          <div
            key={ad.id}
            className="flex flex-col bg-[#262b44] p-4 rounded-lg shadow-md"
          >
            <h3 className="text-md font-bold text-orange-400">{ad.platform}</h3>
            <div className="flex justify-between mt-2 text-gray-300 text-sm">
              <p>Spend: <span className="text-white font-semibold">{ad.spend}</span></p>
              <p>Clicks: <span className="text-white font-semibold">{ad.clicks}</span></p>
              <p>CPC: <span className="text-white font-semibold">{ad.cpc}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdPerformance;