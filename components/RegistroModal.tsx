import React from "react";

type Props = {
    estado: boolean,
    accion: ()=>void,
}

function RegistroModal({estado, accion}:Props) {
    const hijo =(e: { preventDefault: () => void; stopPropagation: () => void; }) =>{
        e.preventDefault();
        e.stopPropagation();
    }
  return (
    <div onClick={accion} className={ `${estado ? 'hidden':'absolute'} w-screen h-screen bg-opacity-50 bg-gray-500 `}>
        <div onClick={hijo} className='p-2 shadow-lg rounded-md relative top-[30%] left-[15%] sm:left-[20%] md:left-[25%] lg:left-[35%] w-2/3 sm:w-6/12 md:w-5/12 lg:w-4/12 bg-white '>
           <h1 className='text-center p-2 text-2xl font-semibold'>Create user</h1> 
           <form className='flex flex-col space-y-2 p-2 justify-center'>
           <div className='flex flex-col w-full mx-auto space-y-2'>
                <input className='mx-auto w-11/12 rounded-md p-2 outline-none border border-slate-200  focus:border-sky-500  placeholder:' placeholder='Name' />
                <input className='mx-auto w-11/12 rounded-md p-2 outline-none border border-slate-200  focus:border-sky-500  placeholder:' placeholder='Email'/>
                <input type="password" className='mx-auto w-11/12 rounded-md   p-2 outline-none border border-slate-200 focus:border-sky-500  placeholder:' placeholder='Password'/>
           </div>
            <br />
            <button className='bg-green-500 w-1/3 mx-auto p-2 rounded-lg font-semibold text-white'>Register Now</button>
           </form>

        </div>
    </div>
  )
}

export default RegistroModal