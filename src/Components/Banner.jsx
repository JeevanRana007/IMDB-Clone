import axios from "axios";
import { useEffect, useState } from "react";

function Banner(){
    let [detail,setDetail] = useState(undefined)
     {/*Fetch the upcoming movie data from api and update detail*/}
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=1b189a59147c0e4a6d517737657a4a41')
        .then(function(res){
            let data = res.data.results[0]
            setDetail(data);
        })
    },[]);

    if(detail == undefined){
        return
    }
    return(
        <>
         {/*Fetch the Movie poster and display*/}
        <div class="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end" 
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${detail.poster_path})`}}>
           
        </div>
        </>
    )
   
}

export default Banner;