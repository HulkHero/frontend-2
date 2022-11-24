import { createTheme, } from "@mui/material"
const theme = createTheme({

    palette: {
        // mode: 'dark',
        // primary: {
        //     main: '#FFFFFF'
        // }
        // ,
        // secondary: {
        //     main: '#ff7d1a'
        // }

    },
    typography: {
        fontFamily: "Rubik",
        color: "black"
    },
    components: {
        // Changing default props
        MuiCardActionArea: {  //name of the component
            defaultProps: {
                // Name of the property
                disableRipple: true
            },
        },
        // MuiButton: {
        //     defaultProps: {
        //         disableRipple: true,
        //     }
        // },
        MuiTab: {
            defaultProps: {
                disableRipple: true
            }
        }

    },

})

theme.typography.h3 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
    },
};

theme.typography.h6 = {
    fontSize: '0.8rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
};


theme.typography.h5 = {
    fontSize: '0.8rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
        fontWeight: '500',
    },
};

export default theme;