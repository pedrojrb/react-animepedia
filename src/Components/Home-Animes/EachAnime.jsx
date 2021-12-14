import './eachAnime.css'

function EachAnime(props){


    const {name, img, obj} = props;

    return (

        <div className="container-parent">
           <figure className="container-child">
                <img src={img} alt={`Imagen ilustrativa de ${name}`} className="img" id="img" ></img>
                <figcaption>{name}</figcaption> 
            </figure>
            
        </div>

)
}export default EachAnime;


