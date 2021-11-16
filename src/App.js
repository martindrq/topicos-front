import * as React from "react";
import {Grid, Box} from '@mui/material';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

// screens
import Home from './screens/Home';
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Reports from "./screens/Reports";
import Samples from "./screens/Samples";
import AddSample from "./screens/AddSample";
import Indicators from "./screens/Indicators";
import CreateIndicator from './screens/CreateIndicator';
import Areas from './screens/Areas';
import CreateEditArea from './screens/CreateEditArea';

// components
import PageLayout from "./components/PageLayout";
import AuthLayout from "./components/AuthLayout";

function App() {
  const [loggedIn, /*setLoggedIn*/ ] = React.useState(true)

  // TODO: use setLoggedIn after logged in

  return (
      <BrowserRouter>
        {loggedIn ? 
        <PageLayout>
          <Box sx={{ flexGrow:1 }}>
            <Grid item xs={12} md={12} lg={12}>
              <Route path="/" render={() => <Redirect to="/inicio"/>} />
              <Route path="/inicio" component={Home} exact/>
              <Route path="/indicadores" component={Indicators} exact/>
              <Route path="/indicadores/crear" component={CreateIndicator} exact/>
              <Route path="/muestras" component={Samples} exact/>
              <Route path="/muestras/agregar" component={AddSample} exact/>
              <Route path="/reportes" component={Reports} exact/>
              <Route path="/areas" component={Areas} exact/>
              <Route path="/areas/crear" component={CreateEditArea} exact/>
              <Route path="/areas/editar" component={CreateEditArea} exact/>
            </Grid>
          </Box>
        </PageLayout> : 
          <AuthLayout>
            <Route path="/" render={() => <Redirect to="/inicio-sesion"/>} />
            <Route path="/inicio-sesion" component={Login} exact/>
            <Route path="/registro" component={Signup} exact/>
          </AuthLayout>
        }
      </BrowserRouter>
  );
}

export default App;
