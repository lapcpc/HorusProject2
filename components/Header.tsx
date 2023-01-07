import Link from 'next/link'
import React from 'react'
import { useAuth } from "../context/AuthContext"
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'

type Props = {
    
    logout: ()=>void,
}
function Header({logout}:Props) {
    
    
    const salir =() =>{
        logout()
    }

    return (
    <div className='p-2 shadow-md flex flex-row justify-between'>
        <div className='mt-1 space-x-10 flex flex-row'>
            <h1 className='text-xl font-serif ml-3  font-medium'>Horus</h1>
            <div className='mt-0.5  flex flex-row space-x-4'>
            <Link href="/dashboard">
            <p>Start </p>
            </Link>
            <Link href="/dashboard">
            <p>Explore</p>
            </Link>
        </div>
        </div>
        
        <div onClick={salir} className='bg-slate-200 hover:bg-slate-300 rounded-full p-2 cursor-pointer'>
            <ArrowLeftOnRectangleIcon className='w-5 h-5' />
        </div>

    </div>
  )
}

export default Header