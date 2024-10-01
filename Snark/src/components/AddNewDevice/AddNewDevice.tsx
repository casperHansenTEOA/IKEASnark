import React from 'react';
import './AddNewDevice.css'; // Make sure to create this CSS file
import Card from '../Card/Card';

const AddNewDevice: React.FC = () => {
    return (
        <div className="settings-overlay hidden">
            <div className="settings-content">
                <h2>Add a new device</h2>
                <Card >
                    
                </Card>
            </div>
        </div>
    );
};

export default AddNewDevice;