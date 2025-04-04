import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { year: "2018", Twitter: 2, Facebook: 3, LinkedIn: 1, Instagram: 2 },
  { year: "2019", Twitter: 3, Facebook: 4, LinkedIn: 2, Instagram: 3 },
  { year: "2020", Twitter: 4, Facebook: 5, LinkedIn: 3, Instagram: 4 },
  { year: "2021", Twitter: 6, Facebook: 5, LinkedIn: 4, Instagram: 5 },
  { year: "2022", Twitter: 9, Facebook: 6, LinkedIn: 5, Instagram: 6 },
  { year: "2023", Twitter: 5, Facebook: 7, LinkedIn: 6, Instagram: 7 },
];

const Analytics = () => {
  return (
    <div className="bg-[#1a1c2c] p-6 rounded-2xl shadow-lg text-white w-full">
      <h2 className="text-lg font-semibold mb-4">Analytics</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <XAxis dataKey="year" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip cursor={{ fill: "#262b44" }} />
          <Bar dataKey="Twitter" fill="#1DA1F2" />
          <Bar dataKey="Facebook" fill="#1877F2" />
          <Bar dataKey="LinkedIn" fill="#FF9900" />
          <Bar dataKey="Instagram" fill="#E1306C" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;