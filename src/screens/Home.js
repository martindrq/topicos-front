import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { green, red, yellow } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { Link } from 'react-router-dom';

const Home = () =>  
  
  <div>
    <List>
      
      <ListItem>
      <ListItemAvatar>
          <Avatar sx={{ bgcolor: red[500] }}>
            <AssignmentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3} >
              <Typography gutterBottom variant="h6" component="div">
                Indicador 1
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography gutterBottom component="div">
                Valor
              </Typography>
            </Grid>
          </Grid>
          } 
          secondary="9 de Septiembre de 2021" />
      </ListItem>
      
      <Divider variant="inset" component="li" />
      
      <ListItem>
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
                Valor
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
                Valor
              </Typography>
            </Grid>
          </Grid>
          } 
          secondary="9 de Mayo de 2021" />
      </ListItem>
    </List>


    <Link to="/home">Go to Home this.home</Link>
      
  </div>

export default Home