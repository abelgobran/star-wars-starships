import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function FetchStarships() {
  const [ships, setShips] = useState([])
  // const [capacity,setCapacity] = useState([])
  // const [crew,setCrew] = useState([])
  // const [passengers,setPassengers] = useState([])

let navigate = useNavigate()

  useEffect(() =>{
    axios
      .get('https://swapi.dev/api/starships')
      .then(response => {
          console.log(response)
          setShips(response.data.results)
      })
      .catch(error => {
          console.log(error);
      })
    },([]))

 
           return(
               <div className="ships">
                 <button onClick={()=> {navigate("/Planets")}}>planets</button>
                   {ships.map(ship=> <li key={ship.name}><h2>{ship.name} </h2>
                        <div>crew:  {ship.crew}</div>
                        <div>passengers:  {ship.passengers}</div>
                        <div>cargo capacity:  {ship.cargo_capacity}
                        <div>max atmosphere speed:  {ship.max_atmosphering_speed}</div>
                        <div>cost:  {ship.cost_in_credits}</div><br/></div></li>)}
                   

               </div>
           )
         
    
} 

export default FetchStarships