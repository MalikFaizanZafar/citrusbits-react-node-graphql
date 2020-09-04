import React from 'react';

export const UserDetail = ({ loading, user, open }) => {
    return (
        <div className="card" style={{ display: open ? 'block' : 'none', position: 'fixed', zIndex: 10 }}>
            <div className="container">
                <h4><b>{user.name}</b></h4>
                <h5><b>{user.role}</b></h5>
                <p>{user.email}</p>
                
            </div>
            {
                loading && <p>Loading User Detail ....</p>
            }
        </div>
    )
}