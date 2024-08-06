import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase";
import { Box, Button, Input, Modal, Typography } from "@mui/material";

import { styled } from "@mui/material";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function signup() {


}

function App() {
  //const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form className="app__signup">
          <center>
            <img
              className="app__headerImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
              alt=""
            />
             </center>
             <Input placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <Input placeholder="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
               <Input placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
             <Button onClick={signup}>Sign Up</Button>
         </form>
        </Box>
      </Modal>

      <div className="app_header">
        <img
          className="app__headerImage"
          src="`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png`"
          alt=""
        />
        <h1 className="header_border"></h1>
      </div>
      <Button onClick={handleOpen}>Sign Up</Button>
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
