import React, { useState } from 'react';
import {
  Paper, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Checkbox,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Backdrop,
  CircularProgress
} from '@mui/material';

import Alert from './Alert'

export default function StickyHeadTable({ columns, rows, loading = false }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [action, setAction] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // Alert
  const [alertTitle, setAlertTitle] = useState('');
  const [alertOkText, setAlertOkText] = useState('');
  const [alertDescription, setAlertDescription] = useState('');

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
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;
  
  const handleChangeAction = (event) => {
    // Index 1 -> Delete
    console.log('action', event.target)
    setAction(event.target.value)
    setShowAlert(true)
    switch (event.target.value) {
      case 1:
        setAlertTitle('Eliminar registro')
        setAlertOkText('Eliminar')
        setAlertDescription('Estas seguro de que deseas eliminar este registro? Esto no se puede deshacer')
        return
      default:
        return
    }
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
        > 
          <Typography style={{marginRight: 10}}>
            {`${selected.length} seleccionado${selected.length !== 1 ? 's' : ''}`} 
          </Typography>

          <FormControl variant="filled" sx={{ minWidth: 120}}>
            <InputLabel id="a">Acción</InputLabel>
              <Select // TODO disable when there are no selected rows
                labelId ='a'
                value={action}
                onChange={handleChangeAction}
              >
                <MenuItem value="">
                  <em>-</em>
                </MenuItem>
                <MenuItem value={1} name="delete">Borrar</MenuItem>
              </Select>
          </FormControl>
        </TableContainer>
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
      <Alert 
        title={alertTitle}
        okText={alertOkText}
        description={alertDescription}
        cancelText="Cancelar" 
        open={showAlert} 
        setOpen={setShowAlert}
        onClose={() => setAction('')}
      />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Paper>
  );
}