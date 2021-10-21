import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Stack from '@mui/material/Stack';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';  
import Chip from '@mui/material/Chip';



function SelectVariants() {
   
    return element
}


const [element, setElement] = useState('');
  
function GetRadioSelect() {
   
    const [radioSelect, setRadioSelect] = useState('D')

}

const handleChange = event => {
    console.log('Esto es un log' + event.target.value);
}


const AddIndicator = () =>  

    <form>
        <Stack direction="column" alignItems="center" spacing={2} >
            <FormLabel component="legend">Indicador</FormLabel>
            <TextField id="id_name" label="Nombre" variant="outlined" fullWidth autocomplete="none"/>
            <TextField id="id_description" label="Descripción" variant="outlined" fullWidth multiline rows={5} autocomplete="none"/>

            <FormControl sx={{ m: 1, minWidth: 2 }}>
                <InputLabel>Unidad</InputLabel>
                <Select
                    id="id_unidad"
                    value={SelectVariants.element}
                    label=""
                    onChange={SelectVariants.handleChange}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>L</MenuItem>
                    <MenuItem value={20}>m3</MenuItem>
                    <MenuItem value={30}>US$</MenuItem>
                </Select>
                <FormHelperText>Métrica de medida</FormHelperText>
            </FormControl>
            
            <FormControl>
                <FormLabel>Formula</FormLabel>
                <RadioGroup row value={GetRadioSelect.radioSelect} onClick={ handleChange }>
                    <FormControlLabel value="D" control={<Radio color="success" />} label="Directa" />
                    <FormControlLabel value="I" control={<Radio color="secondary" />} label="Indirecta" />
                </RadioGroup>
            </FormControl>  

            <FormControl sx={{ m: 1, minWidth: 2 }} id="id_form_1" disabled>
                <InputLabel>1er Indicador</InputLabel>
                <Select
                    id="id_indicador_1"
                    value={SelectVariants.element}
                    label=""
                    onChange={SelectVariants.handleChange}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Indicador 1</MenuItem>
                    <MenuItem value={20}>Indicador 2</MenuItem>
                    <MenuItem value={30}>Indicador 3</MenuItem>
                </Select>
                <FormHelperText>Seleccione el primer indicador</FormHelperText>
            </FormControl>

            <FormControl variant="filled" sx={{ m: 1, minWidth: 2 }} id="id_form_2"  disabled>
                <InputLabel>Operador</InputLabel>
                <Select
                    id="id_operador_1"
                    value={SelectVariants.element}
                    label=""
                    onChange={SelectVariants.handleChange}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={1}>/</MenuItem>
                    <MenuItem value={2}>*</MenuItem>
                    <MenuItem value={3}>+</MenuItem>
                    <MenuItem value={4}>-</MenuItem>
                </Select>
                <FormHelperText>Seleccione el operador</FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 2 }} id="id_form_3"  disabled>
                <InputLabel>2do Indicador</InputLabel>
                <Select
                    id="id_indicador_2"
                    value={SelectVariants.element}
                    label=""
                    onChange={SelectVariants.handleChange}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Indicador 1</MenuItem>
                    <MenuItem value={20}>Indicador 2</MenuItem>
                    <MenuItem value={30}>Indicador 3</MenuItem>
                </Select>
                <FormHelperText>Seleccione el segundo indicador</FormHelperText>
            </FormControl>

        </Stack>  

        <Stack direction="column" alignItems="center" spacing={2} >
            <Stack direction="row"  spacing={12} >
                <Button
                    type="submit" 
                    color="primary" 
                    variant="contained"
                    endIcon={<AddIcon />}>
                    Submit
                </Button>
            </Stack>  
        </Stack>  
        
    </form>
   
export default AddIndicator