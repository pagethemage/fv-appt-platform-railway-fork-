import React, { useState, useRef, useEffect } from "react";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";
import Teams from "./Teams";
import Profile from "./Profile";
import Settings from "./Settings";
import LoginPage from "./LoginPage";
import axios from "axios"

const RefereeManagement = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [appointment, setAppointments] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    // yyyy-mm-dd
    const [availableDates, setAvailableDates] = useState([
        "2024-09-07",
        "2024-09-14",
        "2024-09-28",
    ]);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        getAppointments();
    }, [])
    
    const getAppointments = async () => {
        const response = await axios.get("http://localhost:8000/api/appointments/")
        if (response.status == 200) {
            setAppointments(response.data)
        }
    }
    
    const teams = [
        { id: 1, name: "Melbourne City FC", league: "A-League" },
        { id: 2, name: "Melbourne Victory", league: "A-League" },
        { id: 3, name: "Manchester United", league: "A-League" },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setShowDropdown(false);
    };

    const handleLogin = (username) => {
        setIsLoggedIn(true);
    };

    const renderContent = () => {
        switch (activeTab) {
            case "dashboard":
                return <Dashboard appointments={appointment} />;
            case "calendar":
                return (
                    <Calendar
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        availableDates={availableDates}
                        setAvailableDates={setAvailableDates}
                    />
                );
            case "teams":
                return <Teams teams={teams} />;
            case "profile":
                return <Profile />;
            case "settings":
                return <Settings />;
            default:
                return null;
        }
    };

    if (!isLoggedIn) {
        return <LoginPage onLogin={handleLogin} />;
    }

    return (
        <div className="bg-fvBackground min-h-screen">
            <header className="bg-fvTopHeader text-white p-2">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-s font-bold">
                        Referee Management Platform
                    </h1>
                </div>
            </header>

            <div className="bg-fvMiddleHeader text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src="/fv-logo-transparent.png"
                            alt="Football Victoria"
                            className="h-16"
                        />
                    </div>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            Logged in as Kyle DENIS
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                                <button
                                    className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <nav className="bg-fvBottomHeader text-white">
                <div className="container mx-auto flex justify-center">
                    {[
                        "Dashboard",
                        "Calendar",
                        "Teams",
                        "Profile",
                        "Settings",
                    ].map((item) => (
                        <button
                            key={item}
                            className={`py-2 px-4 ${
                                activeTab === item.toLowerCase()
                                    ? "underline"
                                    : ""
                            }`}
                            onClick={() => setActiveTab(item.toLowerCase())}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </nav>

            <main className="container mx-auto mt-6 grid grid-cols-3 gap-6">
                <section className="col-span-2">{renderContent()}</section>
                <aside>
                    <Calendar
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        availableDates={availableDates}
                        setAvailableDates={setAvailableDates}
                        isWidget={true}
                    />
                    <div className="bg-white shadow rounded-lg p-4 mt-6">
                        <h2 className="text-xl font-semibold mb-4">
                            News and Messages
                        </h2>
                        <p className="text-gray-500">
                            There are no messages to display.
                        </p>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default RefereeManagement;
