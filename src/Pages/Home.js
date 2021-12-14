import React,{useState, useEffect} from 'react';
import ListaAnimes from "../Components/Home-Animes/ListaAnimes";
import getAnime from '../Services/AnimesService'
import Loading from "../Components/Home-Animes/Loading";

function Home(){

    const [list, setList] = useState([]);
   
    
    useEffect(() => {
        
        //En el primer renderizado consultamos los datos a la API y guardamos la rta en el hook LIST.

        function request(){

            getAnime(`/top/anime/1`, null)
            .then(response => {
              
                setList(list => [...list, response.data]);
               
            })
            

            getAnime(`/search/anime`, `?q=&order_by=score&sort=desc&page=2`)
            .then(response  =>{
              
                setList( list => [...list, response.data])
               
            })


            getAnime(`genre/anime/2/2`, null)
            .then( response => {
                
                setList(list => [...list, response.data])
              
                
            })

            getAnime(`genre/anime/4/2`, null)
            .then( response => {
                
                setList(list => [...list, response.data])
               
            })

            getAnime(`genre/anime/8/2`, null)
            .then( response => {

                
                
                setList(list => [...list, response.data])
            
            })

            getAnime(`genre/anime/17/2`, null)
            .then( response => {

                
                
                setList(list => [...list, response.data])
            
            })

            getAnime(`genre/anime/30/2`, null)
            .then( response => {

                
                setList(list => [...list, response.data])
            
            })

          
               
        }

        request()

        
       
    }, [])

    //Hasta que no se completen todas las peticiones, la pagina tendra un spinner de carga.
    
    if(list.length !== 7){

        return (

            <Loading />
        )

    }else{

        //Enviamos los datos del hook list al componente ListaAnimes

            return (
               
                <div>
                    <ListaAnimes list={list} />
                </div>
            )         
    }
} export default Home;