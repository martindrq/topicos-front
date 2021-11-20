import React, { useEffect, useState } from "react";
import {
  TextField,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Paper,
  Button,
  Typography
} from "@mui/material/";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {
  sub,
  format,
  compareAsc,
  add,
  closestIndexTo,
  parseISO,
} from "date-fns";
import { Line } from "react-chartjs-2";

import { useIndicators, useReports } from "../hooks";

const Reports = () => {
  const [bseIndicatorsData] = useIndicators();
  const [report, loadingNewReport, generateReport] = useReports();

  const colors = [
    "rgb(168, 115, 244)",
    "rgb(13, 20, 142)",
    "rgb(170, 234, 29)",
    "rgb(224, 132, 0)",
    "rgb(157, 34, 105)",
    "rgb(42, 187, 255)",
    "rgb(70, 93, 250)",
    "rgb(173, 113, 217)",
    "rgb(227, 106, 67)",
    "rgb(56, 96, 99)",
    "rgb(101, 39, 83)",
    "rgb(146, 104, 191)",
    "rgb(203, 9, 160)",
    "rgb(171, 69, 9)",
    "rgb(241, 154, 208)",
    "rgb(20, 80, 249)",
    "rgb(207, 116, 150)",
    "rgb(60, 6, 76)",
    "rgb(34, 116, 227)",
    "rgb(174, 14, 227)",
    "rgb(131, 201, 44)",
    "rgb(217, 78, 253)",
    "rgb(241, 134, 76)",
    "rgb(170, 68, 192)",
    "rgb(135, 68, 139)",
    "rgb(196, 229, 5)",
    "rgb(73, 254, 222)",
  ];

  const [dateRange, setDateRange] = useState({
    from: sub(new Date(), { years: 1 }),
    to: new Date(),
  });

  const [indicators, setIndicators] = useState([
    {
      indicatorId: null,
      indicatorName: null,
    },
  ]);

  useEffect(() => {
    const completedFields = indicators
      .filter((indicator) => indicator.indicatorId !== null)
      .map((indicator) => indicator.indicatorId);
    if (completedFields.length > 0) {
      generateReport(
        completedFields,
        format(dateRange.from, "yyyy-MM-dd"),
        format(dateRange.to, "yyyy-MM-dd")
      );
    }
  }, [indicators, dateRange]);

  const options = {
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          id: "y-axis-1"
        }
      ],
    },
  };

  const buildChartLabel = () => {
    const labels = [format(dateRange.from, "MM-yyyy")];
    const rangeDates = [dateRange.from];
    let lastDate = dateRange.from;
    while (compareAsc(lastDate, dateRange.to) <= 0) {
      lastDate = add(lastDate, { months: 1 });
      labels.push(format(lastDate, "MM-yyyy"));
      rangeDates.push(lastDate);
    }
    return [labels, rangeDates];
  };

  const buildChartData = (rangeDates, indicatorsValue) => {
    const data = [];
    indicatorsValue.forEach((r) => {
      const date = parseISO(r.date);
      const index = closestIndexTo(date, rangeDates);
      data[index] = r.value;
    });
    return data;
  };

  const [labels, rangeDates] = buildChartLabel();

  const data = {
    labels: labels,
    datasets:
      report.length > 0 &&
      report.map((reportEntry, idx) => {
        return {
          label: reportEntry[0].indicator.name,
          data: buildChartData(rangeDates, reportEntry),
          fill: false,
          backgroundColor: colors[idx],
          borderColor: colors[idx],
          yAxisID: "y-axis-1",
        };
      }),
  };

  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
            Reportes
        </Typography>
      </Grid>
      {indicators.map((indicator, idx) => {
        return (
          <Grid item xs={12} key={idx}>
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
                    value={indicator.indicatorId || ""}
                    fullWidth
                    onChange={(event, { props }) => {
                      indicators[idx] = {
                        indicatorId: props.value,
                        indicatorName: props.children,
                      };
                      setIndicators([...indicators]);
                    }}
                    label="Indicador"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {bseIndicatorsData.map((indicator) => (
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
                    value={dateRange.from}
                    onChange={(date) => {
                      setDateRange({
                        ...dateRange,
                        from: date,
                      });
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
                    value={dateRange.to}
                    onChange={(date) => {
                      setDateRange({
                        ...dateRange,
                        to: date,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                {idx === 0 && (
                  <Button
                    fullWidth
                    autoFocus
                    onClick={() => {
                      setIndicators([
                        ...indicators,
                        {
                          indicatorId: null,
                          indicatorName: null,
                        },
                      ]);
                    }}
                  >
                    Add new
                  </Button>
                )}
                {idx !== 0 && (
                  <Button
                    fullWidth
                    autoFocus
                    onClick={() => {
                      indicators.pop();
                      setIndicators([...indicators]);
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
        {(report.length > 0 && !loadingNewReport) && (
          <Paper>
            <Line data={data} options={options} />
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default Reports;
