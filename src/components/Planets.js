import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Planets = (props) =>{

const {id} = useParams();
const [data, getData]= useState({});

useEffect(()=>{
    axios.get(`https://swapi.dev/api/planets/${id}/`)
        .then(res =>{
        console.log(res);
        getData(res.data)
        // sets the data to go to the other components. data
        })
    },[]);
    console.log(data.results)

    return(
        <div>
            <h1>{data.name}</h1>
            <h3>Climate: {data.climate}</h3>
            <h3>Gravity:{data.gravity}</h3>
            <h3>Population:{data.population}</h3>
            <h3>Terrain:{data.terrain}</h3>
        </div>

    )

}
export default Planets