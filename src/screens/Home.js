import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { blue, green, red, yellow } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";

import ButtonUnstyled from '@mui/core/ButtonUnstyled';



const Home = () =>  
  <div>
    <List>
    
      <ListItem sx={{mt: 2 , mb: 2}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container  spacing={2} alignItems="center">
            <Grid item xs={0}>
              <Avatar sx={{bgcolor: red[500]}}>
                <AssignmentIcon />
              </Avatar>
            </Grid>
            <Grid item xs={3}>
              <ListItemText primary="Consumo de agua superficial directa" secondary="10 de Octubre de 2021" />
            </Grid>
            <Grid item xs={2}>
              <Typography gutterBottom component="div">
                2500 L, m3 
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography gutterBottom component="div">
                Toma directa realizada por la empresa de un curso de agua
              </Typography>
            </Grid>
            <Grid item xs={1} >
              <Button variant="outlined" startIcon={<DeleteIcon/>} 
              onClick={() => console.log('Click Deleted!')}
              ></Button>
            </Grid>
          </Grid>
        </Box>
      </ListItem>
 
      <Divider variant="inset" component="li" />
      
      <ListItem sx={{mt: 2 , mb: 2}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={0}>
              <Avatar sx={{bgcolor: yellow[500]}}>
                <AssignmentIcon />
              </Avatar>
            </Grid>
            <Grid item xs={3}>
              <ListItemText primary="Consumo de agua superficial / Unidad de producto" secondary="9 de Septiembre de 2021" />
            </Grid>
            <Grid item xs={2}>
              <Typography gutterBottom component="div">
                2200 L/Unidad de producto
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography gutterBottom component="div">
                Explicacion de lo que es el indicador, para que sirve o lo que sea que quieran agregarle en detalles.
              </Typography>
            </Grid>
            <Grid item xs={1} >
              <Button variant="outlined" startIcon={<DeleteIcon/>}></Button>
            </Grid>
          </Grid>
        </Box>
      </ListItem>

      <Divider variant="inset" component="li" />
      
      <ListItem sx={{mt: 2 , mb: 2}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} alignItems="center" >
            <Grid item xs={0}>
              <Avatar sx={{bgcolor: green[500]}}>
                <AssignmentIcon />
              </Avatar>
            </Grid>
            <Grid item xs={3}>
              <ListItemText primary="Indicador 3" secondary="3 de Agosto de 2021" />
            </Grid>
            <Grid item xs={2}>
              <Typography gutterBottom component="div">
                Valor y Metrica
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography gutterBottom component="div">
                Explicacion de lo que es el indicador, para que sirve o lo que sea que quieran agregarle en detalles.
              </Typography>
            </Grid>
            <Grid item xs={1} >
              <Button variant="outlined" startIcon={<DeleteIcon/>}></Button>
            </Grid>
          </Grid>
        </Box>
      </ListItem>
    </List>

    <Stack direction="column" alignItems="center" spacing={2} >
      <Stack direction="row"  spacing={12} >
        <Button variant="outlined" startIcon={<AddIcon />} component={Link} to="/add-indicator">
           Agregar
        </Button>
      </Stack>  
    </Stack>  
  </div>

export default Home