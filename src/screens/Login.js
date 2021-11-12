import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, IconButton, Stack} from '@mui/material'
import { LockOutlined } from '@mui/icons-material';

const Login = () => {

    const paperStyle={padding :20,height:'42vh',width:500}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    
    const [datos, setDatos] = useState({
        email: '',
        pass: '',
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatosForm = (event) => {
        event.preventDefault()
        console.log('enviando datos...  ' + datos.email + ' ' + datos.pass)
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <form onSubmit={enviarDatosForm}>
                    <Stack direction="column" alignItems="center" spacing={1} >
                        <Grid align='center' >
                            <Avatar style={avatarStyle}><LockOutlined/></Avatar>
                            <IconButton> 
                                <img src={require('../assets/images').deresLogoBlack} alt="DERES logo" width={150} />
                            </IconButton>
                            <Typography variant="h4" style={{ marginBottom: 20 }}>
                                ¡Bienvenido!
                            </Typography>
                        </Grid>
                        <TextField label='Correo electrónico' placeholder='Ingrese su correo electrónico' fullWidth required name='email' value={datos.email} onChange={handleInputChange}/>
                        <TextField label='Contraseña' placeholder='Ingrese la contraseña' type='password' fullWidth required name='pass' value={datos.pass} onChange={handleInputChange}/>
                        <Button type='submit' color='primary' variant="contained" fullWidth style={{height: 50}}>Iniciar sesion</Button>
                    </Stack>  
                </form>
            </Paper>
        </Grid>
    )
}

export default Login