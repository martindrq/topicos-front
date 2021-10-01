import { useState } from "react";
import {
  Main,
  Heading,
  Sidebar,
  Avatar,
  Button,
  Nav,
  Grid,
  TextInput,
  Form,
  FormField,
  Box,
} from "grommet";
import * as Icons from "grommet-icons";

import "./App.css";

function App() {
  const [value, setValue] = useState({});

  return (
    <div className="App">
      <Grid
        rows={["xsmall", "xlarge"]}
        columns={["xsmall", "full"]}
        gap="small"
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="header" background="brand" />
        <Box gridArea="nav" background="light-5">
          <Sidebar
            background="brand"
            round="small"
            header={
              <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
            }
            footer={<Button icon={<Icons.Help />} hoverIndicator />}
          >
            <Nav gap="small">
              <Button icon={<Icons.Projects />} hoverIndicator />
              <Button icon={<Icons.Clock />} hoverIndicator />
            </Nav>
          </Sidebar>
        </Box>
        <Box gridArea="main" background="light-2">
          <Main pad="large">
            <Heading>Something</Heading>
            <Form
              value={value}
              onChange={(nextValue) => setValue(nextValue)}
              onReset={() => setValue({})}
              onSubmit={({ value }) => {}}
            >
              <FormField name="name" htmlFor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
              </FormField>
              <FormField name="name" htmlFor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
              </FormField>
              <FormField name="name" htmlFor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
              </FormField>
              <FormField name="name" htmlFor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
              </FormField>
              <Box direction="row" gap="medium">
                <Button type="submit" primary label="Submit" />
                <Button type="reset" label="Reset" />
              </Box>
            </Form>
          </Main>
        </Box>
      </Grid>
    </div>
  );
}

export default App;
