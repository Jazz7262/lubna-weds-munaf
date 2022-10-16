import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. Attar Taher Basha Sahab</h2>
                <h5>
                    <strong>Coconut Merchant</strong>, Adoni.
                </h5>
                <h5 className="mt-3">
                    H.No.: 24/56-2, Bharpet Street,
                    <br />
                    Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: +91 89190 66623, <br />
                    +91 79938 68306, <br />
                    +91 83090 29247.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
