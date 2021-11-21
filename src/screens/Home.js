import React from 'react';
import {Grid, Typography} from '@mui/material';
  
import { useUserContext } from '../hooks'
import { constants } from '../constants'
// import DonutChart from '../components/DonutChart'

const Home = () => {

  const {user} = useUserContext()

  const isDeres = user?.company === constants.deres

  const renderCompanyDescription = () => (
    <>
      <Typography align="justify" variant="body1" style={textStyle}>
        Te permitirá el registro y seguimiento de un conjunto de indicadores. 
      </Typography>

      <Typography align="justify" variant="body1" style={textStyle}>
        Para el registro, podrás ingresar valores para un indicador indicando su fecha y valor. 
      </Typography>

      <Typography align="justify" variant="body1" style={textStyle}>
        En cuanto al seguimiento, podrás visualizar tablas y gráficos con los datos almacenados, así como también editar y borrar muestras.
      </Typography>

      <Typography align="justify" variant="body1" style={textStyle}>  
        Además, en la plataforma recibirás notificaciones que te recordarán si es momento de registrar valores para algún indicador.
      </Typography>
    </>
  )

  const renderDeresDescription = () => (
    <>
      <Typography align="justify" variant="body1" style={textStyle}>
        Te permitirá definir indicadores, áreas y empresas. Podrás invitar usuarios de las empresas a través de un link que se activará por correo electrónico.
      </Typography>

      <Typography align="justify" variant="body1" style={textStyle}>
        Para registrar empresas, deberás ingresar: Nombre, Razón Social, RUT y Rubro. Podrás editar y eliminar los usuarios y las empresas que desees.
      </Typography>

      <Typography align="justify" variant="body1" style={textStyle}>
        En cuanto a los indicadores, podrás proveer un criterio que incluye Nombre, Descripción, Área, Unidad de medida y Frecuencia de registro (opcional). 
      </Typography>

      <Typography align="justify" variant="body1" style={textStyle}>
        Los indicadores podrán ser de tipo directo o indirecto. Los indirectos pueden ser computados en base al resultado de un cálculo o a la aplicación de un coeficiente.
      </Typography>

      <Typography align="justify" variant="body1" style={textStyle}>
        Se ofrece la posibilidad de editar y borrar indicadores.
      </Typography>

      <Typography align="justify" variant="body1" style={textStyle}>
        Además, la plataforma registrará logs de todos los cambios efectuados por los usuarios.
      </Typography>
    </>
  )

  const renderPlatformDescription = () => {
    if (isDeres) return renderDeresDescription()
    return renderCompanyDescription()
  }

  const renderDeresStats = () => (
    <>
      <Grid xs={3}>
        <Typography sx={{fontSize: 80}}>
          71
        </Typography>
        <Typography sx={{fontWeight:'light', fontSize: 25, color: 'gray'}}>
          EMPRESAS
        </Typography>
      </Grid>
      <Grid xs={3}>
        <Typography sx={{fontSize: 80}}>  
          2.3k
        </Typography>
        <Typography sx={{fontWeight:'light', fontSize: 25, color: 'gray'}}>
          USUARIOS
        </Typography>
      </Grid>
      <Grid xs={3}>
        <Typography sx={{fontSize: 80}}>
          222
        </Typography>
        <Typography sx={{fontWeight:'light', fontSize: 25, color: 'gray'}}>
          INDICADORES
        </Typography>
      </Grid>
      <Grid xs={3}>
        <Typography sx={{fontSize: 80}}>
          56
        </Typography>
        <Typography sx={{fontWeight:'light', fontSize: 25, color: 'gray'}}>
          AREAS
        </Typography>
      </Grid>
    </>
  )

  const renderCompanyStats = () => (
    <>
      <Grid xs={3}>
        <Typography sx={{fontSize: 80}}>
          222
        </Typography>
        <Typography sx={{fontWeight:'light', fontSize: 25, color: 'gray'}}>
          INDICADORES
        </Typography>
      </Grid>
      <Grid xs={3}>
        <Typography sx={{fontSize: 80}}>  
          2.3k
        </Typography>
        <Typography sx={{fontWeight:'light', fontSize: 25, color: 'gray'}}>
          MUESTRAS
        </Typography>
      </Grid>
      <Grid xs={3}>
        <Typography sx={{fontSize: 80}}>
          56
        </Typography>
        <Typography sx={{fontWeight:'light', fontSize: 25, color: 'gray'}}>
          AREAS
        </Typography>
      </Grid>
    </>
  )

  const renderRoleStats = () => {
    if (isDeres) return renderDeresStats()
    return renderCompanyStats()
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">
            {user ? user.company : null}
          </Typography>
          <Typography variant="h5" style={{fontWeight: 200}}>
            {user ? user.email : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{marginTop: 50, marginBottom: 50}} xs={12}>
        {user ? renderRoleStats() : null}
      </Grid>

      <Grid xs={3}>
        {/* <DonutChart/> */}
      </Grid>
      <Grid xs={12} >

        <Typography align="justify" variant="body1" style={textStyle}>
          Esta plataforma se construyó para brindar apoyo a la gestión medioambiental de empresas.
        </Typography>

        {user ? renderPlatformDescription() : null}

        <Typography align="justify" variant="body1" style={textStyle}>
          ¡Bienvenido a la plataforma que trabaja por el desarrollo sostenible!
        </Typography>
      </Grid>
    </>
  );
}

const textStyle = {
  color: 'gray', 
  fontSize: 20
}

export default Home