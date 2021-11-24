import React, { useState } from 'react';
import {TextField, Grid, FormControl, InputLabel, MenuItem, Select, Typography, Button} from '@mui/material/';
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useHistory } from 'react-router-dom'

import { useIndicators, useUserContext } from "../hooks";
import Table from '../components/Table';

const columns = [
  { id: 'date', label: 'Fecha', minWidth: 170 },
  {
    id: 'value',
    label: `Valor`, // TODO: add unit
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
];

function CreateEditSample ({ location }) {
  const isEdit = location?.state?.isEdit || false
  const sampleId = location?.state?.sampleId
  const indicatorId = location?.state?.indicatorId

  const {user} = useUserContext();
  const history = useHistory()
  const [indicators, indicatorsValues,, addIndicatorValue,, editIndicatorValue] = useIndicators(user?.token);

  const [formState, setFormState] = useState({});
  const [rows, setRows] = useState([]);

  const handleSubmit = async () => {
    if (isEdit) {
      await editIndicatorValue({
          ...formState,
          id: sampleId,
          indicatorId,
          companyId: 1 // FIXME: add real companyId
      })
    } else {
        await addIndicatorValue({
          ...formState,
          companyId: 1 // FIXME: add real companyId
        })
    } 
    history.goBack()
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    setRows(indicatorsValues.filter(iv => iv.indicator_id === event.target.value))
  };

  const handleDate = (date) => {
    setFormState({
      ...formState,
      date: date.toISOString(),
    });
  };

  return (
    <>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h4">
        {`${isEdit ? 'Editar' : 'Agregar'} muestra`}
        </Typography>
  
        {isEdit ? 
        <Typography>
          Editar datos referenciados a un indicador
        </Typography>
        :
        <Typography>
          Agregar datos referenciados a un indicador
        </Typography>}
      </Grid>

      <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <Grid container rowSpacing={6}>
            {!indicatorId ? 
            <Grid item xs={12} >
              <FormControl variant="standard" fullWidth>
                <InputLabel id="indicator">Indicador</InputLabel>
                <Select labelId="indicator"
                  name="indicatorId"
                  value={formState.indicator}
                  onChange={handleChange}
                  required
                >
                  {indicators.map((indicator) => ( <MenuItem key={indicator.id} value={indicator.name}>{indicator.name}</MenuItem> ))}
                </Select>
              </FormControl>
            </Grid> : null}
            <Grid item xs={6}>
              <FormControl variant="standard" fullWidth>
                <DesktopDatePicker
                  label="Fecha del dato"
                  inputFormat="MM/dd/yyyy"
                  onChange={handleDate}
                  renderInput={(params) => <TextField {...params} required />}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl variant="standard" fullWidth sx={{ paddingLeft: "30px" }}>
                <TextField
                  type="number"
                  required
                  value={formState.value}
                  id="value"
                  label="Valor"
                  name="value"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </FormControl>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {`${isEdit ? 'Editar' : 'Agregar'} dato`}
            </Button>
          </Grid>
        </Grid>
      </form> 
    </Grid>
    {rows.length > 0 ? <Table columns={columns} rows={rows} /> : null}
    </>
  );
}

export default CreateEditSample ;
