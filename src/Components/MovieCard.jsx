
export default function MovieCard(props){
    let {movieObj,handleAddToWatchList,handleRemoveFromWatchList,name,watchList,poster_path} = props;

    function isContain(movieObj){
        for(let i=0;i<watchList.length;i++){
            if(watchList[i].id == movieObj.id){
                return true;
            }
        }
        return false;
    }

    return(
        <div class="h-[40vh] w-[200px] bg-center bg-cover 
        rounded-xl hover:scale-110 duration-300 hover:cursor-pointer
         flex flex-col justify-between items-end overflow-hidden"
        style={{
               backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
       }}>
           {!isContain(movieObj)?
           <div class="m-4 bg-yellow-300
           flex justify-center items-center 
           h-8 w-8 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"  onClick={()=>handleAddToWatchList(movieObj)} >
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                </svg>
                   
                </div>
           :<div onClick={()=>handleRemoveFromWatchList(movieObj)}
            class="m-4 bg-gray-900
            flex justify-center items-center 
            h-8 w-8 rounded-lg">
                    &#128525;
                </div>
           } 
          
       </div>
      
    )
}