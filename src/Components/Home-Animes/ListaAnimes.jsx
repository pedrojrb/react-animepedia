import { getSearch} from '../../Services/AnimesService'
import React,{useState, useEffect} from 'react';
import TypeAnimes from "./TypeAnimes";
import EachAnime from './EachAnime';
import "./listaAnimes.css"


function ListaAnimes(props){

    const {searchResult, list, movies} = props
    
   
    /* Instancia de hooks */
   
    const [listAnimes, setListAnimes] = useState([]);
    const [titleAnimes, setTitleAnimes] = useState([]);

    useEffect(() => {

        if(!searchResult && !movies){

            list.forEach((element) => {

    
                if(element.top){
    
                    setListAnimes(listAnimes => [...listAnimes,element.top])
                    setTitleAnimes( titleAnimes => [...titleAnimes, "Top Animes"])
                   
    
                }else if(element.anime){
    
                    setListAnimes(listAnimes => [...listAnimes, element.anime])
                    setTitleAnimes (titleAnimes => [...titleAnimes, element.mal_url.name])
    
    
                }else{
                  
                    setListAnimes(listAnimes => [...listAnimes, element.results])
                    setTitleAnimes (titleAnimes => [...titleAnimes, "Most Popular Animes"])

                }

            })
        }
    
    }, []);

    if(searchResult){

        return(

            <div className="contenedor-padre">
                <h2>Search results</h2>
                
                <div className="contenedor-hijo">
                    {searchResult.map((anime) => <EachAnime name={ anime.title } img={ anime.image_url }  className="item" />)}
                </div>
                
            </div>
        )

    }else if(movies){

        return(

            <div className="contenedor-padre">
                <h2>Movies</h2>
                
                <div className="contenedor-hijo">
                    {movies[0].map((anime) => <EachAnime name={ anime.title } img={ anime.image_url } />)}
                </div>
                
            </div>
        )

        

    }else{

        return(

            <div>
    
                {listAnimes.map( (element, index) => < TypeAnimes title={titleAnimes[index]} list={element}  /> )}
    
            </div>

        )

    }

} export default ListaAnimes;