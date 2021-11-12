import * as React from "react";
import { CssBaseline, Box, Grid, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { HomeOutlined, AssignmentOutlined, AssessmentOutlined, ListAltOutlined } from "@mui/icons-material";

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
  </div>
);

function AuthLayout({children}) {
  const mdTheme = createTheme({
    palette: {
      mode: 'dark',
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

  return (
    <ThemeProvider theme={mdTheme}>  
      <CssBaseline />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[900],
          flex: 1,
          overflow: 'auto',
          height: '100vh',
        }}
      >
          <Grid container style={{justifyContent: 'center', alignContent: 'center', height: '80%'}}>
            {children}
          </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default AuthLayout;
