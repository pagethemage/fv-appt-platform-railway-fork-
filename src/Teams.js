import React from "react";

const Teams = ({ teams }) => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Teams</h2>
            <div className="bg-white shadow rounded-lg p-4">
                {teams.map((team) => (
                    <div key={team.id} className="mb-4 p-4 border-b">
                        <h3 className="font-semibold">{team.name}</h3>
                        <p>League: {team.league}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Teams;
