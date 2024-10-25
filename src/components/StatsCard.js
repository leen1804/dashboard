import React from "react";

function StatsCard({ icon, count, label, iconColor, shadowColor }) {
  return (
    <div className="flex flex-col items-start justify-center p-1 rounded-lg shadow-xl bg-backy box lg:p-10 hover:animate-pulse" >
      <div className="flex items-center ">
        <div className={`text-3xl ${iconColor} relative`}>
        <span className={`absolute inset-0 transform translate-x-1 translate-y-10 blur-xl ${shadowColor}`}></span>
        {icon}
        </div>
        <div className="ml-4 text-3xl font-bold">{count}</div>

      </div>
      <div className="mt-2 text-sm font-bold text-gray-300">{label}</div>
    </div>
  );
}

export default StatsCard;
