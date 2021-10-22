import * as React from "react";
import {Grid, Box} from '@mui/material';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './screens/Home';
import CreateIndicator from './screens/CreateIndicator';
import PageLayout from "./components/PageLayout";
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
              <Route path="/inicio-sesion" component={Login} exact/>
              <Route path="/registro" component={Signup} exact/>
              <Route path="/indicador/crear" component={CreateIndicator} exact/>
            </Grid>
          </Box>
        </PageLayout>
      
      </BrowserRouter>
  );
}

export default App;
