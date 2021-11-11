import React, { useState } from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Checkbox, Toolbar, Typography, FormControl, InputLabel, Select, MenuItem, TextField} from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

export default function StickyHeadTable({ columns, rows }) {
 
  const [listFilter, setListFilter] = useState(rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState([]);
  const [action, setAction] = useState('');
  const [wordSearch, setWordSearch] = useState('');
 
  const isSelected = (id) => selected.indexOf(id) !== -1;
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = listFilter.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
  
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );}
    setSelected(newSelected);
  };

  const handleChangeAction = (event) => {
    setAction(event.target.value);
  };

  const handleWordSearch = (event) => {
    if (event.target.value === ""){
      setWordSearch('');
      setListFilter(rows) 
    }
    else {
      setWordSearch(event.target.value);
      handleSearch(event.target.value)
    }
  };

  const handleSearch = (word) => {
    const newList = rows.filter(
      element => {
        return ( element.name.toLowerCase().includes(word.toLowerCase()));
      })
    setListFilter(newList)
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Toolbar>
        <TextField
          type = "search" 
          variant="standard"
          value= {wordSearch}
          onChange= {handleWordSearch}
          placeholder=" Buscar..."
          InputProps={{
            startAdornment: <SearchOutlined fontSize="small" />,
          }}
        />
        {selected.length > 0 ? (
        <TableContainer sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
        > 
          <Typography>
            {selected.length} seleccionados
          </Typography>

          <FormControl variant="filled" sx={{ minWidth: 120}}>
            <InputLabel id="a">Acción</InputLabel>
              <Select
                labelId ='a'
                value={action}
                onChange={handleChangeAction}
              >
                <MenuItem value="">
                  <em>-</em>
                </MenuItem>
                <MenuItem value={1}>Borrar</MenuItem>
               </Select>
          </FormControl>
        </TableContainer> ) : null}
    </Toolbar>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {listFilter
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}