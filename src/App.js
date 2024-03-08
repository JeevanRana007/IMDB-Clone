import './App.css';
import Movies from './Components/Movies';
import WatchList from './Components/WatchList';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useState,useEffect} from "react"


function App() {
  //use States to manage user's watchlist and current page number
  let [watchList,setWatchList] = useState([]);
  let [pageNo,setPageNo] = useState(1); 
  //handle pagination by changing pageNo when user click prev buttons
    let handlePrev = ()=>{
        if(pageNo>1)
            setPageNo(pageNo-1)
    }
    //handle pagination by changing pageNo when user click next buttons
    let handleNext = ()=>{
        setPageNo(pageNo+1);
    }
    //Adding the movieobj to the watchlist and storing it to the localstorage and update watchlist
  let handleAddToWatchList = (movieObj)=>{
      let newWatchList = [...watchList,movieObj];
      localStorage.setItem("movieApp",JSON.stringify(newWatchList));
      setWatchList(newWatchList);
  }
 //filter by removing movieobj from the existing watchlist and storing updated watchlist to the localstorage
  let handleRemoveFromWatchList = (movieObj)=>{
      let filteredWatchList = watchList.filter((movie)=>{
          return movie.id !== movieObj.id;
      })
      localStorage.setItem("movieApp",JSON.stringify(filteredWatchList));
      setWatchList(filteredWatchList);
  }
//Retrieve the watchlist from local storage if exist when they revisit the app
  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem("movieApp");
    if(!moviesFromLocalStorage){
        return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
},[])
  //Returning Navbar and routes with their specific components
  return (
    <div className='App'>
          <BrowserRouter>
          {/*Adding Navigation Bar to the Dashboard */}
            <Navbar/>
            <Routes>
              {/*Path to Homepage */}
                <Route path='/' element={
                  <>
                      {/*Adding Banner to the Dashboard */}
                        <Banner/>
                          {/*Adding Movies to the Dashboard */}
                        <Movies watchList={watchList}
                                setWatchList={setWatchList}
                                handleAddToWatchList={handleAddToWatchList}
                                handleRemoveFromWatchList={handleRemoveFromWatchList}
                                pageNo={pageNo}
                                handleNext={handleNext}
                                handlePrev={handlePrev}/>
                  </>
                        }>
                </Route>
                {/*Path to Watchlist */}
                <Route path='/watchlist' element={
                  <WatchList watchList={watchList}
                            setWatchList={setWatchList}
                              handleRemoveFromWatchList={handleRemoveFromWatchList}/>
                }
                ></Route>  
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;