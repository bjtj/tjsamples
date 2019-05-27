import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createMuiTheme({
    palette: {
	primary: {
	    light: purple[300],
	    main: purple[500],
	    dark: purple[700],
	},
	secondary: {
	    light: purple[300],
	    main: purple[500],
	    dark: purple[700],
	},
    },
    typography: {
	useNextVariants: true,
    },
});

function withRoot(Component) {
    function WithRoot(props) {
	return (
	    <MuiThemeProvider theme={theme}>
	      <CssBaseline />
	      <Component {...props} />
	    </MuiThemeProvider>
	);
    }
    return WithRoot;
}

export default withRoot;
