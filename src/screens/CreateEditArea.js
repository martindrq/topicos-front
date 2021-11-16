import React, { useState } from 'react';
import { TextField, Grid, Stack, Typography, Paper, Tooltip, Fab, Button } from '@mui/material/';
import { Add } from '@mui/icons-material';

import { useAreas } from "../hooks";

const CreateEditArea = ({ location }) => { 
    const isEdit = location?.state?.isEdit || false
    const item = location?.state?.item
    
    const [, addArea, editArea] = useAreas();

    const [datosForm, setDatosForm] = useState({
        name: item?.name || '',
        description: item?.description || '',
    })
        
    const handleInputChange = (event) => {
        setDatosForm({
            ...datosForm,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatosForm = (event) => {
        event.preventDefault()
        if (isEdit) {
            editArea({...datosForm, id: item?.id})
        } else {
            addArea(datosForm)
        } 
    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">
                {`${isEdit ? 'Editar' : 'Crear'} area`}
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

export default CreateEditArea;