import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import StudentExamPageTwo from './StudentExamPageTwo';

const examType = React.createContext();

export default function StudentExamPageOne() {

  const [val,setVal] = React.useState('')
    const [level, setLevel] = React.useState('');
    const [ExamType, setExamType] = React.useState('');
    const [Field, setField] = React.useState('');
    const [NumberOfQuestions, setNumberOfQuestions] = React.useState('');
    const [examTypeTwo , setExamTypeTwo] = React.useState('')

  const  data = [ExamType ,level ,NumberOfQuestions]
    const handleChange = (event) => {
      setLevel(event.target.value);
    };
    const handleChangeExamType = (event) => {
       setExamType(event.target.value);
      };
      const handleChangeField = (event) => {
        setField(event.target.value);
       };
       const handleChangeNumber = (event) => {
        setNumberOfQuestions(event.target.value);
       };
     
     <examType.Provider value = {ExamType}>
      <StudentExamPageTwo/>
      </examType.Provider>

       const examMode = ()=>{
        if(level =="Grade 12 Exit Exam" || level == "Remedian") {
          return(
          <div>
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={ secondarySubjectNatural}
            sx={{ width: 300 ,marginTop:3}}
            renderInput={(params) => <TextField {...params} label="Subject" />}
          />
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={ yearData}
            sx={{ width: 300 ,marginTop:3}}
            renderInput={(params) => <TextField {...params} label="Year" />}
          />
          </div>
          )
        }
        
        else if(level =="University Exit Exam"){
        
   return(
    <div>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={uniFields}
      sx={{ width: 300 ,marginTop:3}}
      renderInput={(params) => <TextField {...params} label="Course" />}
    />
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={ yearData}
    sx={{ width: 300 ,marginTop:3}}
    renderInput={(params) => <TextField {...params} label="Year" />}
  />
  </div>
  )
        }

       }
       const practiceMode = ()=>{
        if(level =="Grade 12 Exit Exam" || level == "Remedian") {
          return(
          <div>
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={ secondarySubjectNatural}
            sx={{ width: 300 ,marginTop:3}}
            renderInput={(params) => <TextField {...params} label="Subject" />}
          />
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={ yearData}
            sx={{ width: 300 ,marginTop:3}}
            renderInput={(params) => <TextField {...params} label="Year" />}
          />
          </div>
          )
        }
        
        else if(level =="University Exit Exam"){
        
   return(
    <div>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={uniFields}
      sx={{ width: 300 ,marginTop:3}}
      renderInput={(params) => <TextField {...params} label="Topic" />}
    />
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={ yearData}
    sx={{ width: 300 ,marginTop:3}}
    renderInput={(params) => <TextField {...params} label="Year" />}
  />
  </div>
  )
        }

       }
       const quizMode = ()=>{
        if(level =="Grade 12 Exit Exam" || level == "Remedian") {
return(
  <div>

<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={ secondarySubjectNatural}
      sx={{ width: 300 ,marginTop:3}}
      renderInput={(params) => <TextField {...params} label="Subject" />}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={ chapter}
      sx={{ width: 300 ,marginTop:3}}
      renderInput={(params) => <TextField {...params} label="Chapter" />}
    />
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={ topic}
      sx={{ width: 300 ,marginTop:3}}
      renderInput={(params) => <TextField {...params} label="Topic" />}
    />

<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">No. of Questions</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={NumberOfQuestions}
          onChange={handleChangeNumber}
          label="No. of Questions"
        >
          <MenuItem value="">
            <em>10</em>
          </MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={30}>60</MenuItem>
          <MenuItem value={30}>80</MenuItem>
        
        
        </Select>
      </FormControl>
  </div>
)


        }
        else if(level =="University Exit Exam"){
        
          return(
           <div>

<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={ uniFields}
      sx={{ width: 300 ,marginTop:3}}
      renderInput={(params) => <TextField {...params} label="Course" />}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={ Unichapter}
      sx={{ width: 300 ,marginTop:3}}
      renderInput={(params) => <TextField {...params} label="Chapter" />}
    />
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={GeneralUniField}
      sx={{ width: 300 ,marginTop:3}}
      renderInput={(params) => <TextField {...params} label="Topic" />}
    />
     <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">No. of Questions</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={NumberOfQuestions}
          onChange={handleChangeNumber}
          label="No. of Questions"
        >
          <MenuItem value="">
            <em>10</em>
          </MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={30}>60</MenuItem>
          <MenuItem value={30}>80</MenuItem>
        
        
        </Select>
      </FormControl>


            </div>
            )
          }

       }
      
    return(

        <div style={{marginLeft:400}}>
         
             <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={level}
          onChange={handleChange}
          label="Type"
        >
          <MenuItem value="">
          
          </MenuItem>
          <MenuItem value={"Grade 12 Exit Exam"}>Grade 12 Exit Exam</MenuItem>
          <MenuItem value={"Remedian"}>Remedian</MenuItem>
          <MenuItem value={"University Exit Exam"}>University Exit Exam</MenuItem>
        
       
        </Select>
      </FormControl>
  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Mode</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={ExamType}
          onChange={handleChangeExamType}
          label="Mode"
        >
          <MenuItem value="">
          
          </MenuItem>
          <MenuItem value={"Exam Mode"}>Exam Mode</MenuItem>
          <MenuItem value={"Quiz Mode"}>Quiz Mode</MenuItem>
          <MenuItem value={"Practice Mode"}>Practice Mode</MenuItem>
        
        </Select>
        
      </FormControl>

{
  ExamType == "Exam Mode" ? examMode() :ExamType == "Quiz Mode" ? quizMode():
  ExamType == "Practice Mode" ? practiceMode(): ''
}
  
  
        </div>
    )
}
export { examType}
const GeneralUniField = [
    { label: 'OOP', year: 5 },
    { label: 'Web Development', year: 7 },
    { label: 'Mobile Development', year: 3 }]
const SecondaryFields = [
        { label: 'Natural Science', year: 5 },
        { label: 'Social Science', year: 4 },
    ]

const uniFields = [
        { label: 'Software Engineering', year: 5 },
        { label: 'IT Engineering', year: 4 },
        { label: 'Civil Enineering', year: 7 },
        { label: 'Biomedical Engineering', year: 3 },
        { label: 'Medicine', year: 3 },
        { label: 'Management', year: 3 },
        { label: 'Sales', year: 3 }
    ]
const secondarySubjectNatural = [
    { label: 'Maths', year: 5 },
    { label: 'Biology', year: 4 },
    { label: 'Civics', year: 7 },
    { label: 'Physics', year: 3 },
    { label: 'Chemistry', year: 2 }

]
const secondarySubjectSocial = [
  { label: 'Maths', year: 5 },
  { label: 'History', year: 4 },
  { label: 'Geography', year: 7 },
  { label: 'English', year: 3 },


]
const yearData = [
  { label: '2014', year: 5 },
  { label: '2013', year: 4 },
  { label: '2012', year: 7 },
  { label: '2011', year: 3 },


]
const chapter = [
  { label: 'Chapter One', year: 5 },
  { label: 'Chapter Two', year: 4 },
  { label: 'Chapter Three', year: 7 },
  { label: 'Chapter Four', year: 3 },


]
const topic= [
  { label: 'Cells', year: 5 },
  { label: 'Brain', year: 4 },
  { label: 'Heart', year: 7 },
  { label: 'Photosynthesis', year: 3 },
]
const Unichapter = [
  { label: 'Chapter One', year: 5 },
  { label: 'Chapter Two', year: 4 },
  { label: 'Chapter Three', year: 7 },
  { label: 'Chapter Four', year: 3 },


]
const Unitopic= [
  { label: 'HTML', year: 5 },
  { label: 'CSS', year: 4 },
  { label: 'JavaScript', year: 7 },
  { label: 'JSON', year: 3 },


]
