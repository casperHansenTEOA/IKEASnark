import  { useState, useEffect} from 'react';
import Bed from '../types/Bed';
import './BedDetails.css';
import { useLocation } from 'react-router-dom';
import { Slider } from '@mui/material';
import { bedManager } from '../handlers/BedHandler';
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
    const [times, setTimes] = useState<Set<string>>(new Set([]));

    useEffect(() => {
        //write all the keys of the schedule object to the times array
        console.log(bed.schedule);
        setTimes(new Set(Object.keys(bed.schedule)));
    }, []);




    const handleTemperatureChange = (delta: number) => {
        //save temps to the controller here as well
        setTemperature(prevTemp => prevTemp + delta);
        bed.temperature = temperature + delta;
    };


    async function  addSchedule(nt: string) { 
     
        // times.sort();
        console.log(nt)
        if (times.size< 6) {
            await setTimes(new Set([...times.values(),nt]));
            bedManager.addEntryToScheduleFromId(bed.id, nt, 0);
        }else{
            alert('Max 6 schedules allowed');
        }
        console.log(times)
        // setSliders([]);
        // setSliders(slidersInit(internalTimes));  

        

        sortDocumentAfterClassName();
    };

    function saveTemperature(time: string) {
        return (event: Event, value: number | number[]) => {
            const newSchedule = bed.schedule;
            newSchedule[time] = Array.isArray(value) ? value[0] : value;
            bed.schedule = newSchedule;
            bedManager.addEntryToScheduleFromId(bed.id, time, Array.isArray(value) ? value[0] : value);
            console.log(bed.schedule);
        }
    }
    function createSliderFromTime(time:string, i:number): JSX.Element {
        return (
        <div className={"slide-container "+time}>
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
            onChange={saveTemperature(Array.from(times)[i])}
            />

            <input className='slider-label' type="time" defaultValue={Array.from(times)[i]} onChange={(e)=>{
                    const timesArray = Array.from(times);
                    timesArray[i] = e.target.value;
                    setTimes(new Set(timesArray));
                    document.querySelectorAll('.schedule-sliders')[0].children[i].classList.remove(time);
                    document.querySelectorAll('.schedule-sliders')[0].children[i].classList.add( e.target.value);
                    
                    setTimes(times);
                    console.log(times);
                    sortDocumentAfterClassName();
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
                    Wanted Current Temperature:
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
         
                {Array.from(times).map((time, index) => {return createSliderFromTime(time, index)})}
                    
            </div>
            </div>
        </div>
    );
};

export default BedDetails;

//ugly fucking solution for sorting elements in the dom tree based on their second class
function sortDocumentAfterClassName() {
    const list = document.querySelectorAll('.schedule-sliders')[0];

    [...list.children]
        .sort((a, b) => a.classList[1] > b.classList[1] ? 1 : -1)
        .forEach(node => list.appendChild(node));
}
