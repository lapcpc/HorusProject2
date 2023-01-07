import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { ChevronLeftIcon,ChevronRightIcon, PlusIcon, BookOpenIcon, VideoCameraIcon, PlayCircleIcon } from '@heroicons/react/24/solid'
function Subtitle({Icon, Title}:{Icon:any, Title:any}){

    return (
        <div className='py-2 flex flex-row  '>
            <div className=' space-x-1 w-fit flex flex-row mx-auto '>
            <Icon className="text-blue-500 w-5 h-5 mt-0.5"/>
            <p className=' '>{Title}</p>
            </div>
        </div>
    )
}
function video() {
    
    const router = useRouter()
    const foto = router.query.photo + ""
    const [top, setTop] = useState(1)
    const notes =[{
        img:"https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg",
        name:"Luis Pinot",
        descripcion:"This is a possible note"
    }]
  return (
    <div className='grid grid-cols-9'>
        <div className=' col-span-9 lg:col-span-6'>
        <img className='w-[100%]' src={`https://image.tmdb.org/t/p/original/${foto}`} />
        <div className='p-2'>
            <h1 className='text-3xl ml-5 pt-22'>{router.query.name}</h1>        
            <div className='flex flex-row  justify-center '>
            <div className={`${top == 1 ? 'border-b-4 border-b-blue-500' : ''} cursor-pointer w-[30%]`}  
            onClick={()=>setTop(1)}
            >
                <Subtitle Icon={BookOpenIcon} Title="Description" />
            </div>
            <div className={ `${top == 2 ? 'border-b-4 border-b-blue-500' : ''} cursor-pointer  w-[30%]`}            onClick={()=>setTop(2)}
            >
                <Subtitle Icon={VideoCameraIcon} Title="Resources" />
            </div>
          
        </div>
        <hr /> 
                {top == 1 ? (<p className='mt-5 text-justify'>
                    {router.query.descripcion}
                </p>):(<p>
                    Github and other stuff
                </p>)}
            
        </div>             
            
        </div>
        {/*Seccion de comentarios */}
        <div className=' hidden lg:inline col-span-0 lg:col-span-3 p-2'>
                    <input className='p-3 border rounded-lg border-slate-200 w-full' placeholder='Write a note!' />
                    {notes.map((note)=>(
                        <div className='flex flex-col my-2 rounded-md border py-2 border-slate-200'>
                            <div className='flex flex-row p-2 space-x-3'>
                                <div className='w-fit'>
                                    <img src={note.img}
                                    className="rounded-full w-10 h-10" 
                                    />
                                </div>
                                <div className='w-full'>
                                <p>{note.name}</p>

                                <hr className='mt-4' />
                                </div>
                            </div>
                            <p className='px-2'>
                                {note.descripcion}
                            </p>
                        </div>
                    ))}
        </div>      


    </div>
  )
}

export default video