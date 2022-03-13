import React, { useState } from 'react';
import AuthInput from '../AuthInput';


const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)

    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const handleShowPassword = () => setShowPassword(prevState => !prevState)
    
    const switchMode = () => setIsSignUp(prevState => !prevState)

  return (
    <main className="max-w-xs mt-8 mx-auto">
        <div className="bg-slate-200 p-4 rounded-lg grid grid-cols-1 place-items-center">
            {isSignUp ? 
            (<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>) :  
            (<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>)            
            }
            <h5>{isSignUp ? "Sign Up" : "Log In"}</h5>
            <form onSubmit={handleSubmit} className="flex flex-col">
                {
                isSignUp && (
                        <>
                            <AuthInput name="firstName" label="First Name" type="text" handleChange={handleChange}/>
                            <AuthInput name="lastName" label="Last Name" type="text" handleChange={handleChange}/>
                            <AuthInput name="email" label="Email" type="email" handleChange={handleChange}/>
                            <AuthInput name="password" label="Password" type={showPassword ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword}/>
                            {isSignUp && <AuthInput name="confirmPassword" label="Repeat Password" type="password" handleChange={handleChange}/>}
                        </>
                    )
                }
                {
                !isSignUp && (
                        <>
                            <AuthInput name="username" label="Username" type="text" handleChange={handleChange}/>
                            <AuthInput name="password" label="Password" type={showPassword ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword}/>

                        </>
                    )
                }
                <button className="
                    mt-4
                    py-2 
                    px-6 
                    font-semibold 
                    rounded-lg 
                    bg-fuchsia-700 text-white 
                    hover:bg-fuchsia-600 active:bg-fuchsia-700 focus:outline-none focus:ring focus:ring-fuchsia-300"
                    type="submit">
                    {isSignUp ? "Sign Up" : "Log In"}
                </button>
                <button className="text-xs mt-4 text-blue-700 hover:text-blue-500" onClick={switchMode}>
                    {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                </button>
            </form>
        </div>
    </main>
  )
}

export default Auth