import React, { useState } from 'react'

function Pranav() {
    const [ch, setCh] = useState(false);
    const click = () => {
        setCh(true)
        setTimeout(() => {
          setCh(false);
        }, 5000);
      };
    
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-700'>
      <div className=' w-[500px] h-[600px] bg-white p-8'>
        <div className='flex justify-center '>
            <h2 className='text-3xl font-bold'>{ch ? "done" : "signup"}</h2>
        </div>
            <form>
            <div className='flex flex-col p-3'>
            <labe className='p-2 text-xl font-semibold'>Name</labe>
            <input 
                className=' flex items-center justify-center border  p-3 w-[90%] h-[40px]'
                type='text'
                placeholder='name'
                
            />
        </div>
        <div className='flex flex-col p-3'>
            <labe className='p-2 text-xl font-semibold'>Email</labe>
            <input 
                className=' flex items-center justify-center border p-3  w-[90%] h-[40px]'
                type='text'
                placeholder='email'
                
            />
        </div>

        <div className='flex flex-col p-3'>
            <labe className='p-2 text-xl font-semibold'>password</labe>
            <input 
                className=' flex items-center justify-center border p-3  w-[90%] h-[40px]'
                type='text'
                placeholder='password'
                
            />
        </div>

        <div className='flex flex-col p-3'>
            <labe className='p-2 text-xl font-semibold'>confirm password</labe>
            <input 
                className=' flex items-center justify-center border p-3  w-[90%] h-[40px]'
                type='text'
                placeholder='confirm password'
                required
            />
        </div>

        <div className='flex justify-center p-3'>
            <button className='w-[50%] h-[40px] bg-blue-400 text-xl font-semibold hover:bg-blue-600'
            type='button'
            onClick={click}
            >
                Submit
            </button>
        </div>
            </form>
      </div>
      
    </div>
  )
}

export default Pranav


