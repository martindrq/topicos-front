import React, { useState } from 'react';
import { TextField, Grid, Stack, Typography, Paper, Tooltip, Fab, Button } from '@mui/material/';
import { Add } from '@mui/icons-material';
import { useHistory } from 'react-router-dom'

import { useCompanies, useUserContext } from "../hooks";

const CreateEditCompany = ({ location }) => { 
    const isEdit = location?.state?.isEdit || false
    const item = location?.state?.item
    
    const {user} = useUserContext();
    const [, addCompany, editCompany] = useCompanies(user?.token);
    const history = useHistory()

    const [datosForm, setDatosForm] = useState({
        name: item?.name || '',
    })
        
    const handleInputChange = (event) => {
        setDatosForm({
            ...datosForm,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatosForm = async (event) => {
        event.preventDefault()
        if (isEdit) {
            await editCompany({...datosForm, id: item?.id})
        } else {
            await addCompany(datosForm)
        } 
        history.goBack()
    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">
                {`${isEdit ? 'Editar' : 'Crear'} empresa`}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <form onSubmit={enviarDatosForm}>
                    <Stack direction="column" alignItems="center" spacing={2} >
                        <TextField label="Nombre" variant="outlined" fullWidth required autocomplete="none" 
                            name='name'
                            value={datosForm.name}
                            onChange={handleInputChange}
                        />
                        <TextField label="RUT" variant="outlined" fullWidth required autocomplete="none" 
                            name='rut'
                            value={datosForm.rut}
                            onChange={handleInputChange} 
                            type="number"
                        />
                        <TextField label="Razón social" variant="outlined" fullWidth required autocomplete="none" 
                            name='businessName'
                            value={datosForm.businessName}
                            onChange={handleInputChange} 
                        />
                        <TextField label="Rubro" variant="outlined" fullWidth required autocomplete="none" 
                            name='businessArea'
                            value={datosForm.businessArea}
                            onChange={handleInputChange} 
                        />
                    </Stack> 
                
                    {isEdit ? 
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Editar
                    </Button>
                    : 
                    <Stack direction="column" alignItems="center" spacing={2} >
                        <Paper sx={{ position: "fixed", bottom: 0, right: 0}} elevation={0} >
                            <Tooltip title="Crear" placement="right">  
                                <Fab sx={{ position: 'absolute', bottom: 40, right: 50 }} type="submit" color="primary" aria-label="Crear">
                                <Add/>
                                </Fab>
                            </Tooltip>
                        </Paper>
                    </Stack>}
                </form>
        </Grid>
    </Grid>
    );
 }

export default CreateEditCompany;