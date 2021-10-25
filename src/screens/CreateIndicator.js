import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Stack, InputLabel, MenuItem, FormHelperText, Select} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';

const AddIndicator = () => { 
    
    const [unidad, setUnidad] = useState('');
    const [indicadorValue1, setIndicadorValue1] = useState('');
    const [indicadorValue2, setIndicadorValue2] = useState('');
    const [operadorValue1, setOperadorValue1] = useState('');
    const [frecuencia, setFrecuencia] = useState('');

    const [radioSelect, setRadioSelect] = useState('D')
    const [disable, setDisable] = useState(true);

    const handleChangeRadioSelect = (event,) => {
        setRadioSelect(event.target.value)
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

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
  
    const handleRadioChange = (event) => {
      setValue(event.target.value);
      setHelperText(' ');
      setError(false);
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === '') {
            setHelperText('Ingrese un valor valido');
            setError(true);
        }
        else {
            setHelperText('You got it!');
            setError(false);
        }
    };
  
    
    return(
        <form onSubmit={handleSubmit}>
            <Stack direction="column" alignItems="center" spacing={2} >
                <FormLabel component="legend">Indicador</FormLabel>
                <TextField id="id_name" label="Nombre" variant="outlined" fullWidth autocomplete="none" error={error}/>
                <FormHelperText>{helperText}</FormHelperText>

                <TextField id="id_description" label="Descripción" variant="outlined" fullWidth multiline rows={5} autocomplete="none" error={error}/>
                <FormHelperText>{helperText}</FormHelperText>
                
                <Stack direction="row" alignItems="center" spacing={0}>
                    <FormControl sx={{ m: 1, minWidth: 2 }} error={error}>
                        <InputLabel id="u">Unidad</InputLabel>
                        <Select
                            labelId="u"
                            id="id_unidad"
                            value={unidad}
                            label=""
                            onChange={(e) => setUnidad(e.target.value)}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>L</MenuItem>
                            <MenuItem value={20}>m3</MenuItem>
                            <MenuItem value={30}>US$</MenuItem>
                        </Select>
                        <FormHelperText>Métrica de medida</FormHelperText>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 2 }}>
                        <InputLabel id="f">Frecuencia</InputLabel>
                        <Select
                            labelId="f"
                            id="id_frecuencia"
                            value={frecuencia}
                            label=""
                            onChange={(e) => setFrecuencia(e.target.value)}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                        <FormHelperText>Frecuencia de medida en meses</FormHelperText>
                    </FormControl>

                </Stack> 
                <FormControl>
                    <FormLabel>Formula</FormLabel>
                        <RadioGroup row value={radioSelect} onChange={handleChangeRadioSelect}>
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
                            value={indicadorValue1}
                            label=""
                            onChange={(e) => setIndicadorValue1(e.target.value)}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Indicador 1</MenuItem>
                            <MenuItem value={20}>Indicador 2</MenuItem>
                            <MenuItem value={30}>Indicador 3</MenuItem>
                        </Select>
                        <FormHelperText>Seleccione el primer indicador</FormHelperText>
                    </FormControl>

                    <FormControl variant="filled" sx={{ m: 1, minWidth: 2 }} id="id_form_2" disabled={disable}>
                        <InputLabel id="i1">Operador</InputLabel>
                        <Select
                            id="id_operador_1"
                            value={operadorValue1}
                            label=""
                            onChange={(e) => setOperadorValue1(e.target.value)}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={1}>/</MenuItem>
                            <MenuItem value={2}>*</MenuItem>
                            <MenuItem value={3}>+</MenuItem>
                            <MenuItem value={4}>-</MenuItem>
                        </Select>
                        <FormHelperText>Seleccione el operador</FormHelperText>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 2 }} id="id_form_3" disabled={disable}>
                        <InputLabel id="i2">2do Indicador</InputLabel>
                        <Select
                            labelId="i2"
                            id="id_indicador2"
                            value={indicadorValue2}
                            label=""
                            onChange={(e) => setIndicadorValue2(e.target.value)}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Indicador 1</MenuItem>
                            <MenuItem value={20}>Indicador 2</MenuItem>
                            <MenuItem value={30}>Indicador 3</MenuItem>
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
                        endIcon={<AddIcon />}>
                        Crear
                    </Button>
                </Stack>  
            </Stack>  
            
        </form>
    );
 }

export default AddIndicator;