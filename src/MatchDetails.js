import React, { useState } from "react";
import { X } from "lucide-react";

const MatchDetails = ({ match, onClose }) => {
    const [status, setStatus] = useState(match.status || "Pending");
    const [declineReason, setDeclineReason] = useState("");
    const [showDeclineForm, setShowDeclineForm] = useState(false);

    const handleConfirm = () => {
        setStatus("Confirmed");
    };

    const handleDecline = () => {
        setShowDeclineForm(true);
    };

    const submitDecline = () => {
        if (declineReason.trim()) {
            setStatus("Declined");
            setShowDeclineForm(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-3/4 max-w-4xl max-h-[90vh] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                >
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-4">{match.competition}</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Match Details
                        </h3>
                        <p>
                            <strong>Teams:</strong> {match.teams}
                        </p>
                        <p>
                            <strong>Date:</strong> {match.date}
                        </p>
                        <p>
                            <strong>Time:</strong> {match.time}
                        </p>
                        <p>
                            <strong>Venue:</strong> {match.venue}
                        </p>
                        <p>
                            <strong>Type:</strong> {match.type}
                        </p>
                        <p>
                            <strong>Status:</strong> {status}
                        </p>

                        {status === "Pending" && (
                            <div className="mt-4">
                                <button
                                    onClick={handleConfirm}
                                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                                >
                                    Confirm Appointment
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Decline Appointment
                                </button>
                            </div>
                        )}

                        {status === "Declined" && !showDeclineForm && (
                            <button
                                onClick={() => setStatus("Confirmed")}
                                className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Confirm Appointment
                            </button>
                        )}

                        {showDeclineForm && (
                            <div className="mt-4">
                                <textarea
                                    value={declineReason}
                                    onChange={(e) =>
                                        setDeclineReason(e.target.value)
                                    }
                                    placeholder="Please provide a reason for declining"
                                    className="w-full p-2 border rounded"
                                    rows="3"
                                />
                                <button
                                    onClick={submitDecline}
                                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Submit Decline
                                </button>
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Location</h3>
                        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                            {/* // TODO: Replace with an actual map component */}
                            <p>Map placeholder</p>
                        </div>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                            Get Driving Directions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchDetails;
