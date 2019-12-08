import React from "react";
import "./index.css"


function Profile(props) {
    return (
        <div class="profile">
            <h2>Your Profile Name and Number of Contacts in your Contact Book!</h2>
                <div class="card">
                    <div class="card-content">
                        <p class="card-header">{props.profile.name}</p>
                        <p class="card-para">{props.profile.count}</p>
                    </div>
                </div>
        </div>
    )
};

export default Profile;