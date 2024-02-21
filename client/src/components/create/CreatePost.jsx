
import {useState, useEffect } from "react";

import { Box, FormControl, styled, InputBase, Button, TextareaAutosize } from "@mui/material";
import { AddCircle as Add } from '@mui/icons-material';

const Container = styled(Box)`
  margin: 50px 100px;
`;

const Image = styled('img')({
  width: '100%',
  height: '50vh',
  objectFit: 'cover'
});

const StyledControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 25px;
`;

const Textarea = styled (TextareaAutosize)`
    width: 100%;
    margin top: 50px;
    font-size: 18px;
    border: none;
    &:focus-visible {
        outline: none;
    }
`;
const initialPost ={
    title: '',
    description: '',
    picture: '',
    username: '',
    createdDate: new Date()

}

const CreatePost = () => {
  const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  
  const[post, setPost] = useState(initialPost);
  const[file, setFile] = useState('');

  useEffect( () =>{
    const getImage =() =>{
        if  (file){
            const data = new FormData();
            data.append("", file.name);
            data.append("file", file);
        }
    }
  }, [])
const handelchange =(e) => {
    setPost({ ...postMessage,[e.target.name]: e.traget.value})
}
  return (
    <Container>
      <Image src={url} alt="banner" />
      <StyledControl>
        <label htmlFor="fileInput">
          <Add fontSize="large" color="action" />
          <Add />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputTextField placeholder="title" />
        <Button variant="contained">
          publish
        </Button>
      </StyledControl>
      <Textarea
       minRow={5}
       placeholder="tell me stroy............."
      />


    </Container>
  );
};

export default CreatePost;
