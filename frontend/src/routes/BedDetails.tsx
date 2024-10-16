import React, { useState } from 'react';
import Bed from '../types/Bed';
import './BedDetails.css';
import { useLocation } from 'react-router-dom';
import { Slider } from '@mui/material';

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
    const [sliders, setSliders] = useState<JSX.Element[]>([]);
    const [times, setTimes] = useState<string[]>([]);


    const handleTemperatureChange = (delta: number) => {
        setTemperature(prevTemp => prevTemp + delta);
        bed.temperature = temperature + delta;
    };

    const handleNewTemperatureChange = (delta: number) => {
        setNewTemperature(prevTemp => prevTemp + delta);
        // bed.temperature = newTemperature;
    };


    function  addSchedule(nt)  {
     

        // console.log(times);
        const  internalTimes = [...times, nt].sort();
        // times.sort();

        setSliders([]);
        setSliders(slidersInit(internalTimes));
        setTimes(internalTimes);
        console.log(times);

    };



    function slidersInit(times: string[]) {
        const slidersTemp = []


        
        for (let i = 0; i < times.length; i++) {
      
            slidersTemp.push(
                <div className="slide-container">
                    <Slider
                        aria-label="Temperature"
                        defaultValue={0}
                        getAriaValueText={(value) => `${value}°C`}
                        valueLabelDisplay="auto"
                        shiftStep={30}
                        step={1}
                        marks
                        min={16}
                        max={28}
                        orientation='vertical'
                        style={{ WebkitAppearance: 'slider-vertical' }}
                        />
                        <input className='slider-label' type="text" defaultValue={times[i]} onChange={(e)=>{
                            times[i] = e.target.value;
                            setTimes(times);
                        }}/>
                       
               
                            
                            
               
                </div>
                
        
            
            );
          
        }
        // setSliders(slidersTemp)
        return slidersTemp;
    }

    // slidersInit(['22:00', '1:00', '04:00', '07:00']);


    return (
        <div>
            <h1>Bed Temperature Control</h1>
            <div>
                <label>
                    WantedTemperature:
                    <button onClick={() => handleTemperatureChange(-1)}>-</button>
                    <span>{temperature}°C</span>
                    <button onClick={() => handleTemperatureChange(1)}>+</button>
                </label>
            </div>
            <h2>Schedule</h2>
            <div>
                <form action="">
                    Time:
                    <input
                        type="time"
                        value={newTime}
                        onChange={(e)=> setNewTime(e.target.value)}

                    />
               
                </form>
                <button onClick={() => {addSchedule(newTime)}}>Add</button>
        
               <div className="schedule-sliders">
         
                {sliders}
            </div>
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