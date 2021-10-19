import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
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





import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FolderIcon from '@mui/icons-material/Folder';


const Home = () =>  
  <div>
    <List>
      <ListItem sx={{mt: 1 , mb: 1 , bgcolor: blue[100] }}>
      <ListItemAvatar>
        <Avatar sx={{bgcolor: red[500] }}>
            <AssignmentIcon />
        </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
         
            <Grid container>
              <Grid>              
                <Typography gutterBottom variant="h6" component="div">
                  Indicador 1
                </Typography>
              </Grid>
              <Grid>
                <Typography gutterBottom component="div">
                  Valor y Metrica
                </Typography>
              </Grid>
              <Grid>
                <Typography gutterBottom component="div">
                  Explicacion de lo que es el indicador, para que sirve o lo que sea que quieran agregarle en detalles.
                </Typography>
              </Grid>
              <Grid>
                  <Button variant="outline-primary" startIcon={<DeleteIcon/>}>
                  </Button>
      
              </Grid>
            </Grid>
          } 
          secondary="9 de Septiembre de 2021" />
      </ListItem>
      
      <Divider variant="inset" component="li" />
      
      <ListItem sx={{mt: 1 , mb: 1 , bgcolor: yellow[100] }}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: yellow[500] }}>
            <AssignmentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3} >
              <Typography gutterBottom variant="h6" component="div">
                Indicador 2
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography gutterBottom component="div">
                Valor y Metrica
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography gutterBottom component="div">
                Explicacion de lo que es el indicador, para que sirve o lo que sea que quieran agregarle en detalles.
              </Typography>
            </Grid>
          </Grid>
          } 
          secondary="2 de Agosto de 2021" />
      </ListItem>

      <Divider variant="inset" component="li" />
      
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: green[500] }}>
            <AssignmentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3} >
              <Typography gutterBottom variant="h6" component="div">
                Indicador 3
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography gutterBottom component="div">
                Valor y Metrica
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography gutterBottom component="div">
                Explicacion de lo que es el indicador, para que sirve o lo que sea que quieran agregarle en detalles.
              </Typography>
            </Grid>
          </Grid>
          } 
          secondary="9 de Mayo de 2021" />
      </ListItem>
    </List>
    <Stack direction="column" alignItems="center" spacing={2} >
      <Stack direction="row"  spacing={12} >
        <Button variant="outlined" startIcon={<AddIcon />} component={Link} to="/add-indicadtor">
          Agregar
        </Button>
        <Button variant="outlined" startIcon={<AddIcon />} component={Link} to="/add-indicadtor">
          Borrar
        </Button>
      
      </Stack>  
    </Stack>  

  </div>

export default Home