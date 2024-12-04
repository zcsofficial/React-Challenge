import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

const teamMembers = [
    { name: 'Adora', role: 'UI/UX Designer', company: 'ABC Corp', img: 'https://via.placeholder.com/150' },
    { name: 'John Doe', role: 'Frontend Developer', company: 'XYZ Inc', img: 'https://via.placeholder.com/150' },
    { name: 'Nancy Smith', role: 'Marketing Specialist', company: 'DEF Ltd', img: 'https://via.placeholder.com/150' },
];

function App() {
    return (
        <div className="app">
            <h1 className="header">Team Members</h1>
            <div className="profile-container">
                {teamMembers.map((member, index) => (
                    <ProfileCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
}

export default App;
