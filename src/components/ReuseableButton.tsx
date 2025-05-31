'use client';

// This tells Next.js that this is a client-side component
import React from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button } from '@mui/material';

// Define types for the props
interface ReusableButtonProps {
  href: string; // URL for the button
  color?: string; // Optional color prop
  icon?: React.ComponentType<any>; // Optional icon, default is LocationOnIcon
  text: string; // Text to display on the button
  width?: { xs: string | number; sm: string | number; md: string | number }; // Optional width prop
}
const ReusableButton: React.FC<ReusableButtonProps> = ({ href, color, icon, text, width }) => {
  const IconComponent = icon || ArrowForwardIcon; // Default icon

  return (
    <Button
      sx={{
        mt: 3,
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: 1,
        width: 'fit-content',
      }}
      variant='contained'
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      endIcon={<IconComponent />}
    >
      {text} 
    </Button>
  );
};

export default ReusableButton;
