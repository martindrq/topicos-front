import React, { useState } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link,Checkbox,FormControlLabel, Stack} from '@mui/material'
import {LockOutlined} from '@mui/icons-material';


const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:500, margin:"40px auto"}
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

    const [checkedAdmin, setCheckedAdmin] = useState(false);

    const handleChangeChecked = (event) => {
        setCheckedAdmin(event.target.checked);
    }; 

    const enviarDatosForm = (event) => {
        event.preventDefault()
        console.log('enviando datos...  ' + datos.email + ' ' + datos.pass + ' ' + checkedAdmin)
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <form onSubmit={enviarDatosForm}>
                <Stack direction="column" alignItems="center" spacing={1} >
                    <Grid align='center' >
                        <Avatar style={avatarStyle}><LockOutlined/></Avatar>
                        <h2>Iniciar Sesión</h2>
                    </Grid>
                    <TextField label='Correo electrónico' placeholder='Ingrese su correo electrónico' fullWidth required name='email' value={datos.email} onChange={handleInputChange}/>
                    <TextField label='Contraseña' placeholder='Ingrese la contraseña' type='password' fullWidth required name='pass' value={datos.pass} onChange={handleInputChange}/>
                    <FormControlLabel control={<Checkbox name="admin" checked={checkedAdmin} onChange={handleChangeChecked}/>} label="Administrador"/>
                    <Button type='submit' color='primary' variant="contained" fullWidth>Iniciar Sesion</Button>                 
                    <Typography >
                        <Link href="#" underline="none">
                            Se te olvidó tu contraseña?
                        </Link>
                    </Typography>
                    <Typography> Tiene usted una cuenta? 
                        <Link  href="/inicio-sesion" underline="none">
                            Registrarse
                        </Link>
                    </Typography>
                </Stack>  
                </form>
            </Paper>
        </Grid>
    )
}

export default Login