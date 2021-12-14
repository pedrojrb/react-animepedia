
import {Link, Redirect} from 'react-router-dom'
import React,{useState, useEffect} from 'react';
import './nav.css'
import {Form, Navbar, Container, NavDropdown, FormControl, Button, Nav as NavRB} from 'react-bootstrap';

function Navigation(){

    const[state, setState] = useState(false);
    const [input, setInput] = useState();

    const handleClick = (event) =>{

        event.preventDefault();
        event.stopPropagation();
        
        /* Instancio variable con los datos del resultado de la busqueda */

        let inputResult = document.getElementById("inputSearch").value
        let regex = /[ /!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g;

        if(inputResult.length < 3){
            
            alert("Debe ingresar al menos 3 letras")
        
        }else{

            if(regex.test(inputResult)){

                inputResult = inputResult.replace(regex, '')
                setInput(inputResult) 
                setState(true)  


            }else{

                
                setInput(inputResult) 
                setState(true)  

            }
           
        }

    }


    const handleFocus = (event) => {

        event.preventDefault();
        event.stopPropagation();

        document.getElementById("inputSearch").value = "";
    }

    useEffect(() => {

        if(input){

            setState(false)

        }

    }, [input])


    return(

        
        <div className="container-nav">
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand > <Link to="/react-animepedia/" className="title">ANIMEPEDIA</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                <NavRB
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavRB.Link ><Link to="/movies" className="buttonMovies">Movies</Link></NavRB.Link>
                </NavRB>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Title Anime"
                    className="me-2"
                    aria-label="Search"
                    id="inputSearch" 
                    onFocus={handleFocus}
                    />
                    <Button variant="outline-success" onClick={handleClick} className="buttonSearch" >Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>

        {state ? <Redirect to={{pathname: `/search/${input}`, state: {name : input}}} /> : false}
         
        </Navbar> 

        </div>
    );

}export default Navigation;


/* 
        <nav class="navbar navbar-expand-lg navbar-light bg-black" >

            <div class="container-fluid" style={styles.nav}>

                <Link to="/" className="buttonTypeAnimes"><a class="navbar-brand" href="#" style={styles.title}>ANIMEPEDIA</a> </Link>

               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> 

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link to="/movies" className="buttonTypeAnimes" style={styles.letter}>Movies</Link>
                        </li>

                    </ul>

                    
                    <form class="d-flex"  >
                
                        <input class="form-control me-2" type="search" placeholder="Title..." aria-label="Search" id="inputSearch" onFocus={handleFocus} />
                       <button class="btn btn-outline-success bg-black border-0 border-black" type="submit"  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </button>

                    </form>
                   
                </div>

            </div> */