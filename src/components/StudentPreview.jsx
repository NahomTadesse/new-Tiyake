import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import StudentExamPageOne from './StudentExamPageOne';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import img1 from '../assets/images/profile.png'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import img2 from '../assets/images/hourglass.png'
import Input from '@mui/material/Input';

import InputAdornment from '@mui/material/InputAdornment';

import AccountCircle from '@mui/icons-material/AccountCircle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function StudentPreview(){
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const [x,setX] = React.useState(1)
const [showSecond,setShowSecond] = React.useState(false)
///////////Pratice Mode
  const preview=()=>{
const profiles = [
{
  Name :'Nahom',
  Comment : 'Great Question'
},
{
  Name :'Henock',
  Comment : `What's the answer for question number two`
},
{
  Name :'Gedion',
  Comment : 'I think the answer is B'
},
{
  Name :'Menassie',
  Comment : `No it's D`
}

]
const questions =[
{
  question : 'what  is web development?',
  option_A : "Answer One for Question 1",
  option_B : "Answer Two for Question 1",
  option_C : "Answer Three for Question 1",
  option_D : "Answer Four for Question 1",
  Hint_one :'first hint for this question1',
  Hint_two :'Second hint for this question1',
  Explanation : 'Explanation with answer for this question 1',
  Answer : 'Answer Three'
},
{
  question : 'what  is Mobile development?',
  option_A : "Answer One for Question 2",
  option_B : "Answer Two for Question 2",
  option_C : "Answer Three for Question 2",
  option_D : "Answer Four for Question 2",
  Hint_one :'first hint for this question 2',
  Hint_two :'Second hint for this question 2',
  Explanation : 'Explanation with answer for this question 2',
  Answer : 'Answer One'
},
{
  question : 'what  is OOP?',
  option_A : "Answer One for Question 3",
  option_B : "Answer Two for Question 3",
  option_C : "Answer Three for Question 3",
  option_D : "Answer Four for Question 3",
  Hint_one :'first hint for this question 3',
  Hint_two :'Second hint for this question 3',
  Explanation:'Explanation with answer for this question 3',
  Answer : 'Answer Four'
},


]


    return(
      <div style={{display:'flex',flexDirection:'row' ,marginLeft:60}}>
       

<div style={{width:500,height:400,borderWidth:1,borderColor:'blue',marginTop:20,borderRadius:10,boxShadow:20,
}}>

{questions.map((ques,index)=>{

return(
<div style={{margin:20,flexDirection:'column'}}>
{/* <div style={{fontSize:18 , color :'blue'}}>
  
</div> */}
{index+1 == x &&
<div>
<FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{`${[index +1]}. ${ques.question}`}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={ques.Answer}
        name="radio-buttons-group"
        style={{marginBottom:30,marginLeft:20}}
      >
        <FormControlLabel value="Answer One" control={<Radio />} label={ques.option_A}/>
        <FormControlLabel value="Answer Two" control={<Radio />} label={ques.option_B} />
        <FormControlLabel value="Answer Three" control={<Radio />} label={ques.option_C} />
        <FormControlLabel value="Answer Four" control={<Radio />} label={ques.option_D}/>
      </RadioGroup>
    

    </FormControl>
    { index!=0 &&
    
    <Button variant="contained" href="#contained-buttons"  style={{marginTop :20,marginBottom:20,marginLeft:10,width:50,
          alignSelf:'flex-end',marginLeft:10,marginTop:200,backgroundColor:"#ff5f1f"}}
          onClick={()=>{setX(x-1)}}
          >
  Prev
   </Button>}
   {index !== questions.length-1 &&
        <Button variant="contained" href="#contained-buttons"  style={{marginTop :20,marginBottom:20,marginLeft:10,width:50,
          alignSelf:'flex-end',marginLeft:10,marginTop:200,backgroundColor:"#ff5f1f"}}
          onClick={()=>{ index == questions.length-1 ? handleClickOpen() : setX(x+1)  }}
          >
   { index == questions.length-1 ? 
   
   'Finish' :'Next'}
   </Button>
   
  
   }

   <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Exam Result"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          {` You got 2 questions out of 3. Good Job :)`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
      {  index+1 == x &&
    <div style={{fontSize:18}}>
      {ques.Explanation}


    </div>}

   </div>
}


</div>



)

})}


</div>



<div style={{height:'wrap-content',width:400,borderWidth:1,borderColor:'blue',marginTop:20,borderRadius:10,
marginLeft:50,scrollBehavior:'smooth'}}>
  

{questions.map((ques,index)=>{

return(
  
  <div style={{margin:20}}>
  
    {/* {  index+1 == x &&
    <div style={{fontSize:18}}>
      {ques.Explanation}


    </div>} */}
      </div>
)})
  }
  <div>
    <div style={{backgroundColor:'#ff5f1f',marginBottom:10}}>
<section style={{textAlign:'center',color:'white'}}> Comment Section</section>
</div>
{profiles.map((pro,index)=>{
  return(
    <div style={{}}> 
<div style={{display:'flex', flexDirection:'row',margin:3}}> 
<img src={img1} alt="" height="20" width="20"/>
<section style={{fontWeight:'bold',left:10}}>
{pro.Name}
</section>
</div>
<div style={{marginLeft:25, marginBottom:10}}>
{pro.Comment}
</div>

</div>

  )
  
})

}
<FormControl variant="standard" style={{position:'relative',marginLeft:10,top:10}}>
        <InputLabel htmlFor="input-with-icon-adornment">
        Add Comment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>

  </div>
</div>

      </div>
    )
  }
return(
    <div>
        {preview()}
    </div>
)
}