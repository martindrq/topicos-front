import React, { useState } from 'react';
import {TextField, Grid, FormControl, InputLabel, MenuItem, Select, Typography, Button} from '@mui/material/';
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useHistory } from 'react-router-dom'

import { useIndicators, useUserContext } from "../hooks";

function CreateEditSample ({ location }) {
  const isEdit = location?.state?.isEdit || false
  const item = location?.state?.item
  const indicatorId = location?.state?.item?.indicator?.id

  const {user} = useUserContext();
  const [indicators,,, addIndicatorValue,, editIndicatorValue] = useIndicators(user?.token);
  const history = useHistory();

  const [formState, setFormState] = useState({
    indicatorId: item?.indicator?.id || '',
    value: item?.value || '',
  });
  const [date, setDate] = useState( item?.date ? item.date : new Date().toISOString());
  const [disabledValue, setDisabledValue] = useState(item?.indicator?.type === "D" ? false : true);
  const [selectedIndicator, setSelectedIndicator] = useState();

  const handleSubmit = async () => {
    if (isEdit) {
      await editIndicatorValue({
          ...formState,
          id: item.id,
          indicatorId,
          date,
      })
    } else {
        let variables = {
          ...formState,
          companyId: user?.company.id
        }
        if (!formState.date) {
          variables = {...variables, date}
        }
        await addIndicatorValue(variables)
    } 
    history.goBack()
  };

  const handleChange = (event) => {
    if (event.target.name === "indicatorId") {
      setSelectedIndicator(event.target.value)
      if (event.target.value.type === 'I') {
        setDisabledValue(true)
      } else {
        setDisabledValue(false)
      }
      setFormState({
        ...formState,
        [event.target.name]: event.target.value.id,
      });
    } else {
      setFormState({
        ...formState,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleDate = (date) => {
    setFormState({
      ...formState,
      date: date.toISOString(),
    });
    setDate(date.toISOString())
  };

  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <Typography variant="h4">
      {`${isEdit ? 'Editar' : 'Agregar'} muestra`}
      </Typography>
        <p>Agregar datos referenciados a un indicador</p>
      </Grid>

      <Grid item xs={12}>
        <Grid container rowSpacing={4}>
          {!indicatorId ? <Grid item xs={12} >
            <FormControl variant="standard" fullWidth>
              <InputLabel id="indicator">Indicador</InputLabel>
              <Select
                labelId="indicator"
                id="indicator"
                name="indicatorId"
                value={selectedIndicator}
                fullWidth
                onChange={handleChange}
                label="Indicador"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {indicators.map((indicator) => (
                  <MenuItem value={indicator}>{indicator.name}</MenuItem>
                ))}
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
                value={date}
              />
              {selectedIndicator?.type === 'I' || item?.type === 'I' ? <p style={{color: 'gray'}}>Deben existir muestras de los indicadores que lo componen para el mes seleccionado.</p> : null}
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl variant="standard" fullWidth sx={{ paddingLeft: "30px" }}>
              <TextField
                required
                fullWidth
                value={formState.value || ""}
                id="value"
                label={`Valor${selectedIndicator ? ` (${selectedIndicator.unit})` : ''}`}
                name="value"
                onChange={handleChange}
                autoComplete="off"
                disabled={disabledValue}
              />
              {selectedIndicator?.type === 'I' || item?.type === 'I' ? <p style={{color: 'gray'}}>Este campo se encuentra deshabilitado, ya que el valor es autocalculado.</p> : null}
            </FormControl>
          </Grid>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {`${isEdit ? 'Editar' : 'Agregar'} dato`}
          </Button>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}

export default CreateEditSample ;