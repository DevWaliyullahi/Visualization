// import { createContext, useState, useMemo } from "react";
// import { createTheme } from '@mui/material/styles';
// import { Box } from "@mui/material";

// export const tokens = (mode: 'light' | 'dark') => ({
//     mode,
//     colors: {
//         primary: mode === 'light' ? '#000' : '#fff',
//         secondary: mode === 'light' ? '#fff' : '#000',
//     },
// });

// export const ThemeContext = createContext({
//     theme: tokens('light'),
//     setTheme: (theme: any) => {},
// });

// export const ThemeProvider = ({ children }: any) => {
//     const [theme, setTheme] = useState(tokens('light'));

//     const muiTheme = useMemo(() => createTheme({
//         palette: {
//             mode: theme.mode,
//             primary: {
//                 main: theme.colors.primary,
//             },
//             secondary: {
//                 main: theme.colors.secondary,
//             },
//         },
//     }), [theme]);

//     return (
//         <ThemeContext.Provider value={{ theme, setTheme }}>
//             <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
//                 {children}
//             </Box>
//         </ThemeContext.Provider>
//     );
// };