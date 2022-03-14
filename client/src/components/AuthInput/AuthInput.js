import React from 'react'

const authInputStyle = `
mt-4
block
rounded-md
border-gray-300
shadow-sm
focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`


const AuthInput = ({handleChange, name, label, type, handleShowPassword }) => {


  return (
    <label className="block">
        <input 
            name={name} 
            label={label} 
            onChange={handleChange}
            className={authInputStyle}
            placeholder={label} 
            required
            type={type}
            // InputProps={name === 'password' ? {
            //     endAdornment: (
            //         <button onClick={handleShowPassword}>
            //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            //                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            //                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            //             </svg>
            //         </button>
            //     )
            // } : null}
            />
            
    </label>
  )
}

export default AuthInput