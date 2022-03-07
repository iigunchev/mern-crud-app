import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
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
    <Paper className="paper">
      <form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
        <Typography variant="h6" className="">{ currentId ? "Editing" : "Creating" } a Memory</Typography>
        <TextField 
        className="formInput"
        name="creator" 
        variant="outlined" 
        label="Creator" 
        fullWidth
        value={postData.creator}
        onChange={(e) => setPostData({...postData, creator: e.target.value})}
        />
        <TextField 
        className="formInput"
        name="title" 
        variant="outlined" 
        label="Title" 
        fullWidth
        value={postData.title}
        onChange={(e) => setPostData({...postData, title: e.target.value})}
        />
        <TextField 
        className="formInput"
        name="message" 
        variant="outlined" 
        label="Message" 
        fullWidth
        value={postData.message}
        onChange={(e) => setPostData({...postData, message: e.target.value})}
        />
        <TextField 
        className="formInput"
        name="tags" 
        variant="outlined" 
        label="Tags" 
        fullWidth
        value={postData.tags}
        onChange={(e) => setPostData({...postData, tags: e.target.value})}
        />
        <div className="fileInput">
          <FileBase64 
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button className="buttonSubmit" variant="contained" size="large" color="primary" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form;
