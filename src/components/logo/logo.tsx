import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image'; // Import the Next.js Image component
import logoImage from './logo.png'; // Import the logo image

interface Props {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick} sx={{
        display: 'flex',
        alignItems: 'center',
        // Reset margin and padding around the Image
        '& img': {
          verticalAlign: 'top', // Align the image to the top
          margin: 0,            // Reset default margin
          padding: 0            // Reset default padding
        }
      }}>
      <Image src={logoImage} alt="EduClic Logo" width={250} height={70} />
    </Box>
  );
}

Logo.defaultProps = {
variant: 'primary',
};

export default Logo;
