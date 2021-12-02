import React, { useState, useEffect, createContext } from 'react';
import {Grid, Box} from '@mui/material';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import "./services/axiosConfig/interceptors";

// screens
import Home from './screens/Home';
import Login from "./screens/Login";
import Reports from "./screens/Reports";
import Samples from "./screens/Samples";
import CreateEditSample from "./screens/CreateEditSample";
import Indicators from "./screens/Indicators";
import CreateEditIndicator from './screens/CreateEditIndicator';
import Areas from './screens/Areas';
import CreateEditArea from './screens/CreateEditArea';
import Companies from './screens/Companies';
import CreateEditCompany from './screens/CreateEditCompany';
import Users from './screens/Users';
import CreateUser from './screens/CreateUser';
import Notify from './screens/Notify';
import Logs from './screens/Logs';

// components
import PageLayout from "./components/PageLayout";
import AuthLayout from "./components/AuthLayout";

export const UserContext = createContext()

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userDeresPlatform')))

  useEffect(() => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [user])

  return (
      <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
        {loggedIn ? 
          <PageLayout>
            <Box sx={{ flexGrow:1 }}>
              <Grid item xs={12} md={12} lg={12}>
                <Route path="/inicio" component={Home} exact/>
                <Route path="/indicadores" component={Indicators} exact/>
                <Route path="/indicadores/crear" component={CreateEditIndicator} exact/>
                <Route path="/indicadores/editar" component={CreateEditIndicator} exact/>
                <Route path="/muestras" component={Samples} exact/>
                <Route path="/muestras/agregar" component={CreateEditSample} exact/>
                <Route path="/muestras/editar" component={CreateEditSample} exact/>
                <Route path="/reportes" component={Reports} exact/>
                <Route path="/areas" component={Areas} exact/>
                <Route path="/areas/crear" component={CreateEditArea} exact/>
                <Route path="/areas/editar" component={CreateEditArea} exact/>
                <Route path="/empresas" component={Companies} exact/>
                <Route path="/empresas/crear" component={CreateEditCompany} exact/>
                <Route path="/empresas/editar" component={CreateEditCompany} exact/>
                <Route path="/usuarios" component={Users} exact/>
                <Route path="/usuarios/crear" component={CreateUser} exact/>
                <Route path="/notificaciones" component={Notify} exact/>
                <Route path="/logs" component={Logs} exact/>
                <Route path="/" render={() => <Redirect to="/inicio"/>}/>
              </Grid>
            </Box>
          </PageLayout> : 
          <AuthLayout>
              <Route path="/iniciar-sesion" component={Login}/>
              <Route path="/" exact render={() => <Redirect to="/iniciar-sesion"/> } />
          </AuthLayout>
        }
        </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
