import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar } from "lucide-react";

const RefereeManagement = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/appointments/",
                );
                setAppointments(response.data);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };

        fetchAppointments();
    }, []);

    const calendarEvents = [
        {
            id: 1,
            title: "Match 1",
            start: "2024-09-29 @ 10:00",
            end: "2024-09-29T @ 12:00",
        },
        {
            id: 2,
            title: "Training",
            start: "2024-09-29 @ 14:00",
            end: "2024-09-29T @ 16:00",
        },
        {
            id: 3,
            title: "Match 2",
            start: "2024-09-29 @ 18:00",
            end: "2024-09-29 @ 20:00",
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-900 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Football Victoria</h1>
                    <span>Logged in as Kyle DENIS</span>
                </div>
            </header>

            <nav className="bg-blue-800 text-white">
                <div className="container mx-auto">
                    <ul className="flex">
                        {[
                            "Dashboard",
                            "Calendar",
                            "Teams",
                            "Profile",
                            "Settings",
                        ].map((item) => (
                            <li key={item} className="mr-6">
                                <button
                                    className={`py-2 px-4 ${
                                        activeTab === item.toLowerCase()
                                            ? "bg-blue-700"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setActiveTab(item.toLowerCase())
                                    }
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <main className="container mx-auto mt-6 grid grid-cols-3 gap-6">
                <section className="col-span-2">
                    {activeTab === "dashboard" && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">
                                Upcoming Appointments
                            </h2>
                            <div className="bg-white shadow rounded-lg p-4">
                                {appointments.map((appointment) => (
                                    <div
                                        key={appointment.id}
                                        className="mb-4 p-2 border rounded"
                                    >
                                        <h3 className="font-semibold">
                                            {appointment.type}
                                        </h3>
                                        <p>Status: {appointment.status}</p>
                                        <p>
                                            Date: {appointment.date} Time:{" "}
                                            {appointment.time}
                                        </p>
                                        <p>Venue: {appointment.venue}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === "calendar" && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">
                                Calendar
                            </h2>
                            <div className="bg-white shadow rounded-lg p-4">
                                {calendarEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className="mb-2 p-2 border rounded"
                                    >
                                        <h3 className="font-semibold">
                                            {event.title}
                                        </h3>
                                        <p>Start: {event.start}</p>
                                        <p>End: {event.end}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
                <aside>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4">
                            Availability
                        </h2>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold">September 2024</h3>
                            <div>
                                <button className="mr-2">&lt;</button>
                                <button>&gt;</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center">
                            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                                <div key={day} className="font-semibold">
                                    {day}
                                </div>
                            ))}
                            {Array.from({ length: 30 }, (_, i) => i + 1).map(
                                (day) => (
                                    <div
                                        key={day}
                                        className={`p-2 ${
                                            day === 15
                                                ? "bg-blue-500 text-white"
                                                : ""
                                        } ${
                                            [3, 10, 17, 24].includes(day)
                                                ? "bg-gray-200"
                                                : ""
                                        }`}
                                    >
                                        {day}
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 mt-6">
                        <h2 className="text-xl font-semibold mb-4">
                            News and Messages
                        </h2>
                        <p>There are no messages to display.</p>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default RefereeManagement;
