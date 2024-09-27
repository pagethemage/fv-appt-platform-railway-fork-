import React from "react";

const Dashboard = ({ appointments }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">
                Upcoming Appointments
            </h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Competition
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Type
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Date
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Time
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Teams
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Venue
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.appointment_id}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {appointment.referee}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {appointment.venue}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {appointment.match}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {appointment.distance}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {appointment.appointment_date}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {appointment.status}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <button className="text-blue-600 hover:text-blue-900">
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
