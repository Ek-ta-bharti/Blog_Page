import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import lines from '../../constants/lines';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';

const LoginHeader = () => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const maxLength = Math.max(...lines.map((line) => line.length));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      marginRight: isSmallScreen ? '10px' : '90px',
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      animation: '', // Remove animation to prevent blinking
      '&::after': {
        // Remove unnecessary styles
      },
    },
  }));

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 42,
    height: 42,
    border: `2px solid ${theme.palette.background.paper}`,
    marginRight: isSmallScreen ? '10px' : '110px',
  }));

  return (
    <div style={{ overflowX: 'hidden' }}>
      <AppBar
        id="app-bar" // Assign unique ID for styling
        position="static"
        sx={{
          backgroundColor: 'black',
          width: '100%', // Set fixed width
          maxWidth: '100vw', // Set maximum width
          display: 'flex', // Ensure flexbox for horizontal resizing
          justifyContent: 'center', // Center content horizontally
          alignItems: 'center', // Center content vertically
        }}
      >
        <Toolbar sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '290px', marginRight: 'auto' }}>
            <Typography variant="h6" component="div">
              LIFE IS
            </Typography>
            <Typography
              variant="body1"
              sx={{
                wordWrap: 'break-word',
                backgroundColor: 'white',
                padding: '20px',
                marginTop: '20px',
                marginBottom: '20px',
                marginLeft: '10px',
                marginRight: `${maxLength * 8}px`, // Initial margin based on max line length
                color: 'black',
                boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)',
              }}
            >
              {lines[currentLine]}
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LoginHeader;
