import React from 'react';
import './AddNewDevice.css'; // Make sure to create this CSS file

const AddNewDevice: React.FC = () => {
    return (
        <div className="settings-overlay hidden">
            <div className="settings-content">
                {/* Settings should contain: connect a new device, and device settings*/}
            </div>
        </div>
    );
};

export default AddNewDevice;