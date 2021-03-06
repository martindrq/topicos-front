import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Tooltip, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';

import { useUsers, useUserContext } from "../hooks";
import Table from '../components/Table';

const columns = [
  { id: 'mail', label: 'Correo electrónico', minWidth: 170 },
  { id: 'company', label: 'Empresa', minWidth: 170 },
  { id: 'rut', label: 'RUT', minWidth: 170 }
];

const Users = () => {

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const {user} = useUserContext();
  const [users,, deleteUser] = useUsers(user?.token, setLoading);
  const history = useHistory();

  useEffect(() => {
    const renderedUsers = [...users].map(user => ({id: user.id, mail: user.mail, company: user.company.name, rut: user.company.rut}))
    setRows(renderedUsers)
  }, [users])

  const onEdit = (itemId) => {
    const item = rows.find(item => item.id === itemId)
    history.push('/usuarios/editar', { isEdit: true, item, })
  }

  const onDelete = async (item) => {
    await deleteUser({ id: item })
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          Usuarios
        </Typography>
        <Table columns={columns} rows={rows} onEdit={onEdit} onDelete={onDelete} canEdit={false} loadingData={loading}/>
      </Grid>
      <Paper sx={{ position: "fixed", bottom: 0, right: 0}} elevation={0} >
        <Tooltip title="Agregar" placement="right">  
          <Fab sx={{ position: 'absolute', bottom: 40, right: 50 }} color="primary" aria-label="add" component={Link} to="/usuarios/crear">
            <Add/>
          </Fab>
        </Tooltip>
      </Paper>
    </Grid>
  );
}
export default Users
