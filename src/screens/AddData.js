import * as React from "react";
import { useState } from "react";
import {useIndicators} from "../hooks";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {Assignment} from "@mui/icons-material";

function AddData() {
  const [formState, setFormState] = useState({});
  const [indicators] = useIndicators();

  const handleSubmit = () => {
    console.log("About to sumit", formState)
  };

  const handleChange = (event) => {
    console.log(event)
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleDate = (date) => {
    setFormState({
      ...formState,
      date: date.toISOString()
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2><Assignment/>Agregar datos </h2>
        <h5>Agregar datos referenciados a un indicador</h5>
      </Grid>

      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={12}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
              <InputLabel id="indicator">Indicador</InputLabel>
              <Select
                labelId="indicator"
                id="indicator"
                name="indicator"
                value={formState.indicator || ""}
                autoWidth
                onChange={handleChange}
                label="Indicador"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  indicators.map(indicator => (
                      <MenuItem value={indicator.id}>{indicator.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
              <DesktopDatePicker
                label="Fecha del dato"
                inputFormat="MM/dd/yyyy"
                onChange={handleDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
              <TextField
                required
                fullWidth
                value={formState.value || ""}
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
            fullWidth
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Agregar dato
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddData;
