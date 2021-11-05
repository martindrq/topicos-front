import React from 'react';
import {Grid, Typography, Paper, Tooltip, Fab} from '@mui/material';
import {Link} from 'react-router-dom';
import {Add} from '@mui/icons-material';
  
const Home = () => {

return (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h4">
        Home
      </Typography>
    </Grid>
    <Paper sx={{ position: "fixed", bottom: 0, right: 0}} elevation={0} >
      <Tooltip title="Agregar" placement="right">  
        <Fab sx={{ position: 'absolute', bottom: 40, right: 50 }} color="primary" aria-label="add" component={Link} to="#">
          <Add/>
        </Fab>
      </Tooltip>
    </Paper>
  </Grid>
  );
}

export default Home