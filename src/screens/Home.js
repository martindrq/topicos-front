import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  Grid,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { green, red, yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Assignment, Add, Delete } from "@mui/icons-material";
import { useIndicators } from "../hooks";

const Home = () => {
  const [indicators] = useIndicators();

  return (
    <div>
      <List>
        {indicators.map((indicator) => (
          <div key={indicator.id}>
            <ListItem sx={{ mt: 2, mb: 2 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={0}>
                    <Avatar sx={{ bgcolor: red[500] }}>
                      <Assignment />
                    </Avatar>
                  </Grid>
                  <Grid item xs={3}>
                    <ListItemText
                      primary={indicator.name}
                      secondary={indicator.frecuency}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography gutterBottom component="div">
                      2500 L, m3
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography gutterBottom component="div">
                      {indicator.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      variant="outlined"
                      startIcon={<Delete />}
                      onClick={() => console.log("Click Deleted!")}
                    ></Button>
                  </Grid>
                </Grid>
              </Box>
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>

      <Stack direction="column" alignItems="center" spacing={2}>
        <Stack direction="row" spacing={12}>
          <Button
            variant="outlined"
            startIcon={<Add />}
            component={Link}
            to="/add-indicator"
          >
            Agregar
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};
export default Home;
