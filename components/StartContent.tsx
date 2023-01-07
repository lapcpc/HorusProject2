import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import axios from '../services/axios'
import requests from '../services/Request';
function StartContent() {
   interface Moovie {
    backdrop_path: string,
    title: string,
    name:string,
    original_name:string,
    overview:string,
   }
   const router = useRouter()
   const actualizar = (n:any, m:any, c:any) =>{
    router.push({
      pathname: '/video',
      query: {
        name: n,
        photo: m,
        descripcion: c,

      }
    })
  }
    const [movie,setMovie]=useState<Moovie>()
    useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[
            Math.floor(Math.random()* request.data.results.length -1)
        ]);
       
        return request
    }
        

    
     fetchData();
    }, [])
    
    function truncate(string:string | undefined, n: number){
        if(string == undefined){
            return ""
        }
        return string?.length > n ? string.substr(0,n-1) + '....': string
    }

  return (
    <header className='mx-auto w-full sm:w-4/5 my-6'>
        <h1 className='ml-10  text-3xl'>Random top Content </h1>
    <div className=' flex flex-row p-10 pt-5'>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} className='w-[40%] object-cover' />
        <div className='ml-2 space-y-2'>
        <h1 className=' text-3xl '>{movie?.title || movie?.name ||movie?.original_name} </h1>
        
        <h1 className='banner_description'>{truncate(movie?.overview,250)}</h1>
        <div className='space-x-2 text-white'>
            
            <button onClick={()=>{actualizar(movie?.name, movie?.backdrop_path,movie?.overview )}} className='bg-black text-md p-2 rounded-sm'>Watch</button>
        </div>
        </div>
    </div>
    <div className='banner--fadeBottom' />

</header>
  )

}

export default StartContent