import React, { useState } from 'react';
import Bed from '../types/Bed';
import { useLocation } from 'react-router-dom';

interface Schedule {
    time: string;
    temperature: number;
}


const BedDetails = () => {
    const location = useLocation();
    const bed : Bed = location.state.bed;
    const [temperature, setTemperature] = useState<number>(bed.temperature);
    const [schedule, setSchedule] = useState<Schedule[]>([]);
    const [newTime, setNewTime] = useState<string>('');
    const [newTemperature, setNewTemperature] = useState<number>(20);


    const handleTemperatureChange = (delta: number) => {
        setTemperature(prevTemp => prevTemp + delta);
    };

    const handleNewTemperatureChange = (delta: number) => {
        setNewTemperature(prevTemp => prevTemp + delta);
    };

    const handleNewTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTime(e.target.value);
    };

    const addSchedule = () => {
        setSchedule([...schedule, { time: newTime, temperature: newTemperature }]);
        setNewTime('');
        setNewTemperature(20);
    };

    return (
        <div>
            <h1>Bed Temperature Control</h1>
            <div>
                <label>
                    Current Temperature:
                    <button onClick={() => handleTemperatureChange(-1)}>-</button>
                    <span>{temperature}°C</span>
                    <button onClick={() => handleTemperatureChange(1)}>+</button>
                </label>
            </div>
            <h2>Schedule</h2>
            <div>
                <label>
                    Time:
                    <input
                        type="time"
                        value={newTime}
                        onChange={handleNewTimeChange}
                    />
                </label>
                <label>
                    Temperature:
                    <button onClick={() => handleNewTemperatureChange(-1)}>-</button>
                    <span>{newTemperature}°C</span>
                    <button onClick={() => handleNewTemperatureChange(1)}>+</button>
                </label>
                <button onClick={addSchedule}>Add to Schedule</button>
            </div>
            <ul>
                {schedule.map((item, index) => (
                    <li key={index}>
                        {item.time} - {item.temperature}°C
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BedDetails;