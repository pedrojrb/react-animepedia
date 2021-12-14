import EachAnime from './EachAnime';
import './anime.css'
import React,{ useState, useEffect} from 'react';
import ItemsCarousel from 'react-items-carousel';
import arrowRightPhoto from '../../img/arrowright.png'
import arrowLeftPhoto from '../../img/arrowleft.png'



function Anime(props){
   
    const {list} = props; 
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [size, setSize] = useState(window.innerWidth)
    const [numberCards, setNumberCards] = useState(8)
    const chevronWidth = 50;

    //Actualizo el hook width 
    const updateSize = () => {

        setSize(window.innerWidth)

        return size
    }
    
    window.addEventListener("resize", updateSize )

    useEffect(() =>{
    
        if(size > 1670){

            setNumberCards(8)
        }

        if(size < 1670){

            setNumberCards(7)
        }

        if(size < 1600){

            setNumberCards(6)
        }

        if(size < 1400){

            setNumberCards(5)
        }

        if(size < 1100){

            setNumberCards(4)
        }

        if(size < 850){

            setNumberCards(3)
        }

        if(size < 700){

            setNumberCards(2)
        }

        if(size < 290){

            setNumberCards(1)
        }

    }, [size])

    return(

        
        
       
        <div style={{ padding: `0 ${chevronWidth}px` }}>

       
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={numberCards}
                gutter={20}
                leftChevron={<button className="buttonCarousel"><img src={arrowLeftPhoto} /></button>}
                rightChevron={<button className="buttonCarousel"><img src={arrowRightPhoto} /></button>}
                outsideChevron
                chevronWidth={chevronWidth}
                slidesToScroll={numberCards}

            >

                {list.map((anime) =>

                    < EachAnime name={ anime.title } img={ anime.image_url } obj={list} className="item" /> 
                )}
            </ItemsCarousel>
           
        
        </div>
        
    );

   
}export default Anime;
        