import React,{useState, useEffect} from 'react'
import ListaAnimes from '../Components/Home-Animes/ListaAnimes'
import Loading from "../Components/Home-Animes/Loading"
import getAnime from '../Services/AnimesService'
import {useParams} from 'react-router-dom';

function SearchPage(){
    
    let {use} = useParams();
    const [listSearch, setListSearch] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {


        if(use){


            setLoading(true)
            
            getAnime("/search/anime", `?q=${use}&page=1&limit=50`)
            .then(response => {
               
                setListSearch(response.data.results)
                setLoading(false)
            
            })


        }    

    }, [use])


    
    if(loading){

            
        return (
            <Loading />
        )


    }else{

        return(


            <div>

                <ListaAnimes searchResult={listSearch} />

            </div>


        )
    }
    
 

}export default SearchPage;