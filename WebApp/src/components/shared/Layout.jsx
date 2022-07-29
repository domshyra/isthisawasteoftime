import Container from '@mui/material/Container';
import React from 'react';

export const Layout = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};
