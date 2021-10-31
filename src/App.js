import * as React from "react";
import {Grid, Box} from '@mui/material';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

// screens
import Home from './screens/Home';
import CreateIndicator from './screens/CreateIndicator';
// components
import PageLayout from "./components/PageLayout";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import AddData from "./screens/AddData";
import Indicators from "./screens/Indicators";
import Samples from "./screens/Samples";



function App() {
  return (

      <BrowserRouter>
        <PageLayout>
          <Box sx={{ flexGrow:1 }}>
            <Grid item xs={12} md={12} lg={12}>
              <Route path="/" render={() => <Redirect to="/inicio"/>} />
              <Route path="/inicio" component={Home} exact/>
              <Route path="/inicio-sesion" component={Login} exact/>
              <Route path="/registro" component={Signup} exact/>
              <Route path="/indicadors" component={Indicators} exact/>
              <Route path="/indicadors/crear" component={CreateIndicator} exact/>
              <Route path="/muestras" component={Samples} exact/>
              <Route path="/datos" component={AddData} exact/>
            </Grid>
          </Box>
        </PageLayout>
      
      </BrowserRouter>
  );
}

export default App;
