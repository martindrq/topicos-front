import React, { useState } from 'react';
import {ListItem, ListItemText, Avatar, Divider, Grid, Typography, Stack, Box, IconButton, Paper, Tooltip, Fab, List, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import {green, yellow, red, grey} from '@mui/material/colors';
import {Link } from 'react-router-dom';
import {Assignment, Add, Delete, ExpandMore} from '@mui/icons-material';
import {useIndicators} from "../hooks";

import data from '../mock-data/samples.json'
import indicators from '../mock-data/indicators.json'

const Samples = () => {

  //const [indicators] = useIndicators();
  const [list, setList] = useState(data);

  const [listIndicators] = useState(indicators);

  const getIndicatorId = (id) => {
    const indicatorId = listIndicators.filter((indicator) => indicator.id === id);
    console.log(indicatorId);
    return indicatorId;
  }

  
  const handleRemove = (id) => {
    const newList = list.filter((sample) => sample.id !== id);
    setList(newList);
  }

  const element = list.map( (sample) => 

  
  <ListItem  key={sample.id} sx={{mt: 1 , mb: 1}}>
    <Accordion style={{height:"100%", width:"100%", backgroundColor: '#f3f3f3'}} >
        <AccordionSummary
          expandIcon={<ExpandMore />}
        >
          <Grid item xs={1}>
          <Avatar sx={{bgcolor: grey[500]}}>
            <Assignment />
          </Avatar>
          </Grid>
          <Grid item xs={8}>
            <ListItemText primary={ getIndicatorId(sample.indicator_id)[0].name} secondary={sample.date} />
          </Grid>
          <Grid item xs={4}>
              <Typography gutterBottom component="div">
              Valor: {sample.value} {getIndicatorId(sample.indicator_id)[0].unit}
              </Typography>
            </Grid>
        </AccordionSummary>

        <AccordionDetails>
          <Grid container spacing={2} justifyContent="space-between" >
            <Grid item xs={12}>
              <Typography gutterBottom component="div">
              Descripción del indicador:  {getIndicatorId(sample.indicator_id)[0].description}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography gutterBottom component="div">
              Tipo de formula:  {getIndicatorId(sample.indicator_id)[0].type}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography gutterBottom component="div">
              Formula:
              </Typography>
            </Grid>
            <Grid item xs={0}  >
              <Tooltip title="Eliminar" placement="right">
                <IconButton color="primary" aria-label="Eliminar" onClick={() => handleRemove(sample.id)}>
                  <Delete/>
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

    
      <Divider sx={{mt: 5 , mb: 2}}></Divider>
 
  </ListItem>
);

return (
 
  <List sx={{mt: 2 , mb: 2}}>
    <ListItem row >
      <Typography variant="h6">
        Muestras
      </Typography>
    </ListItem>
    
    {element}

    <Paper sx={{ position: "fixed", bottom: 0, right: 0}} elevation={0} >
      <Tooltip title="Agregar" placement="right">  
        <Fab sx={{ position: 'absolute', bottom: 20, right: 20 }} color="primary" aria-label="add" component={Link} to="/indicador/crear">
          <Add/>
        </Fab>
      </Tooltip>
    </Paper>
  </List>);
}
export default Samples
