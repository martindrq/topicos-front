import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, IconButton, Stack} from '@mui/material'
import { LockOutlined } from '@mui/icons-material';
import { useHistory } from 'react-router-dom'

import { useAuth, useUserContext } from '../hooks'
import { constants } from '../constants';

const paperStyle={padding :20,height:550,width:500, marginTop: 100}
const avatarStyle={backgroundColor:'#1bbd7e'}

const Login = ({location}) => {

    const token = location?.search?.replace('?token=', '')

    const [activate, login] = useAuth();
    const {setUser} = useUserContext();
    const history = useHistory();

    const [data, setData] = useState({
        mail: '',
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
        let response
        if (token) {
            response = await activate(data, token)
        } else {
            response = await login(data)   
        }
        if (response.data) {
            const userData = {
                mail: data.mail, 
                ...response.data
            }
            setUser(userData)
            localStorage.setItem(constants.localStorageUserKey, JSON.stringify(userData))
            history.push('/inicio')
        } 
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
                                ??Bienvenido!
                            </Typography>
                        </Grid>
                        <TextField label='Correo electr??nico' placeholder='Ingrese su correo electr??nico' fullWidth required name='mail' value={data.mail} onChange={handleInputChange}/>
                        <TextField label='Contrase??a' placeholder='Ingrese la contrase??a' type='password' fullWidth required name='password' value={data.password} onChange={handleInputChange}/>
                        <Button type='submit' color='primary' variant="contained" fullWidth style={{height: 50}}>Iniciar sesi??n</Button>
                    </Stack>  
                </form>
            </Paper>
        </Grid>
    )
}

export default Login