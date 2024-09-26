import  NavFooter  from '../components/NavFooter/NavFooter'
import './Stats.css'
// import './App.css'
import Card from '../components/Card/Card';
import exp from 'constants';

function Stats(){
//const för saker? 
return(
    <div>
     <Card startImage='src/assets/TimeInBed.png'/>
     <Card startImage='src/assets/Asleep.png'/>
     <Card startImage='src/assets/AsleepAfter.png'/>

    </div>
);
    

}

export default Stats;

// type StatPropps = {
//     title:? string;
//     xstats: number[];
//     ystats: number[];
//     xtitle:? string;
//     ytitle:? string; 
// }

// const Statsfield = ({variabler, man , lägger, in}) => {


//     return
//         //Här gör du koden för snyghet
//         <div>   
        
//         </div>;
// } ;