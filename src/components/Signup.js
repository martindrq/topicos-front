import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Stack} from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 500, margin: "40px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid >
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 >Registro</h2>
                    <Typography variant='caption' gutterBottom>Por favor complete este formulario para crear una cuenta!</Typography>
                </Grid>
                <form >
                <Stack direction="column" alignItems="center" spacing={1} >
                    <TextField fullWidth label='Nombre' placeholder="Ingrese su nombre" />
                    <TextField fullWidth label='Empresa' placeholder="Ingrese el nombre de la empresa a la que pertenece" />
                    <TextField fullWidth label='Correo Electrónico' placeholder="Ingrese su correo electrónico" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Género</FormLabel>
                        <RadioGroup aria-label="gender" raw name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Mujer" />
                            <FormControlLabel value="male" control={<Radio />} label="Hombre" />
                            <FormControlLabel value="other" control={<Radio />} label="Otro" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Teléfono' placeholder="Ingrese su numero telefónico" />
                    <TextField fullWidth label='Contraseña' placeholder="Ingrese su contraseña"/>
                    <TextField fullWidth label='Repita contraseña' placeholder="Confirme su contraseña"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Acepto los términos y condiciones"
                    />
                    <Button type='submit' variant='contained' color='primary'>Registrar</Button>
                    </Stack>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;