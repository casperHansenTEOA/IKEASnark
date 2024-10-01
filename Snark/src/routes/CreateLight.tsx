// import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Card from '../components/Card/Card';
import './CreateLightAndBed.css';
import { useEffect, useState } from "react";

const CreateLight: React.FC = () => {
    // const [lightName, setLightName] = useState('');
    // const [bedId, setBedId] = useState('');
    const navigate = useNavigate();

    const nav = document.getElementById("footer");
    if (nav) {
        nav.classList.add("hidden");
    }

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Here you would typically send the data to your backend
    //     console.log('Light Name:', lightName);
    //     console.log('Connected Bed ID:', bedId);

    //     // Navigate to another page after submission
    //     navigate('/');
    // };

    const [listOfDummyLights, setListOfDummyLights] = useState<React.ReactNode[]>([]);
    
    useEffect(() => {
        const fetchDummyLights = async () => {
            const lights = await Promise.all([
                dummyLight(1, navigate),
                dummyLight(2, navigate),
                dummyLight(3, navigate),
                dummyLight(4, navigate)
            ]);
            setListOfDummyLights(lights);
        };
    
        fetchDummyLights();
    }, [navigate]);
    
    return (
        <div className="wrapper">
            <h1>Connect lights</h1>
            
            {listOfDummyLights}
            
        </div>
    );
};


async function dummyLight(n: number, navigate: NavigateFunction) {
    function setBedId(value: string): void {
        throw new Error('Function not implemented .' + value);


    }
    const arrow =  <IoIosArrowDown className={'down-arrow '+n}  onClick={() => expandCard(n)}/>

    const bedOptions = (await getAvalibleBeds()).map((bed, index) => (
        <option key={index} value={bed}>
            {bed}
        </option>
    ));
    return (
        <div >
            
            <Card>
                {arrow}
                <h1 onClick={()=> expandCard(n)}>Light {n}</h1>
              
                <div className="expanded-info hidden ">
                    <form onSubmit={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        navigateToHome(navigate)

                        //TODO send data to backend
                        // Handle form submission logic here
                    }} className='light-form '>
                        <label htmlFor={`bed-select-${n}`}>Select Bed:</label>
                        <select
                            id={`bed-select-${n}`}
                            // value={bedId}
                            onChange={(e) => setBedId(e.target.value)}
                        >
                            <option value="">Select a bed</option>
                            {bedOptions}
                        </select>
                        <button type="submit" >Connect</button>
                    </form>


                </div>
            </Card>
        </div>
        
    );
}
export default CreateLight;

async function getAvalibleBeds() {
    //TODO get beds from backend

    return ["Bed 1", "Bed 2", "Bed 3","Bed 4"];
}

function expandCard(n: number) {
    const card = document.querySelectorAll(".expanded-info")[n -1];
    card.classList.toggle("hidden");

    const arrow = document.querySelectorAll(".down-arrow")[n -1];
    arrow.classList.toggle("rotate");


}

function navigateToHome(navigate: NavigateFunction){
    // Redirect to home page
    console.log("Home");
    document.querySelectorAll(".nav-footer")[0].classList.toggle("hidden");

    navigate('/');
}