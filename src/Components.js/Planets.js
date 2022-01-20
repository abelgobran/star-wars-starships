import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function FetchPlanets() {
  const [planets, setPlanets] = useState([])
//   const [population,setPopulation] = useState([])
//   const [climate,setClimate] = useState([])
//   const [terrain,setTerrain] = useState([])


let navigate =useNavigate()
  useEffect(() =>{
    axios
      .get('https://swapi.dev/api/planets/')
      .then(response => {
          console.log(response)
          setPlanets(response.data.results)
        //   setPopulation(response.data.results.population)
          
        //   setPopulation(planets.population)
          
      })
      .catch(error => {
          console.log(error);
      })
    },([]))

    // const handleClick = () =>{
    //     console.log( population);
    //     return(
    //     <div className="planetInfo">
    //         {planets.map(planet=>{<li key={planet.name}>population: {planet.population}</li>})}
            
            
    //     </div>
    //     )
    // }


   

           return(
               <div className="planets">
                 <button onClick={()=> {navigate('/Starships')}}>Ships</button>
                   {planets.map(planet=> <li key={planet.name}><h2>{planet.name} </h2> 
                        <div>Population:  {planet.population}</div>
                        <div>Climate:  {planet.climate}</div>
                        <div>Terrain:  {planet.terrain}</div><br/></li>) }
                        {/* <button onClick={HandleClick => planets.map((planet => <div key={planet.id} className='planet'><em>Planet: </em>{planet.name} <br></br> <em>Population: </em> {planet.population}</div>))} >more info</button> */}
                   {/* <button onClick={handleClick}>More info</button> */}

               </div>
           )
         
    
} 

export default FetchPlanets


