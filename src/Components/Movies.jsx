import MovieCard from "./MovieCard";
import axios from "axios"
import {useEffect, useState} from "react"
import Pagination from "./Pagination";
import * as React from 'react';


function Movies(props){
    let {watchList,setWatchList,
        handleAddToWatchList,handleRemoveFromWatchList,
        pageNo,handleNext,handlePrev} = props;
    {/*To maintain the current state of Movies */}
    let [movies,setMovies] = useState([]);
    {/*fetch the trending Movies once the page loads */}    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1b189a59147c0e4a6d517737657a4a41&page=${pageNo}`)
        .then(function(res){
        setMovies(res.data.results);
    })
    },[pageNo])
    return(
        <div className="p-5">
            {/*Display Trending Movies Header*/}
            <div className="text-2xl text-yellow-200 m-5 font-bold text-center inline-flex ">
               <span className="mr-20">Trending Movies</span>
            </div>
            {/*Fetch the Movie cards by passing the movielist fetched  */}
            <div className=" flex flex-wrap place-items-start m-8 gap-2 ">
                {movies.map((movieObj)=>{
                    // console.log(movieObj);
                    return <MovieCard key={movieObj.id}
                                    movieObj={movieObj}
                                    name={movieObj.title} 
                                    poster_path={movieObj.poster_path}
                                    watchList = { watchList}
                                    handleAddToWatchList = {handleAddToWatchList}
                                    handleRemoveFromWatchList = {handleRemoveFromWatchList}/>
                })}
            </div>
            {/*Adding PageNo to the currentPage */}
            <Pagination pageNo={pageNo}
                        handleNext={handleNext}
                        handlePrev={handlePrev}/>
        </div>
    )
}

export default Movies;