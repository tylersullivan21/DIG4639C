import React from "react";
import "./index.css"


function Profile(props) {
    return (
        <div class="profile">
            <h2>Your Profile Name and Number of Contacts in your Contact Book!</h2>
                <div class="card">
                    <div class="card-content">
                        <h5 class="card-header">{props.profile.name}</h5>
                        <h6 class="card-para">{props.profile.count}</h6>
                    </div>
                </div>
        </div>
    )
};

export default Profile;