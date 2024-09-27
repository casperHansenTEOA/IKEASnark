import React from 'react';
import './Settings.css'; // Make sure to create this CSS file

const Settings: React.FC = () => {
    return (
        <div className="settings-overlay hidden">
            <div className="settings-content">
                <h2>Settings</h2>
                {/* Add your settings form or content here */}
            </div>
        </div>
    );
};

export default Settings;