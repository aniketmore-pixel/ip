import React, { useState, useEffect } from 'react';

function App() {
    const [firstName, setFirstName] = useState('Aniket');
    const [lastName, setLastName] = useState('More');
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        setFullName(`${firstName} ${lastName}`)
    }, [firstName, lastName]);

    return (
        <div>
            <h1>React Hooks</h1>
            <br />
            <label for="firstname">First Name</label>
            <input type="text" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <hr />
            <label for="lastname">Last Name</label>
            <input type="text" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />

            <div>
                <p>Full Name: {fullName}</p>
            </div>
        </div>


    )
}
