import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Tooltip, Fab } from '@mui/material';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

import { useIndicators, useUserContext } from "../hooks";
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';
import indicatorsService from "../services/indicators";

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
  const [loading, setLoading] = useState(false);
  const [indicator, setIndicator] = useState();

  const {user} = useUserContext();
  const [indicators, indicatorsValues,,,,,, deleteIndicatorValue] = useIndicators(user?.token, setLoading);  
  const history = useHistory();
  
  useEffect(() => {
    setRows(indicatorsValues.map(value => ({...value, indicator: value?.indicator?.name, unit: value?.indicator?.unit, date: value?.date?.split('T')[0]})))
  }, [indicatorsValues])

  const onEdit = (itemId) => {
    const item = indicatorsValues.find(item => item.id === itemId)
    history.push('/muestras/editar', { isEdit: true, item, indicatorId: item?.id })
  }
  const onDelete = async (item) => {
    await deleteIndicatorValue({ id: item })
  }
  
  const onIndicatorChange = async () => {
    const response = await Promise.resolve(indicatorsService.getIndicatorsValues(user?.token, null, indicator ? indicator : null, null, null))
    setRows(response.data.map(value => ({...value, indicator: value?.indicator?.name, unit: value?.indicator?.unit, date: value?.date?.split('T')[0]})))
  }

  useEffect(() => {
    onIndicatorChange()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indicator])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Muestras
        </Typography>
        <SearchBar options={indicators} value={indicator} setValue={setIndicator}/>
        <Table columns={columns} rows={rows} onEdit={onEdit} onDelete={onDelete} loadingData={loading}/>
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
