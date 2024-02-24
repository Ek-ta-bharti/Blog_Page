import { useState } from 'react'; 
// Importing the useState hook from React
import { Box, TextField, Button, styled } from '@mui/material'; 
// Importing Box, TextField, Button, and styled components from Material-UI
import { useMediaQuery } from '@mui/material';

const Component = styled(Box)` 
  width: 500px; 
  margin: auto; 
  box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6); 
  background: linear-gradient(to right, black 50%, white 50%); 
`;
// Styling the Box component
// Setting the width of the component to 500px
// Setting margin to auto for center alignment
// Adding a box shadow
// Adding a linear gradient background
 
const Image = styled('img')` 
  width: 100px; 
  display: flex; 
  margin: auto; 
  padding: 50px 0 0;
`;
// Styling the img tag
// Setting the width of the image to 100px
// Setting display to flex
// Centering the image horizontally
 // Adding padding to the image

const Wrapper = styled(Box)` 
  padding: 30px 30px; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  & > * {
    margin-bottom: 10px; 
  }
`;
// Styling the Box component
// Adding padding to the wrapper
// Setting display to flex
// Setting flex-direction to column
// Centering items horizontally
// Adding margin-bottom to direct children

const StyledTextField = styled(TextField)` 
  color: ${({ focused }) => focused ? 'green' : 'inherit'}; 
  background: ${({ focused }) => focused ? 'linear-gradient(90deg, white 50%, black 50%)' : 'inherit'}; 
`;
// Styling the TextField component
// Changing text color based on focus
// Changing background color based on focus

const SignUpButton = styled(Button)(({ theme, isClicked }) => ({ // Styling the SignUpButton component
  background: isClicked ? 'white' : 'black', // Setting background color based on isClicked state
  color: isClicked ? 'white' : 'black', // Setting text color based on isClicked state
  transition: 'background-color 0.3s, color 0.3s', // Adding transition effect for color change
  boxShadow: isClicked ? '0px 0px 10px 9px rgba(255, 255, 255, 0.9)' : 'none', // Adding box shadow based on isClicked state
  height: '40px', // Setting height
  width: '100px', // Setting width
  margin: '19px 30px', // Setting margin
  '&:hover': {
    backgroundColor: isClicked ? 'black' : 'black', // Changing background color on hover
    boxShadow: isClicked ? '0px 0px 10px 9px rgba(255, 255, 255, 0.9)' : '0px 0px 10px 9px rgba(0, 0, 0, 0.9)', // Changing box shadow on hover
  },
  [theme.breakpoints.down('sm')]: {}, // Adding breakpoint styles
}));

const LoginButton = styled(Button)(({ theme, isClicked }) => ({ // Styling the LoginButton component
  background: isClicked ? 'white' : 'black', // Setting background color based on isClicked state
  color: isClicked ? 'black' : 'white', // Setting text color based on isClicked state
  boxShadow: isClicked ? '0px 0px 10px 9px rgba(255, 255, 255, 0.9)' : 'none', // Adding box shadow based on isClicked state
  transition: 'background-color 0.3s, color 0.3s', // Adding transition effect for color change
  height: '40px', // Setting height
  width: '100px', // Setting width
  margin: '29px 35px', // Setting margin
  '&:hover': {
    backgroundColor: 'black', // Changing background color on hover
    boxShadow: isClicked ? '0px 0px 10px 9px rgba(255, 255, 255, 0.9)' : '0px 0px 10px 9px rgba(0, 0, 0, 0.9)', // Changing box shadow on hover
  },
  [theme.breakpoints.down('sm')]: {}, // Adding breakpoint styles
}));
const Label = styled('span')` 
  color: black; 
  font-weight: bold; 
  text-align: center; 
`;
// Styling the span element
// Setting text color to black
// Setting font weight to bold
// Setting text alignment to center

const BoldBlackText = styled('span')` 
  color: black; 
  font-weight: bold; 
  text-align: center; 
`;
// Styling the span element
// Setting text color to black
// Setting font weight to bold
// Setting text alignment to center

const BoldWhiteText = styled('span')` 
  color: white; 
  font-weight: bold; 
  text-align: center; 
`;
// Styling the span element
// Setting text color to white
// Setting font weight to bold
// Setting text alignment to center
const signupInitialValues ={
  name: '',
  username: '',
  password: '',
  gender: '',
  age: '',
  mobile: ''
}


const Login = () => { // Creating the Login component
  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png'; // Image URL

  const [isSignUpClicked, setSignUpClicked] = useState(false); // State for sign-up button click
  const [isLoginClicked, setLoginClicked] = useState(true); // State for login button click
  const [isUsernameFocused, setIsUsernameFocused] = useState(false); // State for focusing on username field
  const[signup, setSignup] =useState(signupInitialValues);

  const handleFocus = () => { // Function to handle input focus
    setIsUsernameFocused(true); // Set isUsernameFocused state to true
  };

  const handleBlur = () => { // Function to handle input blur
    setIsUsernameFocused(false); // Set isUsernameFocused state to false
  };

  const toggleSignup = () => { // Function to toggle sign-up button
    setSignUpClicked(true); // Set sign-up click state to true
    setLoginClicked(false); // Set login click state to false
  };

  const toggleLogin = () => { // Function to toggle login button
    setSignUpClicked(false); // Set sign-up click state to false
    setLoginClicked(true); // Set login click state to true
  };

  const onInputChange =(e) =>{
  setSignup({ ...signup ,[e.target.name] : e.target.value });
  }

  return (
    <Component> 
       {/* Rendering the styled component */}
      <Box>  
        {/* Rendering a Box component */}
        <Image src={imageURL} alt="login" /> 
         {/* Rendering the image */}
        <Wrapper> 
           {/* Rendering the styled wrapper */}
          <div> 
             {/* Opening a div container */}
            {isLoginClicked ? ( // Conditional rendering based on login click state
              <> 
              {/* // Opening a fragment */}
                <LoginButton variant="contained" onClick={toggleLogin} isClicked={isLoginClicked}> 
                {/* // Rendering the LoginButton component */}
                  <BoldBlackText>Log in</BoldBlackText> 
                  {/* // Rendering bold black text */}
                </LoginButton>
                 {/* // Closing the LoginButton component */}
                <SignUpButton onClick={toggleSignup} variant="contained" isClicked={isSignUpClicked}> 
                {/* // Rendering the SignUpButton component */}
                  <BoldWhiteText>Sign up</BoldWhiteText> 
                  {/* // Rendering bold white text */}
                </SignUpButton> 
                {/* // Closing the SignUpButton component */}
              </> // Closing the fragment
            ) : ( // Condition for sign-up button click
              <> 
              {/* // Opening a fragment */}
                <SignUpButton onClick={toggleSignup} variant="contained" isClicked={isSignUpClicked}> 
                {/* // Rendering the SignUpButton component */}
                  <BoldBlackText>Sign up</BoldBlackText> 
                  {/* // Rendering bold black text */}
                </SignUpButton>
                 {/* // Closing the SignUpButton component */}
                <LoginButton variant="contained" onClick={toggleLogin} isClicked={isLoginClicked}> 
                {/* // Rendering the LoginButton component */}
                  <BoldWhiteText>Log in</BoldWhiteText>
                   {/* // Rendering bold white text */}
                </LoginButton> 
                {/* // Closing the LoginButton component */}
              </> // Closing the fragment
            )}
          </div> 
          {/* // Closing the div container */}
          {isLoginClicked ? ( // Conditional rendering for login button click
            <> 
            {/* // Opening a fragment */}
              <div style={{ display: 'flex', alignItems: 'center' }}> 
              {/* // Opening a div container with styling */}
                <Label style={{ backgroundColor: 'white', height: '30px', width: '120px', display: 'inline-block', textAlign: 'center' }}> UserName</Label> 
                {/* // Rendering a label */}
                <StyledTextField // Rendering the StyledTextField component
                  variant="standard"
                  placeholder="User Name"
                  InputLabelProps={{
                    style: { display: 'none' }, // Hide label when TextField is focused
                  }}
                  InputProps={{
                    style: { color: isUsernameFocused ? 'white' : 'inherit', background: 'black' }, // Setting input text color and background based on focus
                    placeholderTextColor: 'white', // Set placeholder text color
                  }}
                  sx={{ marginBottom: '10px',  marginLeft:'110px' }} // Adding styling
                  onFocus={handleFocus} // Handling input focus
                  onBlur={handleBlur} // Handling input blur
                />
              </div> 
              {/* // Closing the div container */}
              <div style={{ display: 'flex', alignItems: 'center' }}> 
              {/* // Opening a div container with styling */}
                <Label style={{ backgroundColor: 'white', height: '30px', width: '120px', display: 'inline-block', textAlign: 'center' }}>Password</Label> 
                {/* // Rendering a label */}
                <StyledTextField // Rendering the StyledTextField component
                  variant="standard"
                  placeholder="User Password"
                  InputLabelProps={{
                    style: { display: 'none' }, // Hide label when TextField is focused
                  }}
                  InputProps={{
                    style: { color: isUsernameFocused ? 'white' : 'inherit', background: 'black' }, // Setting input text color and background based on focus
                    placeholderTextColor: 'white', // Set placeholder text color
                  }}
                  sx={{ marginBottom: '10px', marginLeft: '110px' }} // Adding styling
                  onFocus={handleFocus} // Handling input focus
                  onBlur={handleBlur} // Handling input blur
                />
              </div> 
              {/* // Closing the div container */}
              <Button // Rendering a Button component
                variant="contained"
                style={{
                  width: '60%', // Setting width
                  background: 'linear-gradient(to right, white 53%, black 49%)', // Adding a linear gradient background
                  color: 'green', // Setting text color
                  marginBottom: '10px', // Adding margin bottom
                }}
              >
                <BoldBlackText>Log.</BoldBlackText> 
                {/* // Rendering bold black text */}
                <BoldWhiteText>in</BoldWhiteText> 
                {/* // Rendering bold white text */}
              </Button> 
              {/* // Closing the Button component */}
            </> // Closing the fragment
          ) : ( // Condition for sign-up button click
            <> 
            {/* // Opening a fragment */}
              <div style={{ display: 'flex', alignItems: 'center' }}> 
              {/* // Opening a div container with styling */}
                <Label style={{ backgroundColor: 'white', height: '30px', width: '120px', display: 'inline-block', textAlign: 'center' }}>Name</Label> 
                {/* // Rendering a label */}
                <StyledTextField // Rendering the StyledTextField component
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name='name'
                  placeholder="Your Name"
                  InputLabelProps={{
                    style: { display: 'none' }, // Hide label when TextField is focused
                  }}
                  InputProps={{
                    style: { color: isUsernameFocused ? 'white' : 'inherit', background: 'black' }, // Setting input text color and background based on focus
                    placeholderTextColor: 'white', // Set placeholder text color
                  }}
                  sx={{ marginBottom: '10px', marginLeft: '110px' }} // Adding styling
                  onFocus={handleFocus} // Handling input focus
                  onBlur={handleBlur} // Handling input blur
                />
              </div> 
              {/* // Closing the div container */}
              <div style={{ display: 'flex', alignItems: 'center' }}> 
              {/* // Opening a div container with styling */}
                <Label style={{ backgroundColor: 'white', height: '30px', width: '120px', display: 'inline-block', textAlign: 'center' }}>Username</Label>
                 {/* // Rendering a label */}
                <StyledTextField // Rendering the StyledTextField component
                  variant="standard"
                  placeholder="Your UserName"
                  onChange={(e) => onInputChange(e)}
                  name='username'
                  InputLabelProps={{
                    style: { display: 'none' }, // Hide label when TextField is focused
                  }}
                  InputProps={{
                    style: { color: isUsernameFocused ? 'white' : 'inherit', background: 'black' }, // Setting input text color and background based on focus
                    placeholderTextColor: 'white', // Set placeholder text color
                  }}
                  sx={{ marginBottom: '10px', marginLeft: '110px' }} // Adding styling
                  onFocus={handleFocus} // Handling input focus
                  onBlur={handleBlur} // Handling input blur
                />
              </div>
               {/* // Closing the div container */}
              <div style={{ display: 'flex', alignItems: 'center' }}> 
              {/* // Opening a div container with styling */}
                <Label style={{ backgroundColor: 'white', height: '30px', width: '120px', display: 'inline-block', textAlign: 'center' }}>Password</Label> 
                {/* // Rendering a label */}
                <StyledTextField // Rendering the StyledTextField component
                  variant="standard"
                  placeholder="Your Password"
                  onChange={(e) => onInputChange(e)}
                  name='password'
                  InputLabelProps={{
                    style: { display: 'none' }, // Hide label when TextField is focused
                  }}
                  InputProps={{
                    style: { color: isUsernameFocused ? 'white' : 'inherit', background: 'black' }, // Setting input text color and background based on focus
                    placeholderTextColor: 'white', // Set placeholder text color
                  }}
                  sx={{ marginBottom: '10px', marginLeft: '110px' }} // Adding styling
                  onFocus={handleFocus} // Handling input focus
                  onBlur={handleBlur} // Handling input blur
                />
              </div> 
              {/* // Closing the div container */}
              <div style={{ display: 'flex', alignItems: 'center' }}> 
              {/* // Opening a div container with styling */}
                <Label style={{ backgroundColor: 'white', height: '30px', width: '120px', display: 'inline-block', textAlign: 'center' }}>Gender</Label> 
                {/* // Rendering a label */}
                <StyledTextField // Rendering the StyledTextField component
                  variant="standard"
                  placeholder="Your Gender"
                  onChange={(e) => onInputChange(e)}
                  name='gender'
                  InputLabelProps={{
                    style: { display: 'none' }, // Hide label when TextField is focused
                  }}
                  InputProps={{
                    style: { color: isUsernameFocused ? 'white' : 'inherit', background: 'black' }, // Setting input text color and background based on focus
                    placeholderTextColor: 'white', // Set placeholder text color
                  }}
                  sx={{ marginBottom: '10px', marginLeft: '110px' }} // Adding styling
                  onFocus={handleFocus} // Handling input focus
                  onBlur={handleBlur} // Handling input blur
                />
              </div>
               {/* // Closing the div container */}
              <div style={{ display: 'flex', alignItems: 'center' }}> 
              {/* // Opening a div container with styling */}
                <Label style={{ backgroundColor: 'white', height: '30px', width: '120px', display: 'inline-block', textAlign: 'center' }}>Age</Label> 
                {/* // Rendering a label */}
                <StyledTextField // Rendering the StyledTextField component
                  variant="standard"
                  placeholder="Your Age"
                  onChange={(e) => onInputChange(e)}
                  name='age'
                  InputLabelProps={{
                    style: { display: 'none' }, // Hide label when TextField is focused
                  }}
                  InputProps={{
                    style: { color: isUsernameFocused ? 'white' : 'inherit', background: 'black' }, // Setting input text color and background based on focus
                    placeholderTextColor: 'white', // Set placeholder text color
                  }}
                  sx={{ marginBottom: '10px', marginLeft: '110px' }} // Adding styling
                  onFocus={handleFocus} // Handling input focus
                  onBlur={handleBlur} // Handling input blur
                />
              </div>
               {/* // Closing the div container */}
              <div style={{ display: 'flex', alignItems: 'center' }}> 
              {/* // Opening a div container with styling */}
                <Label style={{ backgroundColor: 'white', height: '30px', width: '120px', display: 'inline-block', textAlign: 'center' }}>Mobile</Label> 
                {/* // Rendering a label */}
                <StyledTextField // Rendering the StyledTextField component
                  variant="standard"
                  placeholder="Your Mobile.No"
                  onChange={(e) => onInputChange(e)}
                  name='mobil.no'
                  InputLabelProps={{
                    style: { display: 'none' }, // Hide label when TextField is focused
                  }}
                  InputProps={{
                    style: { color: isUsernameFocused ? 'white' : 'inherit', background: 'black' }, // Setting input text color and background based on focus
                    placeholderTextColor: 'white', // Set placeholder text color
                  }}
                  sx={{ marginBottom: '10px', marginLeft: '110px' }} // Adding styling
                  onFocus={handleFocus} // Handling input focus
                  onBlur={handleBlur} // Handling input blur
                />
              </div> 
              {/* // Closing the div container */}
              <Button // Rendering a Button component
                variant="contained"
                style={{
                  width: '60%', // Setting width
                  background: 'linear-gradient(to right, white 48%, black 50%)', // Adding a linear gradient background
                  color: 'green', // Setting text color
                  marginBottom: '10px', // Adding margin bottom
                }}
              >
                 <BoldBlackText>Sig</BoldBlackText> 
                 {/* // Rendering bold black text */}
                <BoldWhiteText> nup</BoldWhiteText> 
                {/* // Rendering bold white text */}
              </Button>
               {/* // Closing the Button component */}
            </> // Closing the fragment
          )}
        </Wrapper> 
        {/* // Closing the styled wrapper */}
      </Box> 
      {/* // Closing the Box component  */}
    </Component> // Closing the styled component
  );
};

export default Login; // Exporting the Login component 