import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {
    const[movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    console.log(movies)
  return (
    <div className='w-full h-[500px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[500px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
           <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1>{movie?.title}</h1>
             <div>
                <button className='border bg-gray-300 text-black  border-gray-300 py-2 px-5'>Play</button>
                <button className='border  text-white ml-5  border-gray-300 py-2 px-5'>Watch Later</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Main