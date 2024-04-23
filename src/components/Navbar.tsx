// import { Box, IconButton } from '@mui/material';
// import { useContext } from 'react';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import Avatar from '@mui/material/Avatar';
// import { ThemeContext } from '../pages/theme';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// function Navbar() {
//   const { theme: currentTheme, setTheme } = useContext(ThemeContext);

//   const toggleTheme = () => {
//     const newTheme = currentTheme.mode === 'light' ? 'dark' : 'light';
//     setTheme(tokens(newTheme));
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         minHeight: '100vh',
//         padding: '1rem',
//       }}
//     >
//       <div>
//         <IconButton>
//           <NotificationsOutlinedIcon />
//         </IconButton>
//       </div>
//       <div>
//         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       </div>
//       <div>
//         <IconButton onClick={toggleTheme}>
//           {currentTheme.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
//         </IconButton>
//       </div>
//     </Box>
//   );
// }

// export default Navbar;
