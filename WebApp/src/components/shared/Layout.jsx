import Container from '@mui/material/Container';
import MyAppBar from '../MyAppBar';
import React from 'react';

export const Layout = (props) => {
    return (
        <>
        <MyAppBar />
        <Container>
            {props.children}
        </Container>
        </>
    );
};
