import React, { useState } from 'react';
import {TextField, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Stack, InputLabel, MenuItem, FormHelperText, Select, Typography, Paper, Tooltip, Fab, Button} from '@mui/material/';
import {Add} from '@mui/icons-material';
import { useHistory } from 'react-router-dom'

import listUnits from '../mock-data/units'
import listIndicators from '../mock-data/indicators'
import listOperators from '../mock-data/operators'
import listFrequency from '../mock-data/frequency'

import { useIndicators, useUserContext, useAreas } from "../hooks";

const CreateEditIndicator = ({ location }) => { 
    
    const isEdit = location?.state?.isEdit || false
    const indicatorId = location?.state?.indicatorId

    const [hide, setHide] = useState('hidden')
    
    const {user} = useUserContext();
    const [,, addIndicator,, editIndicator] = useIndicators(user?.token);
    const [areas] = useAreas(user?.token);
    const history = useHistory()

    const item = location?.state?.indicatorId

    const [datosForm, setDatosForm] = useState({
        name: item?.name || '',
        description: item?.description || '',
        unidad: item?.unit || '',
        indicadorValue1: item?.indicadorValue1 || '',
        indicadorValue2: item?.indicadorValue2 || '',
        constantValue2: item?.constantValue2 || '',
        frecuencia: item?.frequency|| '',
        radioSelect: (item?.type === 'Directa' ? 'D' : (item?.type === 'Indirecta' ? 'I' : 'D')),
        area: item?.area || ''
    })
    
    
    const handleInputChange = (event) => {
        setDatosForm({
            ...datosForm,
            [event.target.name] : event.target.value
        })

        if (event.target.name === 'radioSelect')
            isHide(event.target.value)
    }

    function isHide(state){
        if (state === 'D') {
            setHide('hidden')
        }
        if (state === 'I') {
            setHide('visible')
        }
    console.log(datosForm)
    }

    const getAreaId = (origin) => {
        const element = areas.find(item => item.name === origin)
        return element?.id
    }
    
    const enviarDatosForm = async (event) => {
        event.preventDefault()

        if (isEdit) {
            await editIndicator({
                id: indicatorId,
                name: datosForm.name,
                unit: datosForm.unidad,
                type: datosForm.radioSelect,
                frequency: datosForm.frecuencia,
                areaId: getAreaId(datosForm.area),
                description: datosForm.description,
                // formula: datosForm.formula, // TODO: add formula
            }) 
        } else {
            await addIndicator({
                name: datosForm.name,
                unit: datosForm.unidad,
                type: datosForm.radioSelect,
                frequency: datosForm.frecuencia,
                areaId: getAreaId(datosForm.area),
                description: datosForm.description,
                // formula: datosForm.formula, // TODO: add formula
            })
        } 
        history.goBack()
    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">
                {`${isEdit ? 'Editar' : 'Crear'} indicador`}
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
                        <Stack direction="row" alignItems="center" spacing={0}>

                            <FormControl sx={{ m: 1, minWidth: 4 }}>
                                <InputLabel id="a">Area *</InputLabel>
                                <Select labelId="a" 
                                    name='area'
                                    value={datosForm.area}
                                    onChange={handleInputChange}
                                    required
                                >
                                    {areas.map( (area) => <MenuItem key={area.name} value={area.name}>{area.name}</MenuItem> )}
                                </Select>
                                <FormHelperText>Area perteneciente</FormHelperText>
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 2 }}>
                                <InputLabel id="u">Unidad *</InputLabel>
                                <Select labelId="u" 
                                    name='unidad'
                                    value={datosForm.unidad}
                                    onChange={handleInputChange}
                                    required
                                >
                                    {listUnits.map( (unit) => <MenuItem key={unit.id} value={unit.name}>{unit.name}</MenuItem> )}
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
                                        <MenuItem value=""><em>Vacia</em></MenuItem>
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
                        
                        { (hide === 'visible') &&

                            <Stack direction="row" alignItems="center" spacing={0} visibility={hide}>
                            
                                <FormControl sx={{ m: 1, minWidth: 20 }} id="id_form_1">
                                    <InputLabel id="i1">1er Indicador</InputLabel>
                                    <Select
                                        labelId="i1"
                                        id="id_indicador1"
                                        value={datosForm.indicadorValue1}
                                        label=""
                                        name='indicadorValue1'
                                        onChange={handleInputChange}
                                        required
                                    >
                                        {listIndicators.map( (indicator) => <MenuItem value={indicator.id}>{indicator.name}</MenuItem> )}
                                    </Select>
                                    <FormHelperText>Seleccione el primer indicador</FormHelperText>
                                </FormControl>

                                <FormControl variant="filled" sx={{ m: 1, minWidth: 20 }} id="id_form_2">
                                    <InputLabel id="i1">Operador</InputLabel>
                                    <Select
                                        id="id_operador_1"
                                        value={datosForm.operadorValue1}
                                        label=""
                                        name='operadorValue1'
                                        onChange={handleInputChange}
                                        required
                                    >
                                        {listOperators.map( (operator) => <MenuItem value={operator.id}>{operator.name}</MenuItem> )}
                                    </Select>
                                    <FormHelperText>Seleccione el operador</FormHelperText>
                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 20 }} id="id_form_3">
                                    <InputLabel id="i2">2do Indicador</InputLabel>
                                    
                                        <Select
                                            labelId="i2"
                                            id="id_indicador2"
                                            value={datosForm.indicadorValue2}
                                            label=""
                                            name='indicadorValue2'
                                            onChange={handleInputChange} 
                                            required
                                        >
                                            <MenuItem value="value">Una constante</MenuItem>
                                            {listIndicators.map( (indicator) => <MenuItem value={indicator.id}>{indicator.name}</MenuItem> )}
                                        </Select> 
                                    <FormHelperText>Seleccione el segundo indicador</FormHelperText>
                                        { (datosForm.indicadorValue2 === 'value') && (
                                            <TextField 
                                            label="Valor" 
                                            variant="outlined" 
                                            fullWidth 
                                            autocomplete="none" 
                                            name='constantValue2'
                                            value={datosForm.constantValue2}
                                            onChange={handleInputChange}
                                            required 
                                            type="number"
                                        />
                                        )}
                                    </FormControl>
                            </Stack>  
                        }   
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
                        </Stack>  
                    }
                </form>
            </Grid>
        </Grid>
    );
 }

export default CreateEditIndicator;