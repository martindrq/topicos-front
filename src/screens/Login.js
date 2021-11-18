import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, IconButton, Stack} from '@mui/material'
import { LockOutlined } from '@mui/icons-material';

import { useAuth } from '../hooks'

const Login = () => {

    const [, login] = useAuth();

    const paperStyle={padding :20,height:'42vh',width:500}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatosForm = async (event) => {
        event.preventDefault()
        const response = await login({
            email: data.email,
            password: data.password
        })
        console.log('response from login', response)
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
                        <TextField label='Correo electrónico' placeholder='Ingrese su correo electrónico' fullWidth required name='email' value={data.email} onChange={handleInputChange}/>
                        <TextField label='Contraseña' placeholder='Ingrese la contraseña' type='password' fullWidth required name='password' value={data.password} onChange={handleInputChange}/>
                        <Button type='submit' color='primary' variant="contained" fullWidth style={{height: 50}}>Iniciar sesión</Button>
                    </Stack>  
                </form>
            </Paper>
        </Grid>
    )
}

export default Login