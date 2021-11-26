import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Tooltip, Fab } from '@mui/material';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

import { useIndicators, useUserContext } from "../hooks";
import Table from '../components/Table';

const columns = [
  { 
    id: 'indicator', 
    label: 'Indicador', 
    minWidth: 170,
  },
  {
    id: 'value',
    label: 'Valor',
    minWidth: 170,
  },
  {
    id: 'unit',
    label: 'Unidad',
    minWidth: 170,
  },
  {
    id: 'date',
    label: 'Fecha',
    minWidth: 170,
  },
];

const Samples = () => {

  const [rows, setRows] = useState([]);
  
  const {user} = useUserContext();
  const [, indicatorsValues,,,,,, deleteIndicatorValue] = useIndicators(user?.token);  
  const history = useHistory();
  
  useEffect(() => {
    setRows(indicatorsValues.map(value => ({...value, indicator: value?.indicator?.name, unit: value?.indicator?.unit, date: value?.date?.split('T')[0]})))
  }, [indicatorsValues])

  const onEdit = (item) => {
    history.push('/muestras/editar', { isEdit: true, sampleId: item, indicatorId: indicatorsValues.find(iv => iv.id === item)?.indicator?.id })
  }

  const onDelete = async (item) => {
    await deleteIndicatorValue({ id: item })
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Muestras
        </Typography>
        <Table columns={columns} rows={rows} onEdit={onEdit} onDelete={onDelete} />
      </Grid>
      <Paper sx={{ position: "fixed", bottom: 0, right: 0}} elevation={0} >
        <Tooltip title="Agregar" placement="right">  
          <Fab sx={{ position: 'absolute', bottom: 40, right: 50 }} color="primary" aria-label="add" component={Link} to="/muestras/agregar">
            <Add/>
          </Fab>
        </Tooltip>
      </Paper>
    </Grid>
  );
}
export default Samples
