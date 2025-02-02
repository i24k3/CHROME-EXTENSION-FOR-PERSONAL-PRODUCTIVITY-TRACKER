import React, { useState, useEffect } from 'react';

const Popup = () => {
    const [timeSpent, setTimeSpent] = useState(0);
    const [goal, setGoal] = useState("");

    useEffect(() => {
        chrome.storage.local.get(["timeSpent"], (result) => {
            setTimeSpent(result.timeSpent || 0);
        });
    }, []);

    const saveGoal = () => {
        chrome.storage.local.set({ goal });
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Productivity Tracker</h2>
            <p>Time spent today: {Math.round(timeSpent / 60000)} minutes</p>
            <input
                type="text"
                placeholder="Set your daily goal"
                onChange={(e) => setGoal(e.target.value)}
            />
            <button onClick={saveGoal}>Save Goal</button>
        </div>
    );
};

export default Popup;
