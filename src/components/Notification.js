import * as React from 'react'
import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Notification({text, setText, severity = "error"}) {
  const [open, setOpen] = React.useState(true);

  return (
    <Collapse in={open}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setText('');
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
        severity={severity}
      >
        {text}
      </Alert>
    </Collapse>
  )
}