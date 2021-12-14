import React,{useState,useEffect} from 'react';
import ListaAnimes from '../Components/Home-Animes/ListaAnimes';
import Loading from '../Components/Home-Animes/Loading';
import getAnime  from '../Services/AnimesService';

function MoviesPage(){

    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])

    useEffect(() => {
        
        getAnime("/search/anime", "?&type=movie&page=1")
        .then((response) => {
           
            setList(list => [...list, response.data.results])
            setLoading(false)

        })
        

    }, [])

    if(loading){

        return(
            <div>
                <Loading />
            </div>
        )
    }else{

        return(
            <div>
                <ListaAnimes movies={list} />
             
            </div>)

    }

}export default MoviesPage;