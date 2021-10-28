import React, { useState } from 'react';
import {TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Stack, InputLabel, MenuItem, FormHelperText, Select} from '@mui/material/';
import {Add} from '@mui/icons-material';

import listUnits from '../listUnits.js'
import listIndicators from '../listIndicators.js'
import listOperators from '../listOperators.js'
import listFrequency from '../listFrequency'


const AddIndicator = () => { 
    
    const [disable, setDisable] = useState(true);

    const [datosForm, setDatosForm] = useState({
        name: '',
        description: '',
        unidad: '',
        indicadorValue1: '',
        indicadorValue2: '',
        operadorValue1: '',
        frecuencia: '',
        radioSelect: 'D'
    })
    
    const [error, setError] = useState(false)
    
    const handleInputChange = (event) => {
        setDatosForm({
            ...datosForm,
            [event.target.name] : event.target.value
        })

        if (event.target.name === 'radioSelect')
            hide(event.target.value)
    }

    function hide(state){
        if (state === 'D') {
            setDisable(true)
        }
        if (state === 'I') {
            setDisable(false)
        }
    }

    const enviarDatosForm = (event) => {
        event.preventDefault()
        
        if ( datosForm.unidad  === '') {
            setError(true)
        }
        else {
            setError(false)
        }
        console.log('Enviando datos...  ' + datosForm.name + ' '  + datosForm.unidad + ' ' + datosForm.indicadorValue1 + ' ' + datosForm.indicadorValue2 + ' '  + datosForm.operadorValue1 + ' '  + datosForm.frecuencia + ' ' +  datosForm.description)
    }

    return(
        <form onSubmit={enviarDatosForm}>
            <Stack direction="column" alignItems="center" spacing={2} >
                <FormLabel component="legend">Indicador</FormLabel>
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
                <Stack direction="row" alignItems="center" spacing={0}>
                    <FormControl sx={{ m: 1, minWidth: 2 }}>
                        <InputLabel id="u">Unidad *</InputLabel>
                        <Select labelId="u" 
                            name='unidad'
                            value={datosForm.unidad}
                            onChange={handleInputChange}
                            error={error}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            {listUnits.map( (unit) => <MenuItem value={unit.id}>{unit.name}</MenuItem> )}
                        </Select>
                        <FormHelperText>Métrica de medida</FormHelperText>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 2 }}>
                        <InputLabel id="f">Frecuencia</InputLabel>
                            <Select
                                labelId="f"
                                id="id_frecuencia"
                                value={datosForm.frecuencia}
                                label=""
                                name='frecuencia'
                                onChange={handleInputChange}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                {listFrequency.map( (frequency) => <MenuItem value={frequency.id}>{frequency.name}</MenuItem> )}
                            </Select>
                        <FormHelperText>Frecuencia de medida en meses</FormHelperText>
                    </FormControl>

                </Stack> 
                <FormControl>
                    <FormLabel>Formula</FormLabel>
                        <RadioGroup row name='radioSelect' value={datosForm.radioSelect} onChange={handleInputChange}>
                            <FormControlLabel value='D' control={<Radio color="success" />} label="Directa" />
                            <FormControlLabel value='I' control={<Radio color="secondary" />} label="Indirecta" />
                        </RadioGroup>
                </FormControl>  
                
                <Stack direction="row" alignItems="center" spacing={0}>
                    <FormControl sx={{ m: 1, minWidth: 2 }} id="id_form_1" disabled={disable}>
                        <InputLabel id="i1">1er Indicador</InputLabel>
                        <Select
                            labelId="i1"
                            id="id_indicador1"
                            value={datosForm.indicadorValue1}
                            label=""
                            name='indicadorValue1'
                            onChange={handleInputChange}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            {listIndicators.map( (indicator) => <MenuItem value={indicator.id}>{indicator.name}</MenuItem> )}
                        </Select>
                        <FormHelperText>Seleccione el primer indicador</FormHelperText>
                    </FormControl>

                    <FormControl variant="filled" sx={{ m: 1, minWidth: 2 }} id="id_form_2" disabled={disable}>
                        <InputLabel id="i1">Operador</InputLabel>
                        <Select
                            id="id_operador_1"
                            value={datosForm.operadorValue1}
                            label=""
                            name='operadorValue1'
                            onChange={handleInputChange}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            {listOperators.map( (operator) => <MenuItem value={operator.id}>{operator.name}</MenuItem> )}
                        </Select>
                        <FormHelperText>Seleccione el operador</FormHelperText>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 2 }} id="id_form_3" disabled={disable}>
                        <InputLabel id="i2">2do Indicador</InputLabel>
                        <Select
                            labelId="i2"
                            id="id_indicador2"
                            value={datosForm.indicadorValue2}
                            label=""
                            name='indicadorValue2'
                            onChange={handleInputChange}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            {listIndicators.map( (indicator) => <MenuItem value={indicator.id}>{indicator.name}</MenuItem> )}
                        </Select>
                        <FormHelperText>Seleccione el segundo indicador</FormHelperText>
                    </FormControl>
                </Stack>  
            </Stack>  

            <Stack direction="column" alignItems="center" spacing={2} >
                <Stack direction="row"  spacing={12} >
                    <Button
                        type="submit" 
                        color="primary" 
                        variant="contained"
                        endIcon={<Add/>}>
                        Crear
                    </Button>
                </Stack>  
            </Stack>  
            
        </form>
    );
 }

export default AddIndicator;