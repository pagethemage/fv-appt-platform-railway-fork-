import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = ({
    currentDate,
    setCurrentDate,
    selectedDate,
    setSelectedDate,
    availableDates,
    setAvailableDates,
    isWidget = false,
}) => {
    const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
    const [selectedAvailability, setSelectedAvailability] = useState({
        type: "specific",
        date: null,
        dayOfWeek: null,
    });

    const changeMonth = (increment) => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + increment);
            return newDate;
        });
    };

    const handleDateClick = (day) => {
        const clickedDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day,
        );
        setSelectedDate(clickedDate.toISOString().split("T")[0]);
    };

    const handleUpdateAvailability = () => {
        setShowAvailabilityModal(true);
    };

    const handleAvailabilitySubmit = () => {
        if (
            selectedAvailability.type === "specific" &&
            selectedAvailability.date
        ) {
            setAvailableDates((prev) => [...prev, selectedAvailability.date]);
        } else if (
            selectedAvailability.type === "recurring" &&
            selectedAvailability.dayOfWeek !== null
        ) {
            // Implement recurring availability logic here
        }
        setShowAvailabilityModal(false);
    };

    const renderCalendar = () => {
        const today = new Date();
        const daysInMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0,
        ).getDate();
        const firstDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1,
        ).getDay();
        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                day,
            );
            const dateString = date.toISOString().split("T")[0];
            const isSelected = selectedDate === dateString;
            const isToday = date.toDateString() === today.toDateString();
            const isAvailable = availableDates.includes(dateString);

            days.push(
                <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`p-2 relative ${
                        isSelected ? "bg-blue-200" : ""
                    } ${
                        isToday ? "text-blue-500 font-bold" : ""
                    } hover:bg-gray-100`}
                >
                    <span
                        className={`${
                            isToday
                                ? "w-7 h-7 flex items-center justify-center rounded-full bg-blue-100"
                                : ""
                        }`}
                    >
                        {day}
                    </span>
                    {isAvailable && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600 rounded-sm"></div>
                    )}
                </button>,
            );
        }

        return days;
    };

    return (
        <div className="bg-white shadow rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">
                    {currentDate.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                    })}
                </h3>
                <div>
                    <button className="mr-2" onClick={() => changeMonth(-1)}>
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => changeMonth(1)}>
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                    (day) => (
                        <div
                            key={day}
                            className="font-semibold text-gray-500 text-sm"
                        >
                            {day}
                        </div>
                    ),
                )}
                {renderCalendar()}
            </div>
            <div className="mt-4 flex items-center justify-center">
                <div className="w-8 h-4 bg-green-600 mr-2 rounded-md"></div>
                <span className="text-md text-gray-600">
                    Dates you are available
                </span>
            </div>
            {showAvailabilityModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            Update Availability
                        </h3>
                        <div className="mb-4">
                            <label className="block mb-2">
                                <input
                                    type="radio"
                                    name="availabilityType"
                                    value="specific"
                                    checked={
                                        selectedAvailability.type === "specific"
                                    }
                                    onChange={() =>
                                        setSelectedAvailability({
                                            type: "specific",
                                            date: null,
                                            dayOfWeek: null,
                                        })
                                    }
                                    className="mr-2"
                                />
                                Specific Date
                            </label>
                            {selectedAvailability.type === "specific" && (
                                <input
                                    type="date"
                                    onChange={(e) =>
                                        setSelectedAvailability({
                                            ...selectedAvailability,
                                            date: e.target.value,
                                        })
                                    }
                                    className="border p-2 rounded"
                                />
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">
                                <input
                                    type="radio"
                                    name="availabilityType"
                                    value="recurring"
                                    checked={
                                        selectedAvailability.type ===
                                        "recurring"
                                    }
                                    onChange={() =>
                                        setSelectedAvailability({
                                            type: "recurring",
                                            date: null,
                                            dayOfWeek: null,
                                        })
                                    }
                                    className="mr-2"
                                />
                                Recurring Day
                            </label>
                            {selectedAvailability.type === "recurring" && (
                                <select
                                    onChange={(e) =>
                                        setSelectedAvailability({
                                            ...selectedAvailability,
                                            dayOfWeek: e.target.value,
                                        })
                                    }
                                    className="border p-2 rounded"
                                >
                                    <option value="">Select a day</option>
                                    <option value="0">Sunday</option>
                                    <option value="1">Monday</option>
                                    <option value="2">Tuesday</option>
                                    <option value="3">Wednesday</option>
                                    <option value="4">Thursday</option>
                                    <option value="5">Friday</option>
                                    <option value="6">Saturday</option>
                                </select>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowAvailabilityModal(false)}
                                className="mr-2 px-4 py-2 border rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAvailabilitySubmit}
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
