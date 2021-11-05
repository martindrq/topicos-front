import * as React from "react";
import { useState } from "react";
import { useIndicators } from "../hooks";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { sub } from "date-fns";

import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { EventTracker } from "@devexpress/dx-react-chart";

const data = [
  { year: "1950", population: 2.525 },
  { year: "1960", population: 3.018 },
  { year: "1970", population: 3.682 },
  { year: "1980", population: 4.44 },
  { year: "1990", population: 5.31 },
  { year: "2000", population: 6.127 },
  { year: "2010", population: 6.93 },
];

const Reports = () => {
  const [indicators] = useIndicators();
  const [formState, setFormState] = useState({
    indicatorId: null,
    indicatorName: null,
    from: sub(new Date(), "years"),
    to: new Date(),
  });

  return (
    <Grid container rowSpacing={3}>
      <h2>Reportes</h2>
      <Grid item xs={12}>
        <Grid container rowSpacing={1} columnSpacing={2}>
          <Grid item xs={4}>
            <FormControl
              variant="standard"
              fullWidth
              sx={{ m: 1, minWidth: 220, paddingRight: "30px" }}
            >
              <InputLabel id="indicator">Indicador</InputLabel>
              <Select
                labelId="indicator"
                id="indicator"
                name="indicator"
                value={formState.indicator || ""}
                fullWidth
                onChange={(event, { props }) => {
                  setFormState({
                    ...formState,
                    indicatorId: props.value,
                    indicatorName: props.children
                  });
                }}
                label="Indicador"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {indicators.map((indicator) => (
                  <MenuItem value={indicator.id}>{indicator.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="standard" fullWidth>
              <DesktopDatePicker
                label="Desde"
                inputFormat="MM/dd/yyyy"
                value={formState.from}
                onChange={(date) =>
                  setFormState({
                    ...formState,
                    from: date,
                  })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="standard" fullWidth>
              <DesktopDatePicker
                label="Hasta"
                inputFormat="MM/dd/yyyy"
                value={formState.to}
                onChange={(date) =>
                  setFormState({
                    ...formState,
                    to: date,
                  })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Chart data={data}>
            <ArgumentAxis />
            <ValueAxis />
            <BarSeries valueField="population" argumentField="year" />
            <Title text={formState.indicatorName} />
            <EventTracker />
            <Tooltip />
          </Chart>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Reports;
