import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import lines from '../../constants/lines'; 

const Header = () => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const maxLength = Math.max(...lines.map(line => line.length)); 

  return (
    <div style={{ overflowX: 'hidden' }}> 
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '290px', marginRight: 'auto' }}>
            <Typography variant="h6" component="div">
              LIFE IS
            </Typography>
            <Typography variant="body1" sx={{ wordWrap: 'break-word', backgroundColor: 'white', padding: '20px', marginTop: '20px', marginBottom: '20px', marginLeft: '10px', marginRight: `${maxLength * 8}px`, color: 'black', boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)' }}>
              {lines[currentLine]}
            </Typography>
          </Box>
         
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
