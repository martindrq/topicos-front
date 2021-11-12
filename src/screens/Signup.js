import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, IconButton, Button, Stack} from '@mui/material'
import {AddCircleOutlineOutlined} from '@mui/icons-material';


const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 500, margin: "40px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const [datosForm, setDatosForm] = useState({
        name: '',
        company: '',
        gender: '',
        phone: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setDatosForm({
            ...datosForm,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatosForm = (event) => {
        event.preventDefault()
        console.log('enviando datos...  ' + datosForm.name + ' ' + datosForm.company + ' ' + datosForm.gender + ' '  + datosForm.phone + ' '  + datosForm.password)
    }

    return (
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlined />
                    </Avatar>
                    <IconButton> 
                    <img src={require('../assets/images').deresLogoBlack} alt="DERES logo" width={150} />
                    </IconButton>
                    <Typography variant="h4" style={{ marginBottom: 20 }}>
                        ¡Bienvenido!
                    </Typography>
                </Grid>
                <form onSubmit={enviarDatosForm}>
                    <Stack direction="column" alignItems="center" spacing={1} marginBottom={3} >
                        <TextField fullWidth required label='Nombre' placeholder="Ingrese su nombre" name='name' value={datosForm.name} onChange={handleInputChange}/>
                        <TextField fullWidth required label='Correo Electrónico' placeholder="Ingrese su correo electrónico" />
                        <TextField fullWidth required  label='Contraseña' placeholder="Ingrese su contraseña" name="password" value={datosForm.password} onChange={handleInputChange}/>
                        <TextField fullWidth required  label='Repita su contraseña' placeholder="Confirme su contraseña"/>
                        <Button type='submit' color='primary' variant="contained" fullWidth style={{height: 50}}>Crear cuenta</Button>
                    </Stack>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;