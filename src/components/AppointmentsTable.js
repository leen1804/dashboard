import React from "react";
import TableRow from "./TableRow";

function AppointmentsTable() {
  const appointments = [
    { id: 1, student: "Phoenix Baker", date: "Jan 4, 2022", status: "✓ Scheduled", teacher: "Charles Halen", initials: "PB" ,image: "lee"},
    { id: 2, student: "Candice Wu", date: "Jan 2, 2022", status: "⧖ Pending", teacher: "Peter Phil", initials: "CW" },
    { id: 3, student: "Lana Steiner", date: "Jan 4, 2022", status: " ☓ Cancelled", teacher: "Hudson Sky", initials: "LS" },
    { id: 4, student: "Drew Cano", date: "Jan 8, 2022", status: "✓ Scheduled", teacher: "Kelly Brown", initials: "DC" },
    { id: 5, student: "Natali Craig", date: "Jan 6, 2022", status: "⧖ Pending", teacher: "Mary Kie", initials: "NC" },
  ];
  const bgColors = [
    "bg-greeny",
    "bg-bluey",
    "bg-bluey",
    "bg-greeny",
    "bg-purple-500",
  ];

  const textColors = [
    "text-blue",
    "text-blue",
    "text-blue",
    "text-blue",
    "text-white",
  ];
  return (
    <section className="mt-16">
      <table className="min-w-full overflow-hidden text-white rounded-lg shadow-lg">
        <thead>
          <tr className="text-sm font-light text-left text-gray-400 border-white bg-customDark">
            <th className="px-3 py-5">Student</th>
            <th className="px-2 py-5">Date</th>
            <th className="px-3 py-5">Status</th>
            <th className="px-3 py-5">Teacher</th>
            <th className="px-3 py-5">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment,index) => (
            <TableRow key={appointment.id} 
            appointment={appointment} 
            bgColor={bgColors[index % bgColors.length]}  
              textColor={textColors[index % textColors.length]} 
            />
            
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AppointmentsTable;
