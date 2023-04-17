import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



export default function SelectSmall() {
  const [examType, setExamType] = React.useState('Exam Type');
  const [grade, setGrade] = React.useState('');
  const [year, setYear] = React.useState('');
  const [educationLevel, setEductionLevel] = React.useState('');

  const handleChange = (event) => {
    setExamType(event.target.value);
  };
  const handllevelChange = (event) => {
    setEductionLevel(event.target.value);
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };


const uniYear=()=>{
    return(
        <div style={{flex:1,flexDirection:'row',marginRight:40}}>
      


    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={uniFields}
      sx={{ width: 300 ,marginTop:3}}
      renderInput={(params) => <TextField {...params} label="Field" />}
    />
 {/* <FormControl sx={{ m: 1, minWidth: 120,marginTop:3,marginBottom:3 ,right:5}} size='medium'>
      <InputLabel id="demo-select-medium">Year</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={year}
        label="Exam Type"
        onChange={handleYearChange}
      >
        <MenuItem value={1}>Year 1</MenuItem>
        <MenuItem value={2}>Year 2</MenuItem>
        <MenuItem value={3}>Year 3</MenuItem>
        <MenuItem value={4}>Year 4</MenuItem>
        <MenuItem value={5}>Year 5</MenuItem>
        
      </Select>
    </FormControl> */}
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={UniversitySubjects}
      sx={{ width: 300 ,marginTop:5}}
      renderInput={(params) => <TextField {...params} label="Course" />}
    />
        </div>
    )
}
const seconGrade=()=>{

    return(
        <div >
 {/* <FormControl sx={{ m: 1, minWidth: 120,marginRight:30,marginTop:3  }} size='medium'>
      <InputLabel id="demo-select-medium">Grade</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={grade}
        label="Exam Type"
        onChange={handleGradeChange}
      >
        <MenuItem value={9}>Grade 9</MenuItem>
        <MenuItem value={10}>Grade 10</MenuItem>
        <MenuItem value={11}>Grade 11</MenuItem>
        <MenuItem value={12}>Grade 12</MenuItem>
        
      </Select>
    </FormControl> */}
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={ secondarySchoolSubjects}
      sx={{ width: 300,marginTop:3,marginLeft:-4 }}
      renderInput={(params) => <TextField {...params} label="Course" />}
    />
        </div>
    )
}

  return (
    <div style={{display:'flex',alignItems:"center",flexDirection:'column',minHeight:300}}>
     <div>
    {/* <FormControl sx={{ m: 1, minWidth: 120 }} size='medium'>
      <InputLabel id="demo-select-medium">Exam Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={examType}
        label="Exam Type"
        onChange={handleChange}
      >
        <MenuItem value={10}>Exam Mode</MenuItem>
        <MenuItem value={10}>Quiz Mode</MenuItem>
        <MenuItem value={20}>Practice Mode</MenuItem>
        
      </Select>
    </FormControl> */}
<FormControl sx={{ m: 1, minWidth: 120,display:'flex',justifyContent:'center',marginBottom:10 }} size='medium'>
      <InputLabel id="demo-select-medium">Exit Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={educationLevel}
        label="Exit Exam"

        onChange={handllevelChange}
      >
        <MenuItem value={'secondary'}>Grade 12 Exit Exam</MenuItem>
        <MenuItem value={'university'}>University Exit Exam</MenuItem>
        
      </Select>
    </FormControl>
    <div style={{display:'flex',flexDirection:"row",marginBottom:80}}>
         
         <Button onClick={()=> setExamType('Exam Mode')} 
         style={{marginRight:20,backgroundColor:"#ff5f1f",color:'white',width:200}} > Exam Mode</Button>
         <Button onClick={()=> setExamType('Quiz Mode')}  style={{marginRight:20,backgroundColor:"#ff5f1f",color:'white',width:200}}> Quiz Mode</Button>
         <Button onClick={()=> setExamType('Practice Mode')} style={{backgroundColor:"#ff5f1f",color:'white',width:200}}> Practice Mode</Button>
         
         </div>




    
    </div>
    {educationLevel == 'secondary' ? seconGrade() : educationLevel == 'university' ? uniYear() : '' }
    <TextField
          disabled
          id="outlined-disabled"
          label={examType}
          placeholder={examType}
          sx={{ width: 300,marginTop:3,marginLeft:-4 }}
        />
    </div>
  );
}
const uniFields = [
    { label: 'Software Engineering', year: 5 },
    { label: 'IT Engineering', year: 4 },
    { label: 'Medicine', year: 7 },
    { label: 'Management', year: 3 }]

const secondarySchoolSubjects =  [
  { label: 'Physics', grade: 12 },
  { label: 'Biology', grade: 12 },
  { label: 'History', grade: 12 },
  { label: 'Mathemathics', grade: 12 }]

  const UniversitySubjects =  [
    { label: 'OOP', year: 4 },
    { label: 'Database',year: 3 },
    { label: 'Networking', year: 2 },
    { label: 'Web Development', year: 1 }]