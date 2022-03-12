import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch])
  return (
    <main className="gap-4 pt-4 flex flex-col items-center">
        <Form
            currentId={currentId} 
            setCurrentId={setCurrentId}/>
        <Posts
            setCurrentId={setCurrentId}/>
    </main>
  )
}

export default Home;

