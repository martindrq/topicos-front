import React, { useState } from 'react';
import {ListItem, ListItemText, Avatar, Divider, Grid, Typography, Stack, Box, IconButton, Paper, Tooltip, Fab} from '@mui/material';
import {green, yellow, red, grey} from '@mui/material/colors';
import {Link } from 'react-router-dom';
import {Assignment, Add, Delete} from '@mui/icons-material';

import data from '../data.js'
       

  
const Home = () => {

  const [list, setList] = useState(data);
 
  const handleRemove = (id) => {
    const newList = list.filter((indicador) => indicador.id !== id);
    setList(newList);
  }

  const element = list.map( (indicador) => 
  <ListItem  key={indicador.id} sx={{mt: 2 , mb: 2}}>
    <Box sx={{ flexGrow: 1 }}>
    
      <Grid container  spacing={3} alignItems="center">
        <Grid item xs={0}>
          <Avatar sx={{bgcolor: grey[500]}}>
            <Assignment />
          </Avatar>
        </Grid>
        <Grid item xs={3}>
          <ListItemText primary={indicador.name} secondary={indicador.date} />
        </Grid>
        <Grid item xs={2}>
          <Typography gutterBottom component="div">
            {indicador.unit} 
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography gutterBottom component="div">
            {indicador.description}
          </Typography>
        </Grid>
        <Grid item xs={1} >
          <Tooltip title="Eliminar" placement="right">
            <IconButton color="primary" aria-label="Eliminar" onClick={() => handleRemove(indicador.id)}>
              <Delete/>
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Divider sx={{mt: 5 , mb: 2}}></Divider>
    </Box>
  </ListItem>
);

return (
  <div>
    <ListItem sx={{mt: 2 , mb: 2}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container alignItems="center">
            <Grid item xs={1/2}>
                <Typography>
                </Typography>
            </Grid>
            <Grid item xs={5/2}>
              <Typography variant="h6">
                Nombre y fecha
              </Typography>
            </Grid>
            <Grid item xs={9/2}>
              <Typography variant="h6">
                Unidad de medida
              </Typography>
            </Grid>
            <Grid item xs={0}>
              <Typography variant="h6">
                Descripción
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </ListItem>
    
    {element}

    <Paper sx={{ position: "fixed", bottom: 15, left: 1000, right: 1000 }} elevation={0} >
      <Stack direction="column" alignItems="center" spacing={2} >
        <Stack direction="row"  spacing={12} >
          <Tooltip title="Agregar" placement="right">  
            <Fab position="fixed" color="primary" aria-label="add" component={Link} to="/indicador/agregar">
              <Add/>
            </Fab>
          </Tooltip>
        </Stack>  
      </Stack>  
    </Paper>

    
  </div>);
}
export default Home