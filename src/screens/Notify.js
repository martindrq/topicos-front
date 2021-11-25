import React, { useState, useEffect } from 'react';
import {Grid, Typography} from '@mui/material/';
import {red} from '@mui/material/colors';

import {useNotify, useUserContext} from "../hooks";

import Table from '../components/Table';
import Notification from '../components/Notification';
import OutlinedNumber from '../components/OutlinedNumber'

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
    setRows(notifyIndicators.map(noti => ({...noti, name: noti?.indicator?.name, frequency: noti?.indicator?.frequency,  daysFromLast: noti?.daysFromLast, remainingDays: noti?.remainingDays < 0 ? <strong style={{color: red[600]}}>{`Debió registrarse hace ${noti?.remainingDays * -1} días`}</strong> : <OutlinedNumber number={noti?.remainingDays}/>}) ))
  }, [notifyIndicators])

  const [rows, setRows] = useState([]);
  const [errorText, setErrorText] = useState('');

  return (
    <Grid container spacing={2}>
      {errorText !== '' ? <Notification text={errorText} setText={setErrorText} /> : null}
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Recordatorios
        </Typography>
        <Table columns={columns} rows={rows} canEdit={false} canDelete={false} canSelect={false}/>
      </Grid>
    </Grid>
  );
}
export default Notify;