import * as React from "react";
import PageLayout from "./components/PageLayout";
import Grid from '@mui/material/Grid';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

//to-do add react router, and import components from /screens
import Home from './screens/Home';
import NotFound from './screens/NotFound';

import Box from '@mui/material/Box';
//
//  <Route component={NotFound} />
//  <Route path="/" render={() => <Redirect to="/home"/>} />
//  <Route path="/home" component={Home} exact/>

function App() {
  return (

      <BrowserRouter>
        <PageLayout>
          <Box sx={{ flexGrow:1 }}>
            <Grid item xs={12} md={12} lg={12}>
              <Route path="/" render={() => <Redirect to="/home"/>} />
              <Route path="/home" component={Home} exact/>
            </Grid>
          </Box>
        </PageLayout>
      
      </BrowserRouter>
  );
}

export default App;
