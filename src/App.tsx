import React from 'react';
import './App.css';
import Router from './router';
import {createTheme, Theme, ThemeProvider} from "@mui/material";
import {lightModePalette, myBreakpoints, typographyProperties} from "./helpers/constants/themeConstant";

const App = () => {
    const theme = React.useMemo<Theme>(() =>
            createTheme({
                palette: lightModePalette,
                typography: typographyProperties,
                breakpoints: myBreakpoints
            })
        , [])
    return (
        <ThemeProvider theme={theme}>
            <Router/>
        </ThemeProvider>
    );
}

export default App;
