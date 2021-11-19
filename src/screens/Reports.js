import React, { useState } from "react";
import {
  TextField,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Paper,
  Button,
} from "@mui/material/";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { sub } from "date-fns";
import LineChart from "../components/LineChart";
import { useIndicators } from "../hooks";

export const dataexample = [
  {
    year: 1993, tvNews: 19, church: 29, military: 32,
  }, {
    year: 1995, tvNews: 13, church: 32, military: 33,
  }, {
    year: 1997, tvNews: 14, church: 35, military: 30,
  }, {
    year: 1999, tvNews: 13, church: 32, military: 34,
  }, {
    year: 2001, tvNews: 15, church: 28, military: 32,
  }, {
    year: 2003, tvNews: 16, church: 27, military: 48,
  }, {
    year: 2006, tvNews: 12, church: 28, military: 41,
  }, {
    year: 2008, tvNews: 11, church: 26, military: 45,
  }, {
    year: 2010, tvNews: 10, church: 25, military: 44,
  }, {
    year: 2012, tvNews: 11, church: 25, military: 43,
  }, {
    year: 2014, tvNews: 10, church: 25, military: 39,
  }, {
    year: 2016, tvNews: 8, church: 20, military: 41,
  }, {
    year: 2018, tvNews: 10, church: 20, military: 43,
  },
];

const Reports = () => {
  const [indicators] = useIndicators();
  const [formStates, setFormState] = useState([
    {
      indicatorId: null,
      indicatorName: null,
      from: sub(new Date(), "years"),
      to: new Date(),
    },
  ]);
  return (
    <Grid container rowSpacing={3}>
      <h2>Reportes</h2>
      {formStates.map((formState, idx) => {
        return (
          <Grid item xs={12} key={idx}>
            <Grid container rowSpacing={1} columnSpacing={2}>
              <Grid item xs={3}>
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
                    value={formState.indicatorId || ""}
                    fullWidth
                    onChange={(event, { props }) => {
                      formStates[idx] = {
                        ...formState,
                        indicatorId: props.value,
                        indicatorName: props.children,
                      };
                      setFormState([...formStates]);
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
              <Grid item xs={3}>
                <FormControl variant="standard" fullWidth>
                  <DesktopDatePicker
                    label="Desde"
                    inputFormat="MM/dd/yyyy"
                    value={formState.from}
                    onChange={(date) => {
                      formStates[idx] = {
                        ...formState,
                        from: date,
                      };
                      setFormState([...formStates]);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl variant="standard" fullWidth>
                  <DesktopDatePicker
                    label="Hasta"
                    inputFormat="MM/dd/yyyy"
                    value={formState.to}
                    onChange={(date) => {
                      formStates[idx] = {
                        ...formState,
                        from: date,
                      };
                      setFormState([...formStates]);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                {idx === 0 && (
                  <Button
                    autoFocus
                    onClick={() => {
                      setFormState([
                        ...formStates,
                        {
                          indicatorId: null,
                          indicatorName: null,
                          from: sub(new Date(), "years"),
                          to: new Date(),
                        },
                      ]);
                    }}
                  >
                    Add new
                  </Button>
                )}
                {idx !== 0 && (
                  <Button
                    autoFocus
                    onClick={() => {
                      formStates.pop();
                      setFormState([...formStates]);
                    }}
                  >
                    Remove
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        );
      })}

      <Grid item xs={12}>
        <Paper>
          <LineChart data={dataexample}></LineChart>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Reports;
