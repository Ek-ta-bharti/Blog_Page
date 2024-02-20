import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Header = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    "Love and Loss",
    "Life is a magnificent journey filled with unpredictable twists and turns",
    "learning",
    "laughter",
    "Where challenges test our strength and resilience",
    "where each moment holds the potential for growth",
    "love",
    "Life is a journey of discovery and growth",
    "Filled with moments of joy and sorrow",
    "opportunities invite us to shine",
    "It's a tapestry of experiences woven together ",
    "Each thread adding depth and meaning",
    "Guiding us through the highs and lows",
    "shaping who we are",
    "Life is a gift to be treasured",
    "A chance to make a difference",
    "To love, to learn, to explore",
    "And to embrace the beauty of existence.",
    "It's a story waiting to be written",
    "With chapters of triumph and defeat",
    "Moments of laughter and tears",
    "And lessons learned along the way.",
    "Life is a dance of possibilities",
    "A mosaic of dreams and realities",
    "Where passion ignites the soul",
    "And purpose lights the path.",
    "It's a journey of self-discovery",
    "Of uncovering our true essence",
    "And connecting with others",
    "In meaningful and profound ways.",
    "Life is a symphony of emotions",
    "Playing melodies of love and longing",
    "Resilience and hope",
    "That resonate within us all.",
    "It's a journey of the heart",
    "Where love knows no bounds",
    "And kindness is a currency",
    "That enriches every interaction.",
    "Life is a celebration of diversity",
    "Of embracing our differences",
    "And recognizing our shared humanity",
    "In a world that thrives on connection.",
    "It's a journey of faith and belief",
    "In ourselves and each other",
    "That empowers us to overcome",
    "Whatever obstacles we may face.",
    "Life is a testament to the human spirit",
    "To our capacity for resilience",
    "And our endless potential",
    "To create, to innovate, to inspire.",
    "It's a journey of reflection",
    "Of looking inward to find answers",
    "And outward to find purpose",
    "In the tapestry of existence.",
    "Life is a precious gift",
    "A fleeting moment in time"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const maxLength = Math.max(...lines.map(line => line.length)); // Find the length of the longest line

  return (
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
        <Button variant="contained" style={{ color: 'black', backgroundColor: 'white', marginBottom: '20px', marginLeft: '30px', marginRight: '20px', boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)' }}>Login</Button>
        <Button variant="contained" style={{ color: 'white', backgroundColor: 'black', marginBottom: '20px',  marginRight: '80px', border: '1px solid white', boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)' }}>Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
