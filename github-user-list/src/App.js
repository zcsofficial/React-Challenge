import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch GitHub users from API
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://api.github.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching GitHub users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="app">
            <h1 className="header">GitHub Users</h1>
            <div className="user-grid">
                {users.map((user) => (
                    <div key={user.id} className="user-card">
                        <img src={user.avatar_url} alt={user.login} className="user-avatar" />
                        <h2>{user.login}</h2>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
