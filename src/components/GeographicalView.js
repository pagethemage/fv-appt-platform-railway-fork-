import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GeographicalView = ({ referees, venues, filters }) => {
    const [filteredReferees, setFilteredReferees] = useState([]);
    const [filteredVenues, setFilteredVenues] = useState([]);

    const calculateDistance = (point1, point2) => {
        // Very simple distance calculation. I might replace with the Haversine formula.
        const dx = point1[0] - point2[0];
        const dy = point1[1] - point2[1];
        return Math.sqrt(dx * dx + dy * dy);
    };

    useEffect(() => {
        // Apply filters to referees and venues
        const applyFilters = () => {
            const filteredRefs = referees.filter((referee) => {
                return (
                    (!filters.availability || referee.isAvailable) &&
                    (!filters.level || referee.level === filters.level) &&
                    (!filters.distance ||
                        calculateDistance(
                            referee.location,
                            filters.centerPoint,
                        ) <= filters.distance)
                );
            });
            setFilteredReferees(filteredRefs);
            setFilteredVenues(venues);
        };

        applyFilters();
    }, [referees, venues, filters]);

    return (
        <MapContainer
            center={[-37.8136, 144.9631]}
            zoom={8}
            style={{ height: "500px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {filteredReferees.map((referee) => (
                <Marker key={referee.id} position={referee.location}>
                    <Popup>
                        {referee.name} <br />
                        Level: {referee.level} <br />
                        Available: {referee.isAvailable ? "Yes" : "No"}
                    </Popup>
                </Marker>
            ))}
            {filteredVenues.map((venue) => (
                <Marker key={venue.id} position={venue.location}>
                    <Popup>{venue.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default GeographicalView;
