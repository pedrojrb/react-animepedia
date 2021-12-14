import React,{useEffect,useState} from 'react';
import Anime from "./Anime";
import './typeAnimes.css'


function TypeAnime(props){

  
    const {title, list} = props;

   
    return(
        <div id="container">

            <h2>{title}</h2>
            <Anime list={list}  />

        </div>
    )
        
}export default TypeAnime;