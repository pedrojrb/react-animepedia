import ramenImg from '../img/ramen.png'
import './NotFoundPage.css'

function NotFoundPage(){

    return (
        <div className="container">
            <p>404 ERROR</p>
            <p>Not Found...</p>
            <img src={ramenImg} alt="ramen" height="100px"></img>
        </div>)
} export default NotFoundPage;