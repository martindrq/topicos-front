import React, { useState } from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Checkbox, Toolbar, Typography, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

export default function StickyHeadTable({ columns, rows }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [selected, setSelected] = useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
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
        );
  }
    setSelected(newSelected);

    console.log(selected)   //Borrar, para pruebas nada mas.
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;
  
  const [action, setAction] = useState('');

  const handleChangeAction = (event) => {
    setAction(event.target.value);
  };


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Toolbar>
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
        </TableContainer>
          
        ) : null}
    </Toolbar>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox onChange={handleSelectAllClick} />
              </TableCell>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                
                const isItemSelected = isSelected(row.id);
               
                return (
                     <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                    <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                        />
                      </TableCell>
                    
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