import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Tooltip, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import {useIndicators} from "../hooks";
import Table from '../components/Table';

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 170 },
  {
    id: 'description',
    label: 'Descripcion',
    minWidth: 170,
  },
  {
    id: 'frequency',
    label: 'Frecuencia',
    minWidth: 170,
  },
  {
    id: 'area',
    label: 'Area',
    minWidth: 170,
  },
  {
    id: 'type',
    label: 'Tipo',
    minWidth: 170,
  },
  {
    id: 'unit',
    label: 'Unidad',
    minWidth: 100,
  },
];

const Indicators = () => {

  const [indicators] = useIndicators();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(indicators.map(indicator => ({...indicator, area: indicator.area.name})))
  }, [indicators])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Indicadores
        </Typography>
        <Table columns={columns} rows={rows}/>
      </Grid>
      <Paper sx={{ position: "fixed", bottom: 0, right: 0}} elevation={0} >
      <Tooltip title="Agregar" placement="right">  
        <Fab sx={{ position: 'absolute', bottom: 40, right: 50 }} color="primary" aria-label="add" component={Link} to="/indicadores/crear">
          <Add/>
        </Fab>
      </Tooltip>
    </Paper>
    </Grid>
  );
}
export default Indicators
