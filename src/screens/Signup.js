import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Stack} from '@mui/material'
import {AddCircleOutlineOutlined} from '@mui/icons-material';


const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 500, margin: "40px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

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
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlined />
                    </Avatar>
                    <h2 >Registro</h2>
                    <Typography variant='caption' gutterBottom>Por favor complete este formulario para crear una cuenta!</Typography>
                </Grid>
                <form onSubmit={enviarDatosForm}>
                    <Stack direction="column" alignItems="center" spacing={1} >
                        <TextField fullWidth required label='Nombre' placeholder="Ingrese su nombre" name='name' value={datosForm.name} onChange={handleInputChange}/>
                        <TextField fullWidth required label='Empresa' placeholder="Ingrese el nombre de la empresa a la que pertenece" name='company' value={datosForm.company} onChange={handleInputChange}/>
                        <TextField fullWidth required label='Correo Electrónico' placeholder="Ingrese su correo electrónico" />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Género *</FormLabel>
                            <RadioGroup aria-label="gender" raw name="gender" value={datosForm.gender} onChange={handleInputChange} style={{ display: 'initial' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Mujer" />
                                <FormControlLabel value="male" control={<Radio />} label="Hombre" />
                                <FormControlLabel value="other" control={<Radio />} label="Otro" />
                            </RadioGroup>
                        </FormControl>
                        <TextField fullWidth required  label='Teléfono' placeholder="Ingrese su numero telefónico" name="phone" value={datosForm.phone} onChange={handleInputChange}/>
                        <TextField fullWidth required  label='Contraseña' placeholder="Ingrese su contraseña" name="password" value={datosForm.password} onChange={handleInputChange}/>
                        <TextField fullWidth required  label='Repita contraseña' placeholder="Confirme su contraseña"/>
                        <Button type='submit' variant='contained' color='primary'>Registrar</Button>
                    </Stack>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;