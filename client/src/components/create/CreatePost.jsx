import React, { useState } from "react";
import { Box, FormControl, styled, InputBase, Button, TextareaAutosize } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import { sanitizeText } from './textSanitizer'; // Import the sanitizeText function

const Container = styled(Box)`
  margin: 50px 100px;
`;

const StyledControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 10px 30px;
  font-size: 25px;
  color: ${(props) => (props.isBlack ? 'white' : 'black')};
  background-color: ${(props) => (props.isBlack ? 'black' : 'white')};
  text-align: left;
  max-width: 300px;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.isBlack ? '0 0 10px white' : '0 0 10px black'};
  display: flex;
  align-items: center;
  padding: 0 10px;
  &::placeholder {
    color: ${(props) => (props.isBlack ? 'white' : 'black')};
    opacity: 0.5;
    text-align: center;
  }
`;

const MaxLengthInputTextField = styled(InputTextField)`
  max-width: 300px;
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 50px;
  font-size: 18px;
  border: none;
  background-color: black;
  color: white;
  padding: 10px;
  &:focus-visible {
    outline: none;
  }
`;

const PublishButton = styled(Button)`
  width: auto;
  height: auto;
  padding: 8px 16px;
  display: flex;
  justify-content: flex-center;
`;

const initialPost = {
  title: '',
  description: '',
  username: '',
  gender: '',
  age: '',
  country: '',
  state: '',
  startDate: '',
  endDate: '',
  duration: '',
};

const CreatePost = () => {
  const [post, setPost] = useState(initialPost);
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Example breakpoint

  const handleDescriptionChange = (e) => {
    const sanitizedValue = sanitizeText(e.target.value);
    setPost({ ...post, description: sanitizedValue });
  };

  const handleStartDateChange = (e) => {
    setPost({ ...post, startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setPost({ ...post, endDate: newEndDate });
    calculateDuration(post.startDate, newEndDate);
  };

  const calculateDuration = (startDate, endDate) => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setPost({ ...post, duration: `${diffDays} days` });
    }
  };

  return (
    <Container>
      <StyledControl>
        <InputTextField
          placeholder="Name"
          value={post.username}
          onChange={(e) => setPost({ ...post, username: e.target.value })}
          isBlack={true}
        />
        <InputTextField
          placeholder="Gender"
          value={post.gender}
          onChange={(e) => setPost({ ...post, gender: e.target.value })}
        />
        <InputTextField
          placeholder="Age"
          value={post.age}
          onChange={(e) => setPost({ ...post, age: e.target.value })}
          isBlack={true}
        />
        {!isSmallScreen && (
          <>
            <InputTextField
              placeholder="Country"
              value={post.country}
              onChange={(e) => setPost({ ...post, country: e.target.value })}
            />
            <InputTextField
              placeholder="State"
              value={post.state}
              onChange={(e) => setPost({ ...post, state: e.target.value })}
              isBlack={true}
            />
          </>
        )}
        <InputTextField
          type="date"
          placeholder="Start Date"
          value={post.startDate}
          onChange={handleStartDateChange}
        />
        <InputTextField
          type="date"
          placeholder="End Date"
          value={post.endDate}
          onChange={handleEndDateChange}
          isBlack={true}
        />
        <MaxLengthInputTextField
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          inputProps={{ maxLength: 300 }}
          isBlack={true}
        />
      </StyledControl>
      <p>{post.duration}</p>
      <Textarea
        minRows={5}
        placeholder="Tell your story..."
        value={post.description}
        onChange={handleDescriptionChange}
      />
      <PublishButton variant="contained">
        Publish
      </PublishButton>
    </Container>
  );
};

export default CreatePost;
