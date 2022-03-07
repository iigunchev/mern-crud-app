import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from "react-file-base64";

import"./Form.scss";

export const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  }); 

  const handleSubmit = () => {

  };

  const clear = () => {

  };

  return (
    <Paper className="paper">
      <form autoComplete="off" noValidate className="form" onClick={handleSubmit}>
        <Typography variant="h6" className="">Creating a Memory</Typography>
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
          <FileBase 
            type="file"
            multiple={false}
            onDone={(base64) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button className="buttonSubmit" variant="contained" size="large" color="primary" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form;
