import React, { useState } from 'react';
import Bed from '../types/Bed';
import './BedDetails.css';
import { useLocation } from 'react-router-dom';
import { Slider } from '@mui/material';

// interface Schedule {
//     time: string;
//     temperature: number;
// }


const BedDetails = () => {
    const location = useLocation();
    const bed : Bed = location.state.bed;
    const [temperature, setTemperature] = useState<number>(bed.temperature);

    const [newTime, setNewTime] = useState<string>('');

    // const [sliders, setSliders] = useState<JSX.Element[]>([]);
    const [times, setTimes] = useState<string[]>([]);


    const handleTemperatureChange = (delta: number) => {
        setTemperature(prevTemp => prevTemp + delta);
        bed.temperature = temperature + delta;
    };


    async function  addSchedule(nt: string) { 
     


        const  internalTimes = [...times, nt].sort();
        // times.sort();
        console.log(nt)
        await setTimes([...times,nt]);
        console.log(times)
        // setSliders([]);
        // setSliders(slidersInit(internalTimes));

 
    };



    // function slidersInit(t: string[]) {
    //     const slidersTemp = []


        
    //     for (let i = 0; i < t.length; i++) {
      
    //         slidersTemp.push(
    //             <div className="slide-container">
    //                 <Slider
    //                     aria-label="Temperature"
    //                     defaultValue={0}
    //                     getAriaValueText={(value) => `${value}°C`}
    //                     valueLabelDisplay="auto"
    //                     shiftStep={30}
    //                     step={1}
    //                     marks
    //                     min={16}
    //                     max={28}
    //                     orientation='vertical'
    //                     style={{ WebkitAppearance: 'slider-vertical' }}
    //                     />
  
    //                             <input className='slider-label' type="time" defaultValue={t[i]} onChange={(e)=>{
    //                                     t[i] = e.target.value;
    //                                     // setTimes(times);
    //                                     console.log(times);
    //                                 }} pattern="(([0-1][0-9]|2[0-4]):([0-5][0-9]|60))"/>
                        
                        

    //             </div>
                
        
            
    //         );
          
    //     }
    //     // setSliders(slidersTemp)
    //     return slidersTemp;
    // }

    function createSliderFromTime(time:string, i:number): JSX.Element {
        return (
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

                    <input className='slider-label' type="time" defaultValue={times[i   ]} onChange={(e)=>{
                            times[i] = e.target.value;
                            setTimes(times);
                            console.log(times);
                        }} pattern="(([0-1][0-9]|2[0-4]):([0-5][0-9]|60))"/>
            
            

    </div>
        )
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
         
                {times.map((time, index) => {return createSliderFromTime(time, index)})}
                    
            </div>
            </div>
        </div>
    );
};

export default BedDetails;