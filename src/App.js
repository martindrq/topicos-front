import * as React from "react";
import PageLayout from "./components/PageLayout";
import Grid from '@mui/material/Grid';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

//to-do add react router, and import components from /screens
import Home from './screens/Home';
import NotFound from './screens/NotFound';

function App() {
  return (

      <BrowserRouter>
      <PageLayout>
        <Grid item xs={12} md={12} lg={12}>
          <p>Hello material</p>
           
          <Route path="/home" component={Home} exact/>

          <Route path="/" render={() => <Redirect to="/home"/>} />
          
          <Route component={NotFound} />

        </Grid>  
      </PageLayout>

        
       
      </BrowserRouter>
      
  );
}

export default App;
