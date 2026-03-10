import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer({ isLarge }) {
    console.log('isLarge value:', isLarge); // Now logs true/false correctly
    
    const getSize = () => {
        return isLarge ? '100px' : '200px'; // Adjust sizes as needed
    };
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='sm'>
                <Box sx={{ bgcolor: '#ddf21e', height: getSize() }} />
            </Container>
        </React.Fragment>
    );
}