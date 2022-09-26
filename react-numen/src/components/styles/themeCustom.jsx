import { createTheme } from "@mui/material/styles";

export const themeCustom = createTheme({
    palette: {
    primary: {
        light: "#757ce8",
        main: "#1e1e1e",
        dark: "#002884",
        contrastText: "#fff",
    },
    secondary: {
        light: "#ff7961",
        main: "#73fbfd",
        dark: "#73fbf2",
        contrastText: "#000",
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        },
    },
    });
