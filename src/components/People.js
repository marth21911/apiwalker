import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const People = (props) =>{


const {id} = useParams();
const [data, getData]= useState({});

useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/${id}/`)
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
            <h3>Height: {data.height}</h3>
            <h3>Weight:{data.mass}</h3>
            <h3>Born:{data.birth_year}</h3>
            <h3>Hair:{data.hair_color}</h3>
        </div>

    )

}
export default People