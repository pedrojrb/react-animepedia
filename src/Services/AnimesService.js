import instance from "../Config/axios";


function getAnime( path, queryString ){
    
    return instance.get(queryString ? `${path}${queryString}` : `${path}`);
    
} export default getAnime;
