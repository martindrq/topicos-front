import React, { useState } from 'react';
import {TextField, Grid, Stack, Typography, Button} from '@mui/material/';


const CreateArea = () => { 
    
    const [datosForm, setDatosForm] = useState({
        name: '',
        description: '',
        unidad: '',
        indicadorValue1: '',
        indicadorValue2: '',
        constantValue2: '',
        operadorValue1: '',
        frecuencia: '',
        radioSelect: 'D'
    })
        
    const handleInputChange = (event) => {
        setDatosForm({
            ...datosForm,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatosForm = (event) => {
        event.preventDefault()
        console.log('Enviando datos...  ' + datosForm.unidad + ' ' + datosForm.indicadorValue1 + ' ' + datosForm.indicadorValue2 + ' '  + datosForm.operadorValue1 + ' '  + datosForm.frecuencia + ' ' +  datosForm.description)
    }

    const handleSubmit = () => {
      console.log("About to sumit", datosForm);
    };

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
                </form>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Crear
                </Button>
            </Grid>
        </Grid>
    );
 }

export default CreateArea;