import React from 'react'

function Form() {
  return (
    <div>
      <div className="fixed  flex inset-0 z-50 items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md ">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Sign Up</h2>
                <form >
                    {/* {errorMessage && <p className="mb-4 text-sm text-red-500" aria-live="assertive">{errorMessage}</p>} */}
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700 dark:text-gray-300" htmlFor="name">Name</label>
                        <input
                            className={`w-full px-3 py-2 border rounded 
                            `
                            }
                            type="text"
                            id="name"
                            // {...register('name', { 
                            //     required: 'Name is required', 
                            //     maxLength: { value: 128, message: 'Name must not exceed 128 characters' } 
                            //     })
                            // }
                        />
                        {/* {errors.name && <p className="mt-1 text-sm text-red-500" aria-live="assertive">{errors.name.message}</p>} */}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
                        <input
                            className={`w-full px-3 py-2 border rounded 
                            `
                            }
                            type="email"
                            id="email"
                            // {...register('email', {
                            //     required: 'Email is required',
                            //     pattern: {
                            //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            //     message: 'Invalid email address'
                            //     }
                            // })}
                        />
                        {/* {errors.email && <p className="mt-1 text-sm text-red-500" aria-live="assertive">{errors.email.message}</p>} */}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                className={`w-full px-3 py-2 border rounded`}
                                // type={showPassword ? "text" : "password"}
                                id="password"
                                // {...register('password', {
                                //     required: 'Password is required',
                                //     minLength: { value: 6, message: 'Password must be at least 8 characters' },
                                //     maxLength: { value: 265, message: 'Password must not exceed 265 characters' }
                                // })}
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                // onClick={() => setShowPassword(!showPassword)}
                            >
                                {/* {showPassword ? 'Hide' : 'Show'} */}
                            </span>
                        </div>
                        {/* {errors.password && <p className="mt-1 text-sm text-red-500" aria-live="assertive">{errors.password.message}</p>} */}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700 dark:text-gray-300" htmlFor="confirmPassword">Confirm Password</label>
                        <div className="relative">
                            <input
                                className={`w-full px-3 py-2 border rounded `
                                }
                                // type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                // {...register('confirmPassword', {
                                //     required: 'Please confirm your password',
                                //     validate: value => value === password || 'Passwords do not match'
                                // })}
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                // onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {/* {showConfirmPassword ? 'Hide' : 'Show'} */}
                            </span>
                        </div>
                        {/* {errors.confirmPassword && <p className="mt-1 text-sm text-red-500" aria-live="assertive">{errors.confirmPassword.message}</p>} */}
                    </div>
                    <button className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600" type="submit" >Sign Up</button>
                    <button
                        type="button"
                        className="w-full py-2 mt-2 text-white bg-gray-400 rounded hover:bg-gray-600"
                        // onClick={onClose}
                    >
                        Cancel
                    </button>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600 dark:text-gray-400">Already have an account? <span className="text-blue-500 cursor-pointer" >Log in</span></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form