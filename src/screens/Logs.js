import React, { useState, useEffect } from 'react';
import {Grid, Typography} from '@mui/material/';

import {useLogs, useUserContext} from "../hooks";

import Table from '../components/Table';
import Notification from '../components/Notification';

const columns = [
  { id: 'email', label: 'Responsable', minWidth: 170 },
  { id: 'payload', label: 'Acción', minWidth: 170 },
  { id: 'date', label: 'Fecha', minWidth: 170 },
];
  
const Logs = () => { 
  
  const [loading, setLoading] = useState(false);

  const {user} = useUserContext();
  const [logs] = useLogs(user?.token, setLoading);
  
  useEffect(() => {
    setRows(logs.map(log => ({...log, date: log?.date?.split('T')[0]})))
  }, [logs])

  const [rows, setRows] = useState([]);
  const [errorText, setErrorText] = useState('');

  return (
    <Grid container spacing={2}>
      {errorText !== '' ? <Notification text={errorText} setText={setErrorText} /> : null}
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Logs
        </Typography>
        <Table columns={columns} rows={rows} canEdit={false} canDelete={false} canSelect={false} loadingData={loading}/>
      </Grid>
    </Grid>
  );
}
export default Logs;