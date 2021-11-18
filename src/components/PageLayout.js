import * as React from "react";
import { Switch, CssBaseline, Box, Container, Toolbar, IconButton, Typography, Badge, Divider, List, Grid, ListItem, ListItemIcon, ListItemText, Chip, Avatar } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { Menu, ChevronLeft, Notifications, HomeOutlined, AssignmentOutlined, AssessmentOutlined, CategoryOutlined, LoginOutlined, ListAltOutlined } from "@mui/icons-material";
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#1976D2',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/inicio">
      <ListItemIcon>
        <HomeOutlined/>
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>


    <ListItem button component={Link} to="/muestras">
      <ListItemIcon>
        <ListAltOutlined/>
      </ListItemIcon>
      <ListItemText primary="Muestras" />
    </ListItem>

    <ListItem button component={Link} to="/indicadores">
      <ListItemIcon>
        <AssignmentOutlined/>
      </ListItemIcon>
      <ListItemText primary="Indicadores" />
    </ListItem>
     
    <ListItem button component={Link} to="/reportes">
      <ListItemIcon>
        <AssessmentOutlined />
      </ListItemIcon>
      <ListItemText primary="Reportes"/>
    </ListItem>
     
     <ListItem button component={Link} to="/areas">
       <ListItemIcon>
         <CategoryOutlined />
       </ListItemIcon>
       <ListItemText primary="Areas"/>
     </ListItem>
  </div>
);

function PageLayout({children}) {
  const [open, setOpen] = React.useState(true);
  const [theme, setTheme] = React.useState('dark');

  const history = useHistory();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const mdTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  
  mdTheme.typography.h4 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [mdTheme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
    color: mdTheme.palette.mode === 'dark' ?  'white' : '#3576cb'
  };
  
  const handleTheme = () => {
    setTheme(mdTheme.palette.mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <Menu />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
          </Typography>

          <Chip avatar={<Avatar>M</Avatar>} label="Nombre empresa" style={{color: 'white'}}/>

          <MaterialUISwitch sx={{ m: 1 }} defaultChecked onClick={handleTheme} />

          <IconButton size="large" color="inherit" component={Link} to="/notificaciones">
            <Badge badgeContent={4} color="secondary">
              <Notifications fontSize="inherit"/>
            </Badge>
          </IconButton>
          
          <IconButton size="large" color="inherit" component={Link} to="/inicio-sesion"> {/* TODO: logout */}
              <LoginOutlined fontSize="inherit"/>
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: [1],
          }}
        >
          {open ? 
            <IconButton onClick={() => {history.push("/inicio");}}> 
              <img src={mdTheme.palette.mode === 'dark' ? require('../assets/images').deresLogoBlack : require('../assets/images').deresLogo} alt="DERES logo" width={150} />
            </IconButton>
          : null}
          <IconButton onClick={toggleDrawer}>
            <ChevronLeft />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List></List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container >
          {children}
            
          </Grid>
        </Container>
      </Box>
    </Box>
  </ThemeProvider>
  </LocalizationProvider>
  );
}

export default PageLayout;
