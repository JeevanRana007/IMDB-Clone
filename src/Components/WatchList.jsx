import { useEffect, useState } from "react";
import genreids from "../Utitlity/genre";
import "../static/style.css"
import FlipCard from "./FlipCard";

function WatchList(props){
  let {watchList,handleRemoveFromWatchList,setWatchList} = props;
  let [genreList,setGenreList] = useState(["All Genres"]);
  let [currGenre,setCurrGenre] = useState("All Genres");
  let [search,setSearch] = useState("");
  {/*Filter movies based on search input */}
  let handleSearch = (e)=>{
    setSearch(e.target.value);
  }
  {/*get the generids from current watchlist and append to genrelist so respective generes present would be displayed*/}
    useEffect(()=>{
      let temp = watchList.map((movieObj)=>{
        return genreids[movieObj.genre_ids[0]];
      })
      temp = new Set(temp);
      setGenreList(["All Genres",...temp]);
    },[watchList])

      
    return( 
        <>
        {/*Call handlefilter to  whenever the respective genre is selected*/}
       <div class="h-10 bg-gradient-to-r from-yellow-400 to-neutral-300 flex justify-end text-xl font-sans font-bold">
          <div class="input-with-placeholder">
             <select onChange={(e)=>{
              setCurrGenre(e.target.value);
             }} class="bg-gradient-to-r from-yellow-400 to-neutral-300 input-with-placeholder h-10  ">
              {
                genreList.map((genre)=>{
                  return <option key={genre} value={genre} class="flex justify-center text-center text-xl font-sans  bg-yellow-300">{genre}</option>
                })
              }
             </select>
         </div>
         {/*Call handleSearch to  whenever any input is provided in search bar*/}
         <div class="flex justify-end mx-40  font-sans ">
            <div class="input-with-placeholder ">
                <input type="text" id="username"  onInput={handleSearch} value={search}/>
                <label for="username">Search....</label>
            </div>
        </div>
        </div>
        {/*based on above handlefilter/handlesearch selected fetch the respective movie display card by passing movieobj to display card component*/}
        <div class="flex flex-wrap place-items-start m-6">
                 {/*filter based on  genre and then filter based on searchkeyword */}
                {watchList.filter((obj)=>{
                  if(currGenre == "All Genres"){
                    return true;
                  }else{
                    return genreids[obj.genre_ids[0]] == currGenre;
                  }
                })
                .filter((movieObj)=>{
                  return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase());
                })
                .map((movieObj)=>{
                    return  <FlipCard key={movieObj.id}
                    movieObj={movieObj}
                    vote_average={movieObj.vote_average}
                    name={movieObj.title} 
                    poster_path={movieObj.poster_path}
                    watchList = { watchList}
                    genreid ={genreids[movieObj.genre_ids[0]]}
                    handleRemoveFromWatchList = {handleRemoveFromWatchList}/>
                
                })}    
        </div>
        </>
    )
}

export default WatchList;