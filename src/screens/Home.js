import React, { useState } from 'react';
import {ListItem, Typography, Paper, Tooltip, Fab, List} from '@mui/material';
import {Link } from 'react-router-dom';
import {Add} from '@mui/icons-material';
import {useIndicators} from "../hooks";

  
const Home = () => {

return (
  <List>
    <ListItem sx={{mt: 2 , mb: 2}}>
              <Typography variant="h6">
                HOME
              </Typography>
      </ListItem>

    <Paper sx={{ position: "fixed", bottom: 0, right: 0}} elevation={0} >
      <Tooltip title="Agregar" placement="right">  
        <Fab sx={{ position: 'absolute', bottom: 40, right: 50 }} color="primary" aria-label="add" component={Link} to="#">
          <Add/>
        </Fab>
      </Tooltip>
    </Paper>
  </List>);
}

export default Home