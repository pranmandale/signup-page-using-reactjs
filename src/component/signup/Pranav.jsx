import React, { useState } from 'react'

function Pranav() {
    const [ch, setCh] = useState(false);
    const [submit, setSubmit] = useState(false);

    const [showpassword, setShowPassword] = useState(false);
    const [conpass, setConPass] = useState(false)
   


    const click = () => {
        setCh(true)
        setSubmit(true)
        setTimeout(() => {
            setCh(false);
            setSubmit(false)
        }, 5000);
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-700'>
            <div className=' w-[500px] h-[600px] bg-white p-8'>
                <div className='flex justify-center '>
                    <h2 className='text-3xl font-bold'>{ch ? "done" : "signup"}</h2>
                </div>
                <form className=''>
                    <div className='flex flex-col p-3'>
                        <label className='p-2 text-xl font-semibold'>Name</label>
                        <input
                            className='w-full flex items-center justify-center border  p-3 w-[90%] h-[40px]'
                            type="text"
                            placeholder='name'

                        />

                    </div>
                    <div className='flex flex-col p-3'>
                        <label className='p-2 text-xl font-semibold'>Email</label>
                        <input
                            className='w-full flex items-center justify-center border p-3  w-[90%] h-[40px]'
                            type='text'
                            placeholder='email'

                        />
                    </div>

                    <div className='flex flex-col p-3'>
                        <label className='p-2 text-xl font-semibold'>password</label>
                        <div className='relative w-full'>
                            <input
                                className='w-full flex items-center justify-center border p-3  w-[90%] h-[40px]'
                                type={showpassword ? "text" : "password"}
                                placeholder='password'

                            />
                            <button
                                type='button' 
                                onClick={() => setShowPassword(!showpassword)}
                                className='absolute text-xl font-semibold text-gray-700 right-2 top-2 '
                            >
                                {showpassword ? "Hide" : "Show"}
                            </button>


                        </div>
                    </div>

                    <div className='flex flex-col p-3'>
                        <label className='p-2 text-xl font-semibold'>confirm password</label>
                        <div className='relative'>
                        <input
                            className='w-full flex items-center justify-center border p-3  w-[90%] h-[40px]'
                            type={showpassword? "text": "password"}
                            placeholder='confirm password'
                            required
                        />
                        <button
                        type='button'
                        onClick={() => setConPass(!conpass)}
                        className='absolute text-xl font-semibold text-gray-700 right-2 top-2'
                        >
                           {conpass? "Hide": "Show"} 
                        </button>
                        </div>
                    </div>

                    <div className='flex justify-center p-3'>
                        <button className='w-[60%] h-[40px] bg-blue-400 text-xl font-semibold hover:bg-blue-600'
                            type='button'
                            onClick={click}
                        >
                            {submit ? "Response is submitted" : " Please submit"}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Pranav


