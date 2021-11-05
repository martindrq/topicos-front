import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
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
        <Typography variant="h4">
          Indicadores
        </Typography>
        <Table columns={columns} rows={rows}/>
      </Grid>
    </Grid>
  );
}
export default Indicators
