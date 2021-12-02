import React, { useState } from 'react';
import { TextField, Grid, Stack, Typography, Paper, Tooltip, Fab, MenuItem, FormControl, InputLabel, Select } from '@mui/material/';
import { Add } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

import { useUsers, useCompanies, useUserContext } from "../hooks";

const CreateEditArea = ({ location }) => { 
    const item = location?.state?.item
    
    const history = useHistory();
    const {user} = useUserContext();
    const [, addUser] = useUsers(user?.token);
    const [companies] = useCompanies(user?.token);

    const [datosForm, setDatosForm] = useState({
        username: item?.username || '',
    })
        
    const handleInputChange = (event) => {
        setDatosForm({
            ...datosForm,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatosForm = async (event) => {
        event.preventDefault()
        await addUser(datosForm)
        history.goBack()
    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">
                Crear usuario
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <form onSubmit={enviarDatosForm}>
                    <Stack direction="column" alignItems="center" spacing={2} >
                        <TextField label='Correo electrónico' fullWidth required name='mail' value={datosForm.mail} onChange={handleInputChange}/>
                        <FormControl
                          style={{width: '100%'}}
                        >
                          <InputLabel id="c">Empresa *</InputLabel>
                          <Select 
                            labelId="c" 
                            name='companyId'
                            value={datosForm.companyId}
                            onChange={handleInputChange}
                            required
                          >
                              {companies.map( (com) => <MenuItem key={com.id} value={com.id}>{com.name}</MenuItem> )}
                          </Select>
                        </FormControl>
                    </Stack> 
                
                    <Stack direction="column" alignItems="center" spacing={2} >
                        <Paper sx={{ position: "fixed", bottom: 0, right: 0}} elevation={0} >
                            <Tooltip title="Crear" placement="right">  
                                <Fab sx={{ position: 'absolute', bottom: 40, right: 50 }} type="submit" color="primary" aria-label="Crear">
                                <Add/>
                                </Fab>
                            </Tooltip>
                        </Paper>
                    </Stack>
                </form>
        </Grid>
    </Grid>
    );
 }

export default CreateEditArea;