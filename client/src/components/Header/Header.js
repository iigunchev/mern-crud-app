import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const user = null;

    return (
    <header className="
        mt-4 
        bg-slate-800 
        p-4 
        rounded-lg 
        flex 
        justify-between 
        items-center 
        md:mx-auto 
        md:container">
    <Link to="/" className="text-slate-200 text-xl font-bold" >Home</Link>

    <button className="bg-fuchsia-700 text-white py-3 px-6 font-semibold rounded-lg hover:bg-fuchsia-600 active:bg-fuchsia-700 focus:outline-none focus:ring focus:ring-fuchsia-300">+ Add Feedback</button>
    {user ? (
        <div>
            <img src={user.result.imageUrl} alt={user.result.name}>{user.result.name.charAt(0)}</img>
            <h6>{user.result.name}</h6>
            <button>Log Out</button>
        </div>
    ) : (
        <Link to="/auth" className="bg-slate-300 rounded-lg p-2 font-medium">Log In</Link>
    )}
    </header>
    );
  }