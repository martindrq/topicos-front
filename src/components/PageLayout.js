import * as React from "react";
import {CssBaseline, Box, Container, Toolbar, IconButton, Typography, Badge, Divider, List, Grid, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import {Menu, ChevronLeft, Notifications, HomeOutlined, Assignment, AssessmentOutlined, LoginOutlined, PersonAddAltOutlined} from "@mui/icons-material";


const drawerWidth = 240;

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

const mdTheme = createTheme();

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/inicio">
      <ListItemIcon>
        <HomeOutlined/>
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>

    <ListItem button component={Link} to="/indicador">
      <ListItemIcon>
        <Assignment/>
      </ListItemIcon>
      <ListItemText primary="Indicadores" />
    </ListItem>
     
    <ListItem button component={Link} to="/reporte">
      <ListItemIcon>
        <AssessmentOutlined />
      </ListItemIcon>
      <ListItemText primary="Reportes"/>
    </ListItem>
  </div>
);

function PageLayout({children}) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
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

          <IconButton size="large" color="inherit" component={Link} to="/inicio-sesion">
              <LoginOutlined fontSize="inherit"/>
          </IconButton>

          <IconButton size="large" color="inherit" component={Link} to="/registro">

              <PersonAddAltOutlined fontSize="inherit" />
          </IconButton>

          <IconButton size="large" color="inherit" component={Link} to="/notificacion">
            <Badge badgeContent={4} color="secondary">
              <Notifications fontSize="inherit"/>
            </Badge>
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
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
  );
}

export default PageLayout;
