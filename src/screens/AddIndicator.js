import * as React from 'react';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { blue, green, red, yellow } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DeleteIcon from '@mui/icons-material/Delete';


import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';  
import Chip from '@mui/material/Chip';


function SelectVariants() {
    const [element, setElement] = React.useState('');
  
    const handleChange = (event) => {
        setElement(event.target.value);
    };
}


function mostrar(dato) {
    if (dato == "D") {
        document.getElementById("id_form_1");
        console.log("Entra");
        document.getElementById("id_form_2");
        document.getElementById("id_form_3");
        console.log(dato);
    }
    if (dato == "I") {
        document.getElementById("id_form_1");
        document.getElementById("id_form_2");
        document.getElementById("id_form_3");
    }
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
            
            <FormControl component="fieldset">
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="D">
                    <FormControlLabel value="D" control={<Radio color="success"/>} labelPlacement="start" label="Directa" onClick={mostrar("D")}/>
                    <FormControlLabel value="I" control={<Radio color="secondary"/>} labelPlacement="start" label="Indirecta" onChange={mostrar("I")}/>
                </RadioGroup>
            </FormControl>  

            <FormControl sx={{ m: 1, minWidth: 2 }} id="id_form_1" disabled="false">
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

            <FormControl variant="filled" sx={{ m: 1, minWidth: 2 }} id="id_form_2" disabled>
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

            <FormControl sx={{ m: 1, minWidth: 2 }} id="id_form_3">
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
                <Button type="submit">Submit</Button>
            </Stack>  
        </Stack>  
        
    </form>
   
export default AddIndicator