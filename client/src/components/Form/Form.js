import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";

import"./Form.scss";

export const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  }); 
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updatePost(currentId, postData));

    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: ""
    });
  };

  return (
    // <Paper className="paper">
    //   <form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
    //     <Typography variant="h6" className="">{ currentId ? "Editing" : "Creating" } a Memory</Typography>
    //     <TextField 
    //     className="formInput"
    //     name="creator" 
    //     variant="outlined" 
    //     label="Creator" 
    //     fullWidth
    //     value={postData.creator}
    //     onChange={(e) => setPostData({...postData, creator: e.target.value})}
    //     />
    //     <TextField 
    //     className="formInput"
        // name="title" 
        // variant="outlined" 
        // label="Title" 
        // fullWidth
        // value={postData.title}
        // onChange={(e) => setPostData({...postData, title: e.target.value})}
    //     />
    //     <TextField 
    //     className="formInput"
        // name="message" 
        // variant="outlined" 
        // label="Message" 
        // fullWidth
        // value={postData.message}
        // onChange={(e) => setPostData({...postData, message: e.target.value})}
    //     />
    //     <TextField 
    //     className="formInput"
        // name="tags" 
        // variant="outlined" 
        // label="Tags" 
        // fullWidth
        // value={postData.tags}
        // onChange={(e) => setPostData({...postData, tags: e.target.value.split(",")})}
    //     />
        // <div className="fileInput">
        //   <FileBase64 
        //     type="file"
        //     multiple={false}
        //     onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
        //   />
        // </div>
    //     <Button className="buttonSubmit" variant="contained" size="large" color="primary" type="submit" fullWidth>Submit</Button>
    //     <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    //   </form>
    // </Paper>
    <form className="container bg-slate-100 p-6 my-8 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 place-content-start" onSubmit={handleSubmit}>
        <h6 className="sm:col-span-2">{ currentId ? "Editing" : "Creating" } a Memory</h6>
        <label className="block">
        
          <input type="text" 
          name="creator" 
          label="Creator" 
          value={postData.creator}
          onChange={(e) => setPostData({...postData, creator: e.target.value})}
          className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
            placeholder="Your name" />
          </label>
        <label className="block">
          <input type="text" 
              name="title" 
              label="Title" 
              value={postData.title}
              onChange={(e) => setPostData({...postData, title: e.target.value})}
              className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
              placeholder="Title" />
          </label>
        <label className="block">
          <input type="text" 
              name="message" 
              label="Message" 
              value={postData.message}
              onChange={(e) => setPostData({...postData, message: e.target.value})}
              className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
            placeholder="Your Message" />
          </label>
        <label className="block">
          <input type="text" 
              name="tags" 
              label="Tags"
              value={postData.tags}
              onChange={(e) => setPostData({...postData, tags: e.target.value.split(",")})}
              className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
            " placeholder="Category" />
          </label>
          <div className="fileInput sm:col-span-2">
          <FileBase64 
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
          <button className="
            py-3 
            px-6 
            font-semibold 
            rounded-lg 
            bg-fuchsia-700 text-white 
            hover:bg-fuchsia-600 active:bg-fuchsia-700 focus:outline-none focus:ring focus:ring-fuchsia-300"
            type="submit">
            Add Memory
          </button>
          <button className="
            py-3 
            px-6 
            font-semibold 
            rounded-lg 
            bg-slate-700 
            text-white 
            hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300"
            type="button"
            onClick={clear}>
            Clear
          </button>
      </form>
  )
}

export default Form;
