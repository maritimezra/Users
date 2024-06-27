import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/accounts/get_username/', {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                });
                setUsername(response.data.username);
            } catch (error) {
                console.error('Failed to fetch username:', error);
            }
        };

        fetchUsername();
    }, []);

    return (
        <div>
            <h2>Hi, {username}</h2>
            <button onClick={() => window.location.href = '/logout'}>
                Logout
            </button>
        </div>
    );
}

export default Home;
