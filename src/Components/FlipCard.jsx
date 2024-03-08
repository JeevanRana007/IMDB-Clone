import React from 'react'
import "../static/style.css" 

export default function FlipCard(props) {;
    let {movieObj,vote_average,genreid,handleRemoveFromWatchList,name,watchList,poster_path} = props;
    const popularity = Math.round(movieObj.popularity);
    const rating = Math.round(movieObj.vote_average*10)/10;
  return (
    <>
         {/*Create the filter card On hover will show details of the movie*/}
        <div class = " m-6 flex h-[60vh] w-[200px] bg-center bg-cover flex flex-col rounded-3xl justify-self-start items-center overflow-hidden ">
            <div class ="  group h-50 w-50 [perspective:1000px] ">
                <div class="  h-96 w-96 rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class = " flex flex-col items-end overflow-hidden ">
                        <img class=" rounded-2xl object-cover shadow-xl shadow-black/40" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="" />
                    </div>
                    <div class ="absolute inset-0 h-[70vh] w-[400px] rounded-xl bg-black/80 text-center text-slate-200 font-sans [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class = "flex min-h-full  flex-col items-center justify-center "> 
                                <h1 class ="text-2xl font-bold text-rose-600  w-24 ">{movieObj.title}</h1>
                                <p class='text-2xl font-bold m-5 text-violet-400'> {genreid}</p>
                                <div class = "flex flex-row items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <p class='text-2xl font-bold m-2 '> {popularity}</p>
                                </div>
                                <div class = "flex flex-row items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <p class='text-2xl font-bold m-2 '>{rating}</p>                           
                                </div>
                                <button
                                    onClick={()=>handleRemoveFromWatchList(movieObj)}
                                    class=" m-3 align-end select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl py-2 px-6 rounded-full border-yellow-300 text-rose-600 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button">
                                    Remove
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
