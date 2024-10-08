import React, { useEffect, useState } from 'react';

const Referee = () => {
    const [referees, setReferees] = useState([]);
    const [newReferee, setNewReferee] = useState({
        referee_id: "",
        first_name: "",
        last_name: "",
        gender: "",
        date_of_birth: "",
        age: "",
        location: "",
        zip_code: "",
        email: "",
        phone_number: "",
        experience_years: "",
        level: "",
    });

    // Fetch referees from the API
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/referee/")
            .then((response) => response.json())
            .then((data) => setReferees(data))
            .catch((error) => console.error("Error fetching referees:", error));
    },[]);

    //Handle input change for the form
    const handleChange = (e) => {
        setNewReferee({ ...newReferee, [e.target.name]: e.target.value});
    };

    //Submit a new referee to the API
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:8000/api/referee", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newReferee), 
        })
            .then((response) => response.json())
            .then((data) => {
                setReferees([...referees, data]);
                setNewReferee({ name: "", gender: ""}); //Need to adjust
            })
            .catch((error) => console.error("Error adding referee:", error));
    };

    return (
        <div>
            <h2 className='text-xl font-semibold mb-4'>Manage Referee</h2>

            {/* Display a list of referees */}
            <ul>
                {referees.map((referee) => (
                    <li key={referee.referee_id}>
                        (Referee ID:{referee.referee_id}) - (First Name:{referee.first_name}) 
                        (Last Name:{referee.last_name}) - (Gender:{referee.gender})
                        (Date of Birth:{referee.date_of_birth}) - (Age:{referee.age})
                        (Location:{referee.location}) - (Zip Code:{referee.zip_code})
                        (Email:{referee.email}) - (Phone Number:{referee.phone_number})
                        (Experience Years:{referee.experience_years}) - (Level:{referee.level})
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Referee;
