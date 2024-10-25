import React from "react";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import AppointmentsTable from "./components/AppointmentsTable";
import Wel from "./components/Wel";
import { FaGraduationCap, FaChalkboardTeacher, FaBook, FaUsers } from "react-icons/fa"; // Import icons from React Icons

function App() {
  const stats = [
    {
      icon: <FaGraduationCap />,
      label: "Total Students",
      count: 94,
      iconColor: "text-yellow-400", 
      shadowColor: "bg-yellow-400 bg-opacity-50"
    },
    {
      icon: <FaChalkboardTeacher />,
      label: "Total Teachers",
      count: 32,
      iconColor: "text-blue-400",
      shadowColor: "bg-blue-300 bg-opacity-50"
    },
    {
      icon: <FaBook />,
      label: "Total Classes",
      count: 56,
      iconColor: "text-green-400",
      shadowColor: "bg-green-300 bg-opacity-50"
    },
    {
      icon: <FaUsers />,
      label: "Administrative Staff",
      count: 56,
      iconColor: "text-red-400",
      shadowColor: "bg-red-300 bg-opacity-50"
    }
  ];
  return (
    <>
      <div className="p-3 text-white bg-back">
        <Header />
      </div>
      <div className="text-white lg:px-20 bg-back sm:p-3">
        <Wel />
        <section className="grid grid-cols-1 gap-6 mt-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            count={stat.count}
            label={stat.label}
            iconColor={stat.iconColor}
            shadowColor={stat.shadowColor}
          />
        ))}
      </section>
        <AppointmentsTable />
      </div>
    </>
  );
}

export default App;
