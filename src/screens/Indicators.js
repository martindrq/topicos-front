import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  Grid,
  Typography,
  Stack,
  Box,
  IconButton,
  Paper,
  Tooltip,
  Fab,
  List,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { green, yellow, red, grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Assignment, Add, Delete, ExpandMore } from "@mui/icons-material";
import { useIndicators } from "../hooks";

import data from "../mock-data/indicators.json";

const Indicators = () => {
  const [indicators] = useIndicators();

  const handleRemove = (id) => {
    /* Esto no es necesario ya que lo hace el backend  
    const newList = list.filter((indicador) => indicador.id !== id);
    setList(newList);
    */
  };

  const element = indicators.map((indicator) => (
    <ListItem key={indicator.id} sx={{ mt: 1, mb: 1 }}>
      <Accordion
        style={{ height: "100%", width: "100%", backgroundColor: "#f3f3f3" }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Grid item xs={1}>
            <Avatar sx={{ bgcolor: grey[500] }}>
              <Assignment />
            </Avatar>
          </Grid>
          <Grid item xs={8}>
            <ListItemText primary={indicator.name} secondary={indicator.area} />
          </Grid>
          <Grid item xs={4}>
            <Typography gutterBottom component="div">
              <small>Unidad de medida:</small> {indicator.value}{" "}
              {indicator.unit}
            </Typography>
          </Grid>
        </AccordionSummary>

        <AccordionDetails>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12}>
              <Typography gutterBottom component="div">
                {indicator.description}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography gutterBottom component="div">
                Tipo de formula: {indicator.type}
              </Typography>
            </Grid>
            {indicator.type !== "Directa" && (
              <Grid item xs={5}>
                <Typography gutterBottom component="div">
                  Formula:
                </Typography>
              </Grid>
            )}
            <Grid item xs={0}>
              <Tooltip title="Eliminar" placement="right">
                <IconButton
                  color="primary"
                  aria-label="Eliminar"
                  onClick={() => handleRemove(indicator.id)}
                >
                  <Delete />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Divider sx={{ mt: 5, mb: 2 }}></Divider>
    </ListItem>
  ));

  return (
    <List sx={{ mt: 2, mb: 2 }}>
      <ListItem row>
        <Typography variant="h6">Indicadores</Typography>
      </ListItem>

      {element}

      <Paper sx={{ position: "fixed", bottom: 0, right: 0 }} elevation={0}>
        <Tooltip title="Agregar" placement="right">
          <Fab
            sx={{ position: "absolute", bottom: 20, right: 20 }}
            color="primary"
            aria-label="add"
            component={Link}
            to="/indicadores/crear"
          >
            <Add />
          </Fab>
        </Tooltip>
      </Paper>
    </List>
  );
};
export default Indicators;
