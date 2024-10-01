// import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Card from '../components/Card/Card';
import './CreateLight.css';

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

    const listOfDummyLights = [
        dummyLight(1, navigate),
        dummyLight(2, navigate),
        dummyLight(3, navigate),
        dummyLight(4, navigate)
       
    ]

    return (
        <div className="wrapper">
            <h1>Connect lights</h1>

            {/* Show all the dummy lights here */}
            
            {listOfDummyLights}
            
        </div>
    );
};


function dummyLight(n: number, navigate: NavigateFunction) {
    function setBedId(value: string): void {
        throw new Error('Function not implemented .' + value);


    }
    const arrow =  <IoIosArrowDown className={'down-arrow '+n}  onClick={() => expandCard(n)}/>
    return (
        <div >
            
            <Card>
                {arrow}
                <h1>Light {n}</h1>
              
                <div className="expanded-info hidden ">
                    <form onSubmit={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        // Handle form submission logic here
                    }} className='light-form '>
                        <label htmlFor={`bed-select-${n}`}>Select Bed:</label>
                        <select
                            id={`bed-select-${n}`}
                            // value={bedId}
                            onChange={(e) => setBedId(e.target.value)}
                        >
                            <option value="">Select a bed</option>
                            <option value="bed1">Bed 1</option>
                            <option value="bed2">Bed 2</option>
                            <option value="bed3">Bed 3</option>
                        </select>
                        <button type="submit" onClick={()=> navigateToHome(navigate)}>Connect</button>
                    </form>


                </div>
            </Card>
        </div>
        
    );
}
export default CreateLight;

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