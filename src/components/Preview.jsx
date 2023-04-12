import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';


export default function Preview() {

    return(
        <div style={{display:'flex',flexDirection:'column'}}>
<FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Question 1. Web Development is?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Answer Four"
        name="radio-buttons-group"
        style={{marginBottom:30}}
      >
        <FormControlLabel value="Answer One" control={<Radio />} label="Answer One" />
        <FormControlLabel value="Answer Two" control={<Radio />} label="Answer Two" />
        <FormControlLabel value="Answer Three" control={<Radio />} label="Answer Three" />
        <FormControlLabel value="Answer Four" control={<Radio />} label="Answer Four" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Question 2. Mobile App Development is?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Answer Two"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Answer One" control={<Radio />} label="Answer One" />
        <FormControlLabel value="Answer Two" control={<Radio />} label="Answer Two" />
        <FormControlLabel value="Answer Three" control={<Radio />} label="Answer Three" />
        <FormControlLabel value="Answer Four" control={<Radio />} label="Answer Four" />
      </RadioGroup>
    </FormControl>

        </div>
    )
}