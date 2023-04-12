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
// import '../Exam.css'
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SelectSmall() {


    return(
        <div style={{display:'flex',alignItems:"center",flexDirection:'column'}}>
          <div style={{display:'flex',alignItems:"center"}}>
               <TextField
style={{width:200,margin:30}}
          id="outlined-number"
          label="Number of Questions"
          type="number"
          InputLabelProps={{
            shrink: true,
           
          }}
        />
<Autocomplete
      disablePortal

      id="combo-box-demo"
      options={timeAlotted}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Time" />}
    />
    </div>
    
       <TextField
          id="outlined-multiline-flexible"
          label="Questions"
          multiline
          maxRows={10}
          style={{width:450,left:19}}
        />
        <div style={{flex:1,flexDirection:'Column',marginLeft:150}}> 
          <TextField
          id="outlined-multiline-flexible"
          label="Add Choice(A)"
          multiline
          maxRows={10}
          style={{marginTop :20,marginBottom:20,marginRight:30,width:250}}
        />
           <TextField
          id="outlined-multiline-flexible"
          label="Add Choice(B)"
          multiline
          maxRows={10}
          style={{marginTop :20,marginBottom:20,marginRight:30,width:250}}
        />
        </div>
        <div style={{flex:1,flexDirection:'Column',marginLeft:150}}> 
           <TextField
          id="outlined-multiline-flexible"
          label="Add Choice(C)"
          multiline
          maxRows={10}
          style={{marginTop :20,marginBottom:20,marginRight:30,width:250}}
        />
           <TextField
          id="outlined-multiline-flexible"
          label="Add Choice(D)"
          multiline
          maxRows={10}
          style={{marginTop :20,marginBottom:20,marginRight:30,width:250}}
        />
         
        </div>
        <Button variant="contained" href="#contained-buttons"  style={{marginTop :-5,marginBottom:20,marginLeft:-280}}>
  Add Choices
</Button>

  <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={choice}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
     
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 450, marginLeft:35}}
      renderInput={(params) => (
        <TextField {...params} label="Answer" placeholder="Choose Your Answer" />
      )}
    />
     <TextField
          id="outlined-multiline-flexible"
          label="Hint One"
          multiline
          maxRows={10}
          style={{width:450,left:19,marginTop:20,marginBottom:20}}
        />
         <TextField
          id="outlined-multiline-flexible"
          label="Hint Two"
          multiline
          style={{width:450,left:19,marginBottom:20}}
          maxRows={10}
        />

<Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={Topic}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
     
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 450, marginLeft:35}}
      renderInput={(params) => (
        <TextField {...params} label="Topic" placeholder="Add Topic" />
      )}
    />
          <TextField
          id="outlined-multiline-flexible"
          label="Reference Video Link"
          multiline
          style={{width:450,left:19,marginTop:20,marginBottom:20}}
          maxRows={10}
        />
              <Button variant="contained" href="#contained-buttons">
  Add Question
</Button>
         
        </div>
    )
}

const choice = [
    { title: 'Answer One', key: "A" },
    { title: 'Answer Two',key: "B" },
    { title: 'Answer Three', key: "C" },
    { title: 'Answer Four', key: "D" }]

const timeAlotted = [
      { label: '45 min', key: 1 },
      { label: '1 hour',key: 2 },
      { label: '1:30 hour', key: 3 },
      { label: '2 hours', key: 4 }]

const Topic = [
        { title: 'Java', key: "A" },
        { title: 'Jvascript',key: "B" },
        { title: 'Django', key: "C" },
        { title: 'React', key: "D" },
        { title: 'WordPress', key: "D" },
      ]