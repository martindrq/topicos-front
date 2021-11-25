import React, { useState, useEffect } from 'react';
import {Grid, Avatar, Typography} from '@mui/material/';

import {LooksOneOutlined, LooksTwoOutlined, Looks3Outlined, Looks4Outlined, Looks5Outlined, AllInclusive } from '@mui/icons-material';
import {green, orange, red} from '@mui/material/colors';

import {useNotify, useUserContext} from "../hooks";

import Table from '../components/Table';
import Notification from '../components/Notification';

const columns = [
  { id: 'name', label: 'Indicador', minWidth: 170 },
  { id: 'frequency', label: 'Frecuencia (meses)', minWidth: 170 },
  { id: 'remainingDays', label: 'Días restantes', minWidth: 170 },
  { id: 'daysFromLast', label: 'Días desde la última medición', minWidth: 170 },
];
  
const Notify = () => { 
  
  const {user} = useUserContext();
  const [notifyIndicators] = useNotify(user?.token);
  
  useEffect(() => {
    setRows(notifyIndicators.map(noti => ({...noti, name: noti?.indicator?.name, frequency: noti?.indicator?.frequency,  daysFromLast: noti?.daysFromLast, remainingDays: statusColor(noti?.remainingDays)}) ))
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
          return days < 0 ? <p style={{color: 'red'}}>{`Debió registrarse hace ${days * -1} días`}</p> : 
          <Grid>
            <Avatar sx={{bgcolor: green[600]}}>
              {days}
            </Avatar>
          </Grid>
    }
  }

  return (
    <Grid container spacing={2}>
      {errorText !== '' ? <Notification text={errorText} setText={setErrorText} /> : null}
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Recordatorios
        </Typography>
        <Table columns={columns} rows={rows} canEdit={false} canDelete={false} />
      </Grid>
    </Grid>
  );
}
export default Notify;