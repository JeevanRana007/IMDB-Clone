import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div className="flex items-center p-3 ">
            {/* clicking on logo will redirect back to the home */}
            <Link to={"/"} >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" className="h-12 w-30" alt="" />
            </Link>
             {/* Redirect to watchlist */}
            <Link to={"/watchlist"} className="mx-6 text-3xl font-bold text-white hover:cursor-pointer">
                    WatchList
            </Link>
        </div>
        
    )
}
export default Navbar;