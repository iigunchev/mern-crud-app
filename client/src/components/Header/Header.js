import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Header() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    const navigate = useNavigate();
    const dispatch = useDispatch();


    // useEffect(() => {
    //     const token = user?.token;

    //     setUser(JSON.parse(localStorage.getItem("profile")))
    // }, [])

    const logout = () => {
        dispatch( { type: "LOGOUT" });

        navigate("/");

        setUser(null);
    }

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
        <div className="flex items-center gap-4">
            <img className="h-12 rounded-full" src={user.result.imageUrl} alt={user.result.name} />
            <h6 className="text-slate-100">{user.result.name}</h6>
            <button className="bg-slate-300 rounded-lg p-2 font-medium" onClick={logout}>Log Out</button>
        </div>
    ) : (
        <Link to="/auth" className="bg-slate-300 rounded-lg p-2 font-medium">Log In</Link>
    )}
    </header>
    );
  }