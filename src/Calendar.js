import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = ({
    currentDate,
    setCurrentDate,
    selectedDate,
    setSelectedDate,
    availableDates,
    unavailableDates,
    isWidget = false,
    handleUpdateAvailability,
}) => {
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
            const isAvailable = availableDates && availableDates.includes(dateString);
            const isUnavailable = unavailableDates && unavailableDates.includes(dateString);

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
                    {isUnavailable && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 rounded-sm"></div>
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
                <span className="text-md text-gray-600 mr-4">Available</span>
                <div className="w-8 h-4 bg-red-600 mr-2 rounded-md"></div>
                <span className="text-md text-gray-600">Unavailable</span>
            </div>
            {!isWidget && (
                <button
                    onClick={handleUpdateAvailability}
                    className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Update Availability
                </button>
            )}
        </div>
    );
};

export default Calendar;