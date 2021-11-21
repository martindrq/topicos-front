import React, { useState, useEffect } from 'react';
import {Grid, Avatar, Typography} from '@mui/material/';

import {LooksOneOutlined, LooksTwoOutlined, Looks3Outlined, Looks4Outlined, Looks5Outlined, AllInclusive } from '@mui/icons-material';
import {green, orange, red, grey} from '@mui/material/colors';

import {useNotify} from "../hooks";

import Table from '../components/Table';
import Notification from '../components/Notification';

const columns = [
  { id: 'delay', label: 'Días restantes', minWidth: 0 },
  { id: 'name', label: 'Nombre', minWidth: 170 },
  { id: 'date', label: 'Última medición', minWidth: 170 },

];
  
const Notify = () => { 
  
  const [ notifyIndicators,] = useNotify();    //USAR este en vez de indicatorsValues
  
  useEffect(() => {
    setRows(notifyIndicators.map(value => ({...value, name: value?.indicator?.name, delay: statusColor(value?.delay)}) ))
  }, [notifyIndicators])

  const [rows, setRows] = useState([]);
  const [errorText, setErrorText] = useState('');

  const statusColor = ( days ) => {

    switch(days) {
      case 1:   
        return (
          <Grid>
            <Avatar sx={{bgcolor: red[600]}}>
              <LooksOneOutlined />
            </Avatar>
        </Grid> ); 
      case 2:   
        return (
          <Grid>
            <Avatar sx={{bgcolor: red[400]}}>
              <LooksTwoOutlined />
            </Avatar>
          </Grid> ); 
      case 3:   
        return (
          <Grid>
            <Avatar sx={{bgcolor: orange[300]}}>
              <Looks3Outlined />
            </Avatar>
        </Grid> ); 
      case 4:   
        return (
          <Grid>
            <Avatar sx={{bgcolor: green[400]}}>
              <Looks4Outlined />
            </Avatar>
        </Grid> ); 
      case 5:   
        return (
          <Grid>
            <Avatar sx={{bgcolor: green[600]}}>
              <Looks5Outlined />
            </Avatar>
        </Grid> );
      default:
        return (
          <Grid>
            <Avatar sx={{bgcolor: grey[600]}}>
              <AllInclusive />
            </Avatar>
        </Grid> );
    }
  }

  return (
    <Grid container spacing={2}>
      {errorText !== '' ? <Notification text={errorText} setText={setErrorText} /> : null}
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Recordaorios
        </Typography>
        <Table columns={columns} rows={rows} canEdit={false} canDelete={false} />
      </Grid>
    </Grid>
  );
}
export default Notify;