import React from 'react';
import './ProfileCard.css';

function ProfileCard({ member }) {
    return (
        <div className="profile-card">
            <img src={member.img} alt={member.name} className="profile-img" />
            <h2>{member.name}</h2>
            <p>My profile</p>
            <p><strong>Role:</strong> {member.role}</p>
            <p><strong>Company:</strong> {member.company}</p>
            <button className="btn-view-profile">View Profile</button>
        </div>
    );
}

export default ProfileCard;
