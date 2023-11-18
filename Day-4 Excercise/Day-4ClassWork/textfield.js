import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({form}) {
  return (
    <div className='text'>

        <TextField id="standard-basic" label="Name" variant="standard" />
    </div>
  );
}