import React, { useState } from 'react';
import {TextField, Grid, Stack, Typography, Paper, Tooltip, Fab} from '@mui/material/';
import {Add} from '@mui/icons-material';

const CreateArea = () => { 
    
    const [datosForm, setDatosForm] = useState({
        name: '',
        description: '',
    })
        
    const handleInputChange = (event) => {
        setDatosForm({
            ...datosForm,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatosForm = (event) => {
        event.preventDefault()
        console.log('Enviando datos...  ' + datosForm.name + ' ' +  datosForm.description)     //  Tados a enviar, BORRAR.
    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">
                Crear area
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
                        <TextField label="Descripción" variant="outlined" fullWidth multiline rows={5} autocomplete="none" 
                            name='description'
                            value={datosForm.description}
                            onChange={handleInputChange} 
                        />
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

export default CreateArea;