import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Tooltip, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';

import { useAreas } from "../hooks";
import Table from '../components/Table';

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 170 },
];

const Companies = () => {

  const [areas,,, deleteArea] = useAreas();
  const history = useHistory();

  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(areas)
  }, [areas])

  const onEdit = (itemId) => {
    const item = rows.find(item => item.id === itemId)
    history.push('/areas/editar', { isEdit: true, item, })
  }

  const onDelete = async (item) => {
    await deleteArea({ id: item })
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Empresas
        </Typography>
        <Table columns={columns} rows={rows} onEdit={onEdit} onDelete={onDelete} />
      </Grid>
      <Paper sx={{ position: "fixed", bottom: 0, right: 0}} elevation={0} >
        <Tooltip title="Agregar" placement="right">  
          <Fab sx={{ position: 'absolute', bottom: 40, right: 50 }} color="primary" aria-label="add" component={Link} to="/empresas/crear">
            <Add/>
          </Fab>
        </Tooltip>
      </Paper>
    </Grid>
  );
}
export default Companies