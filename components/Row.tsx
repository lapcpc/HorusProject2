import React, { useEffect, useState } from 'react'
import axios from '../services/axios'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

type Props = {
    title: string,
    fetchUrl: string | undefined,
    isLargeRow: boolean,
    update: (n:string)=> void
}

export default function Row({title, fetchUrl, isLargeRow = false, update}:Props) {
    const [movies, setMovies] = useState<any>(null)
    const base_url = 'https://image.tmdb.org/t/p/original/';
    const router = useRouter()
    useEffect(() => {
      async function fetchData(){
        if (fetchUrl == undefined){
          return ""
        }
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      }
      fetchData()
    

    }, [fetchUrl])
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
    
    return (
    <div className='mt-5 '>
        <h2 className='ml-2 text-2xl '>{title}</h2>
       <div className='flex flex-row overflow-scroll'>
       {movies != null && movies.map(
        (movie:any) =>
        ((isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path)) && (
           
                <div onClick={()=>{actualizar(movie.name, movie.backdrop_path,movie.overview )}} id="slider" className='cursor-pointer min-w-fit'>
                    <img 
                className={` w-56 p-2 m-2${isLargeRow && "row_posterLarge"}`}
                key={movie?.id}
                
                src={`${base_url}${
                    isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`} alt={movie?.name} />
                <p>{movie?.name}</p>
                </div>
           

          )
        
        )}

       </div>
    </div>
  )
}
