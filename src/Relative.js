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

            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-3 py-3 border-b-2 border-gray-400 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Relative referee
                        </th>
                        <th className="px-3 py-3 border-b-2 border-gray-400 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Club Name
                        </th>
                        <th className="px-3 py-3 border-b-2 border-gray-400 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Relative name
                        </th>
                        <th className="px-3 py-3 border-b-2 border-gray-400 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Relationship
                        </th>
                        <th className="px-3 py-3 border-b-2 border-gray-400 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Age
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {relatives.map((relative) => (
                        <tr key={relative.referee}>
                            <td className="px-3 py-3 whitespace-no-wrap border-b border-gray-200 text-left">
                                {relative.referee}
                            </td>
                            <td className="px-3 py-3 whitespace-no-wrap border-b border-gray-200 text-left">
                                {relative.club}
                            </td>
                            <td className="px-3 py-3 whitespace-no-wrap border-b border-gray-200 text-left">
                                {relative.relative_name}
                            </td>
                            <td className="px-3 py-3 whitespace-no-wrap border-b border-gray-200 text-left">
                                {relative.relationship}
                            </td>
                            <td className="px-3 py-3 whitespace-no-wrap border-b border-gray-200 text-left">
                                {relative.age}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Relative;