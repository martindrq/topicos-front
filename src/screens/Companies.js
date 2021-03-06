import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Tooltip, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';

import { useCompanies, useUserContext } from "../hooks";
import Table from '../components/Table';
import Notification from '../components/Notification';

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 170 },
];

const Companies = () => {

  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [errorText, setErrorText] = useState('');

  const {user} = useUserContext();
  const [companies,,, deleteCompany] = useCompanies(user?.token, setLoading);
  const history = useHistory();
  
  useEffect(() => {
    setRows(companies)
  }, [companies])

  const onEdit = (itemId) => {
    const item = rows.find(item => item.id === itemId)
    history.push('/empresas/editar', { isEdit: true, item, })
  }

  const onDelete = async (item) => {
    try{
      await deleteCompany({ id: item })
    } catch(err) {
      setErrorText(err.message)
    }
  }

  return (
    <Grid container spacing={2}>
      {errorText !== '' ? <Notification text={errorText} setText={setErrorText} /> : null}
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Empresas
        </Typography>
        <Table columns={columns} rows={rows} onEdit={onEdit} onDelete={onDelete} loadingData={loading} />
      </Grid>
      <Paper sx={{ position: "fixed", bottom: 0, right: 0}} elevation={0} >
        <Tooltip title="Agregar" placement="right">  
          <Fab sx={{ position: 'absolute', bottom: 40, right: 50 }} color="primary" aria-label="add" component={Link} to="/empresas/crear">
            <Add/>
          </Fab>
        </Tooltip>
      </Paper>
    </Grid>
  );
}
export default Companies
