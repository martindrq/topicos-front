import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link,Checkbox,FormControlLabel, Stack} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:500, margin:"40px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Stack direction="column" alignItems="center" spacing={1} >
                    <Grid align='center' >
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Iniciar Sesión</h2>
                    </Grid>
                    <TextField label='Correo electrónico' placeholder='Ingrese su correo electrónico' fullWidth required/>
                    <TextField label='Contraseña' placeholder='Ingrese la contraseña' type='password' fullWidth required/>
                    <FormControlLabel
                        control={
                        <Checkbox 
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Recordarme"
                    />
                    <Button type='submit' color='primary' variant="contained" fullWidth>Iniciar Sesin</Button>
                    <Typography >
                        <Link href="#" underline="none">
                            Se te olvidó tu contraseña?
                        </Link>
                    </Typography>
                    <Typography> Tiene usted una cuenta? 
                        <Link  href="/signup" underline="none">
                            Registrarse
                        </Link>
                    </Typography>
                </Stack>  
            </Paper>
        </Grid>
    )
}

export default Login