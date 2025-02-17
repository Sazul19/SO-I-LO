import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type AlertItemProps = {
  label: string;
  time: string;
};

const data = [
  { name: "Dic", value: 30 },
  { name: "Ene", value: 45 },
  { name: "Feb", value: 35 },
  { name: "Mar", value: 40 },
  { name: "Abr", value: 38 },
  { name: "May", value: 42 },
  { name: "Jun", value: 39 }
];

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">DASHBOARD</h2>
      
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-semibold"> Alert 2</h3>
        <div className="bg-gray-200 p-2 my-2 rounded-lg">
          <AlertItem label="High humidity" time="18:25" />
          <AlertItem label="High pH" time="14:53" />
          <AlertItem label="Connection error" time="11:13" />
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-semibold"> History</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4A90E2" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold"> Progress</h3>
        <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
          <div className="bg-gray-800 h-6 rounded-full text-white text-center text-sm leading-6" style={{ width: "68%" }}>
            68%
          </div>
        </div>
      </div>
    </div>
  );
};

const AlertItem: React.FC<AlertItemProps> = ({ label, time }) => {
  return (
    <div className="flex justify-between bg-gray-800 text-white p-2 my-1 rounded">
      <span>{label}</span>
      <span>{time}</span>
    </div>
  );
};

export default Dashboard;
