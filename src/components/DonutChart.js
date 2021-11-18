import * as React from 'react';
import {
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { Grid } from '@mui/material';


const data = [
  { region: 'Africa', val: 1012956064 },
  { region: 'Northern America', val: 344124520 },
  { region: 'Latin America and the Caribbean', val: 590946440 },
];

export default class DonutChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    return (
      <Grid>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
            />
          <Animation />
        </Chart>
      </Grid>
    );
  }
}
