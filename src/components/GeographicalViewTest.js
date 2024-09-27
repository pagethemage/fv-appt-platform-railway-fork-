import React, { useState } from "react";
import GeographicalView from "./GeographicalView";

const GeographicalViewTest = () => {
    const [filters, setFilters] = useState({
        availability: false,
        level: "",
        distance: 50,
        centerPoint: [-37.8136, 144.9631], // Melbourne coordinates
    });

    const mockReferees = [
        {
            id: 1,
            name: "John Doe",
            location: [-37.8136, 144.9631],
            level: "Senior",
            isAvailable: true,
        },
        {
            id: 2,
            name: "Jane Smith",
            location: [-37.8235, 144.9523],
            level: "Junior",
            isAvailable: false,
        },
    ];

    const mockVenues = [
        {
            id: 1,
            name: "Melbourne Cricket Ground",
            location: [-37.82, 144.9834],
        },
        { id: 2, name: "AAMI Park", location: [-37.825, 144.9833] },
    ];

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Geographical View Test</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Filters</h2>
                <label className="block mb-2">
                    <input
                        type="checkbox"
                        name="availability"
                        checked={filters.availability}
                        onChange={handleFilterChange}
                        className="mr-2"
                    />
                    Available Only
                </label>
                <label className="block mb-2">
                    <span className="mr-2">Level:</span>
                    <select
                        name="level"
                        value={filters.level}
                        onChange={handleFilterChange}
                        className="border p-1"
                    >
                        <option value="">All</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                    </select>
                </label>
                <label className="block mb-2">
                    <span className="mr-2">Distance (km):</span>
                    <input
                        type="number"
                        name="distance"
                        value={filters.distance}
                        onChange={handleFilterChange}
                        className="border p-1 w-20"
                    />
                </label>
            </div>
            <GeographicalView
                referees={mockReferees}
                venues={mockVenues}
                filters={filters}
            />
        </div>
    );
};

export default GeographicalViewTest;
