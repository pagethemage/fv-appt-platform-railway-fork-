import React, { useEffect, useState } from 'react';

const Referee = () => {
    const [referees, setReferees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReferees = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/api/referee/'); // Adjust the URL as necessary
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setReferees(data);
            } catch (err) {
                setError('Failed to fetch referees: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReferees();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Referees</h1>
            <ul>
                {referees.map(referee => (
                    <li key={referee.referee_id}>
                        <strong>{referee.full_name}</strong><br />
                        Gender: {referee.gender}<br />
                        Experience: {referee.experience_years} years<br />
                        Level: {referee.level}<br />
                        Email: {referee.email}<br />
                        Phone: {referee.phone_number}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Referee;
