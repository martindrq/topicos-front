import * as React from "react";
import PageLayout from "./components/PageLayout";
import Grid from '@mui/material/Grid';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

//to-do add react router, and import components from /screens
import Home from './screens/Home';
import CreateIndicator from './screens/CreateIndicator';

import Box from '@mui/material/Box';

import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (

      <BrowserRouter>
        <PageLayout>
          <Box sx={{ flexGrow:1 }}>
            <Grid item xs={12} md={12} lg={12}>
              <Route path="/" render={() => <Redirect to="/inicio"/>} />
              <Route path="/inicio" component={Home} exact/>
              <Route path="/indicador/crear" component={CreateIndicator} exact/>
            </Grid>
          </Box>
        </PageLayout>
      
      </BrowserRouter>
  );
}

export default App;
