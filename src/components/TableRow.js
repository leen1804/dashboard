import React from "react";

function TableRow({ appointment, bgColor, textColor }) {
  const rowBgColor = appointment.student === "Candice Wu"|| appointment.student === "Drew Cano" 
    ? "bg-backy" 
    : " bg-back"; 
  return (
    <tr className={`border-none ${rowBgColor} text-white`}>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className={`flex items-center justify-center w-8 h-8 ${bgColor} ${textColor} rounded-full`}>
            {appointment.initials}
          </div>
          <span>{appointment.student}</span>
        </div>
      </td>
      <td className="px-4 py-3">{appointment.date}</td>
      <td className="px-4 py-3">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          appointment.status === "✓ Scheduled"
            ? "bg-green-900 text-green-500"
             
            : appointment.status === "⧖ Pending"
            ? "bg-blue-900 text-blue-500"
            : "bg-red-900 text-red-400"
        }`}>
          {appointment.status}
        </span>
      </td>
      <td className="px-4 py-3">{appointment.teacher}</td>
      <td className="px-4 py-3">
        <button className="px-3 text-green-500 border-green-500 rounded py- hover:border-2">
          View
        </button>
      </td>
    </tr>
  );
}

export default TableRow;

