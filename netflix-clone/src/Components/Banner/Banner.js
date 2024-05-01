import React, { useEffect, useState } from 'react'
import Localaxios from "../../utils/axios" 
import request from "../../utils/request"
import "./Banner.css"


const Banner = () => {
    const[movie,SetMovie]=useState({})
    useEffect(()=>{
        (async ()=>{
            try {
                const requests=await Localaxios.get(request.fetchNetflixOriginals)
                SetMovie(requests.data.results[
                    Math.floor(Math.random()*requests.data.results.length)
                ]);
            }catch (error) {
                console.log("error",error);
            }
        })()
    },[]);
    function truncate (str,n){
        return str?.length>n ?str.substr(0,n,-1)+'...':str;
    }

    return (

    <div className="banner" style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
    }}>

        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title||movie?.name||movie?.original_name}
                </h1>
                <div className="banner_buttons">
        
                    <button className="banner_button play">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
                <div className="banner_fadeBottom"></div>
        </div>
    </div>
  );
};

export default Banner

