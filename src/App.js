import * as React from "react";
import PageLayout from "./components/PageLayout";
import Grid from '@mui/material/Grid';

//to-do add react router, and import components from /screens
function App() {
  return (
      <PageLayout>
        <Grid item xs={12} md={12} lg={12}>
           <p>Hello material</p>
        </Grid>
      </PageLayout>
  );
}

export default App;
