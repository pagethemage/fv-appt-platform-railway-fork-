import React, {useEffect, useState} from "react";

const Relative = () => {
    const [relatives, setRelatives] = useState([]);

    //Fetch relatives from the API
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/relative/")
            .then((response) => response.json())
            .then((data) => setRelatives(data))
            .catch((error) => console.error("Error fetching relatives:", error));
    }, []);

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Manage Relatives</h2>

            {/* Display a list of relative */}
            <ul>
                {relatives.map((relative) => (
                    <li key={relative.referee}>
                        (Referee:{relative.referee}) - (Club:{relative.club})
                        (Relative Name:{relative.relative_name}) - (Relationship:{relative.relationship})
                        (Age:{relative.age})
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Relative;