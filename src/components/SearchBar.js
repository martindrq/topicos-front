
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.name,
});

export default function SearchBar({options, value, setValue}) {
  return (
    <Autocomplete
      id="filter-demo"
      options={options}
      getOptionLabel={(option) => option.name}
      filterOptions={filterOptions}
      sx={{ width: 500 }}
      renderInput={(params) => <TextField {...params} label="Indicador" />}
      onChange={(event, newValue) => {
        if (options.includes(newValue)) {
          setValue(newValue.id)
        } else {
          setValue('')
        }
      }}
    />
  );
}