/* eslint no-unused-vars: 0 */  // --> OFF

import './custom.css';

import { indigo, orange } from '@mui/material/colors';

import { createTheme } from '@mui/material/styles';

const primary = indigo[600];
const secondary = orange.A600;

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
    //https://mui.com/customization/palette/#customization
    palette: {
        
    },
});