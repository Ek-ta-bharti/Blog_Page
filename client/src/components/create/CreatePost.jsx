import React, { useState } from "react";
import { Box, FormControl, styled, InputBase, Button, TextareaAutosize } from "@mui/material";
import { useMediaQuery } from '@mui/material';

const Container = styled(Box)`
  margin: 50px 100px;
`;

const StyledControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: column; /* Changed to column */
  width: 100%; /* Ensuring the form takes full width */
  justify-content: space-between; /* Pushing items to opposite ends */
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 10px 30px;
  font-size: 25px;
  color: ${(props) => (props.isBlack ? 'white' : 'black')}; /* Alternate text color */
  background-color: ${(props) => (props.isBlack ? 'black' : 'white')}; /* Alternate background color */
  text-align: left;
  max-width: 300px;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.isBlack ? '0 0 10px white' : '0 0 10px black'}; /* Conditional box-shadow */
  display: flex;
  align-items: center; /* Center vertically */
  padding: 0 10px; /* Adjust padding */
  &::placeholder {
    color: ${(props) => (props.isBlack ? 'white' : 'black')}; /* Placeholder color */
    opacity: 0.5; /* Adjust opacity if needed */
    text-align: center; /* Center placeholder text */
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
  justify-content: flex-end;
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

  // Handler for description change
  const handleDescriptionChange = (e) => {
    let newValue = e.target.value;

    newValue = newValue.replace(/\bsex\b/gi, 's*x');
    newValue = newValue.replace(/\bbetichod\b/gi, 'beti***d');

    newValue = newValue.replace(/\d/g, '');

    // Update the state
    setPost({ ...post, description: newValue });
  };

  const handleStartDateChange = (e) => {
    setPost({ ...post, startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    setPost({ ...post, endDate: e.target.value });
    calculateDuration(post.startDate, e.target.value);
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // Calculate years, months, days here
    // Update the state with duration
    setPost({ ...post, duration: `${diffDays} days` }); // Change this to show years, months, days
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
        <PublishButton variant="contained">
          Publish
        </PublishButton>
      </StyledControl>
      <Textarea
        minRows={5}
        placeholder="Tell your story..."
        value={post.description}
        onChange={handleDescriptionChange}
      />
      <p>{post.duration}</p>
    </Container>
  );
};

export default CreatePost;
