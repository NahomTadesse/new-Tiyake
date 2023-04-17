import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

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
import img2 from '../assets/images/hourglass.png';
import StudentExamPageOne from './StudentExamPageOne';
import { examType } from './StudentExamPageOne';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

import InputAdornment from '@mui/material/InputAdornment';

import AccountCircle from '@mui/icons-material/AccountCircle';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function StudentExamPageTwo(props){



  const [open, setOpen] = React.useState(false);
const [examTypeTwo,setExamTypeTwo] = React.useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const [x,setX] = React.useState(1)
const [showFirst,setShowFirst] = React.useState(false)
const [showSecond,setShowSecond] = React.useState(false)
const [showExplanation,setShowExplanation] = React.useState(false)
///////////Pratice Mode
  const practiceMode=()=>{
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
  Explanation : 'Explanation with answer for this question 1'
},
{
  question : 'what  is Mobile development?',
  option_A : "Answer One for Question 2",
  option_B : "Answer Two for Question 2",
  option_C : "Answer Three for Question 2",
  option_D : "Answer Four for Question 2",
  Hint_one :'first hint for this question 2',
  Hint_two :'Second hint for this question 2',
  Explanation : 'Explanation with answer for this question 2'
},
{
  question : 'what  is OOP?',
  option_A : "Answer One for Question 3",
  option_B : "Answer Two for Question 3",
  option_C : "Answer Three for Question 3",
  option_D : "Answer Four for Question 3",
  Hint_one :'first hint for this question 3',
  Hint_two :'Second hint for this question 3',
  Explanation:'Explanation with answer for this question 3'
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
        name="radio-buttons-group"
        style={{marginBottom:30,marginLeft:20}}
        onClick={()=>{setShowExplanation(true)}}
      >
        <FormControlLabel value="Answer One" control={<Radio />} label={ques.option_A} />
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
        <Button variant="contained" href="#contained-buttons"  style={{marginTop :20,marginBottom:20,marginLeft:10,width:50,
          alignSelf:'flex-end',marginLeft:10,marginTop:200,backgroundColor:"#ff5f1f"}}
          onClick={()=>{ index == questions.length-1 ? handleClickOpen() : setX(x+1)  }}
          >
   { index == questions.length-1 ? 
   
   'Finish' :'Next'}
   </Button>
{  showExplanation && <div>
      {ques.Explanation}
      </div>}
     
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
          <div>
              <ProgressBar now={80.5} />
            <h1 style={{color:"#ff5f1f"}}>Score</h1> 2/3
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Correctly gotten qestions</h1>Question Nmber : 1,3
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Missed Qestions</h1> Question Nmber : 2
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Time Taken</h1> 20 Minutes
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Average</h1> 80.5%
          </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>


   </div>
}


</div>



)

})}


</div>



<div style={{width:400,borderWidth:1,borderColor:'blue',marginTop:20,borderRadius:10,
marginLeft:50}}>
  

{questions.map((ques,index)=>{

return(
  
  <div style={{margin:20}}>
  
    {  index+1 == x &&
 

    <div style={{fontSize:18}}>
         <Button style={{fontSize:14}} onClick={()=>{ setShowFirst(!showFirst)
    
      
  }}>{ showFirst ? "Hide Hint":"Show Hint ?"}</Button>
  

  { showFirst &&  
  <div>
 { ques.Hint_one}
    <Button style={{fontSize:14}} onClick={()=>{ setShowSecond(!showSecond)
    
      
    }}>{ showSecond ? "Show Less":"Show More"}</Button>
    </div>
  }
{    showSecond && showFirst  &&   <div style={{margintop:10}}>
      {ques.Hint_two}
    
      </div>}


    </div>}
      </div>
)})
  }
  <div>
    <div style={{backgroundColor:"#ff5f1f"}}>
<div style={{textAlign:'center',color:'white'}}> Comment Section</div>
</div>
{profiles.map((pro,index)=>{
  return(
    <div > 
<div style={{display:'flex', flexDirection:'row'}}> 
<img src={img1} alt="" height="20" width="20"/>
<div style={{fontWeight:'bold',left:10}}>
{pro.Name}
</div>
</div>
<div style={{marginLeft:25, marginBottom:10}}>
{pro.Comment}
</div>
</div>
  )
})

}

      <FormControl variant="standard" style={{position:'relative',marginLeft:10,marginTop:10,marginBottom:5}}>
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
/////////////////Exam Mode
const examMode=()=>{
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
    Explanation : 'Explanation with answer for this question 1'
  },
  {
    question : 'what  is Mobile development?',
    option_A : "Answer One for Question 2",
    option_B : "Answer Two for Question 2",
    option_C : "Answer Three for Question 2",
    option_D : "Answer Four for Question 2",
    Hint_one :'first hint for this question 2',
    Hint_two :'Second hint for this question 2',
    Explanation : 'Explanation with answer for this question 2'
  },
  {
    question : 'what  is OOP?',
    option_A : "Answer One for Question 3",
    option_B : "Answer Two for Question 3",
    option_C : "Answer Three for Question 3",
    option_D : "Answer Four for Question 3",
    Hint_one :'first hint for this question 3',
    Hint_two :'Second hint for this question 3',
    Explanation:'Explanation with answer for this question 3'
  },
  
  
  ]
  
  
      return(
        <div style={{display:'flex',flexDirection:'row' ,marginLeft:170}}>
         
  
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
          name="radio-buttons-group"
          style={{marginBottom:30,marginLeft:20}}
        >
          <FormControlLabel value="Answer One" control={<Radio />} label={ques.option_A} />
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
          <Button variant="contained" href="#contained-buttons"  style={{marginTop :20,marginBottom:20,marginLeft:10,width:50,
            alignSelf:'flex-end',marginLeft:10,marginTop:200,backgroundColor:"#ff5f1f"}}
            onClick={()=>{ index == questions.length-1 ? handleClickOpen() : setX(x+1)  }}
            >
     { index == questions.length-1 ? 
     
     'Finish' :'Next'}
     </Button>
  
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
            <div>
            <ProgressBar now={80.5} />
            <h1 style={{color:"#ff5f1f"}}>Score</h1> 2/3
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Correctly gotten qestions</h1> Question Nmber : 1,3
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Missed Qestions</h1> Question Nmber : 1
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Time Taken</h1> 20 Minutes
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Average</h1> 80.5%
          </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Ok</Button>
            {/* <Button onClick={handleClose}>Agree</Button> */}
          </DialogActions>
        </Dialog>
  
  
     </div>
  }
  
  
  </div>
  
  
  
  )
  
  })}
  
  
  </div>
  
  
  
  {/* <div style={{height:'wrap-content',width:400,borderWidth:1,borderColor:'blue',marginTop:20,borderRadius:10,
  marginLeft:50,scrollBehavior:'smooth'}}>
    
  
  {questions.map((ques,index)=>{
  
  return(
    
    <div style={{margin:20}}>
    
      {  index+1 == x &&
      <div style={{fontSize:18}}>
      {ques.Hint_one}
  {    showSecond &&   <div style={{margintop:10}}>
        {ques.Hint_two}
        <div>
        {ques.Explanation}
        </div>
        </div>}
  
      <Button style={{fontSize:14}} onClick={()=>{ setShowSecond(!showSecond)
      
        
        }}>{ showSecond ? "Show Less":"Show More"}</Button>
      </div>}
        </div>
  )})
    }
    <div>
      <div style={{backgroundColor:'blue'}}>
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
  
    </div>
  </div> */}
  <div style={{height:40,width:250,borderWidth:1,display:'flex',flexDirection:'row',marginTop:150,marginLeft:20}}>
    <img src={img2} alt="" height={30} width='20' style={{padding:1}} />
    <div style={{marginTop:10}}>{`26 Minutes | 16 Seconds Left`}</div>

  </div>
  <></>
  
  
        </div>
      )
    }

//////////////////Quiz Mode
const quizMode=()=>{
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
    Explanation : 'Explanation with answer for this question 1'
  },
  {
    question : 'what  is Mobile development?',
    option_A : "Answer One for Question 2",
    option_B : "Answer Two for Question 2",
    option_C : "Answer Three for Question 2",
    option_D : "Answer Four for Question 2",
    Hint_one :'first hint for this question 2',
    Hint_two :'Second hint for this question 2',
    Explanation : 'Explanation with answer for this question 2'
  },
  {
    question : 'what  is OOP?',
    option_A : "Answer One for Question 3",
    option_B : "Answer Two for Question 3",
    option_C : "Answer Three for Question 3",
    option_D : "Answer Four for Question 3",
    Hint_one :'first hint for this question 3',
    Hint_two :'Second hint for this question 3',
    Explanation:'Explanation with answer for this question 3'
  },
  
  
  ]
  
  
      return(
        <div style={{display:'flex',flexDirection:'row' ,marginLeft:170}}>
         
  
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
          name="radio-buttons-group"
          style={{marginBottom:30,marginLeft:20}}
        >
          <FormControlLabel value="Answer One" control={<Radio />} label={ques.option_A} />
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
          <Button variant="contained" href="#contained-buttons"  style={{marginTop :20,marginBottom:20,marginLeft:10,width:50,
            alignSelf:'flex-end',marginLeft:10,marginTop:200,backgroundColor:"#ff5f1f"}}
            onClick={()=>{ index == questions.length-1 ? handleClickOpen() : setX(x+1)  }}
            >
     { index == questions.length-1 ? 
     
     'Finish' :'Next'}
     </Button>
  
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
            <div>
            <ProgressBar now={80.5} />
            <h1 style={{color:"#ff5f1f"}}>Score</h1> 2/3
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Correctly gotten qestions</h1> Question Nmber : 1,3
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Missed Qestions</h1>Question Nmber :  1
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Time Taken</h1> 20 Minutes
          </div>
          <div>
            <h1 style={{color:"#ff5f1f"}}>Average</h1> 80.5%
          </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Ok</Button>
            {/* <Button onClick={handleClose}>Agree</Button> */}
          </DialogActions>
        </Dialog>
  
  
     </div>
  }
  
  
  </div>
  
  
  
  )
  
  })}
  
  
  </div>
  
  
  
  {/* <div style={{height:'wrap-content',width:400,borderWidth:1,borderColor:'blue',marginTop:20,borderRadius:10,
  marginLeft:50,scrollBehavior:'smooth'}}>
    
  
  {questions.map((ques,index)=>{
  
  return(
    
    <div style={{margin:20}}>
    
      {  index+1 == x &&
      <div style={{fontSize:18}}>
      {ques.Hint_one}
  {    showSecond &&   <div style={{margintop:10}}>
        {ques.Hint_two}
        <div>
        {ques.Explanation}
        </div>
        </div>}
  
      <Button style={{fontSize:14}} onClick={()=>{ setShowSecond(!showSecond)
      
        
        }}>{ showSecond ? "Show Less":"Show More"}</Button>
      </div>}
        </div>
  )})
    }
    <div>
      <div style={{backgroundColor:'blue'}}>
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
  
    </div>
  </div> */}
  <div style={{height:40,width:250,borderWidth:1,display:'flex',flexDirection:'row',marginTop:150,marginLeft:20}}>
    <img src={img2} alt="" height={30} width='20' style={{padding:1}} />
    <div style={{marginTop:10}}>{`26 Minutes | 16 Seconds Left`}</div>

  </div>
  <></>
  
  
        </div>
      )
    }
//     console.log(
//     <examType.Consumer>
//       {(x)=>
// {setExamTypeTwo(x)
// console.log("yaaaaaaaaaaaaaaaa",examTypeTwo)}
//       }
//     </examType.Consumer>)

    return(

        <div>
  
<div style={{backgroundColor:"#ff5f1f",width:800,height:50,color:'white',textAlign:"center",borderWidth:1,backgroundColor:"#ff5f1f"
, borderRadius:10,marginLeft:130}}>
  This is the exam instruction where the student gets information about the exam they are taking
  <div > 
          <Button onClick={()=>{setExamTypeTwo('Exam Mode')}}>Exam Mode</Button>
          <Button onClick={()=>{setExamTypeTwo("Quiz Mode")}}>Quiz Mode</Button>
          <Button onClick={()=>{setExamTypeTwo('Practice Mode')}}>Practice Mode</Button>
          
</div>
</div>

{/* {practiceMode()} */}
 { examTypeTwo == "Exam Mode" ? examMode() : examTypeTwo== "Practice Mode" ? practiceMode()
  : examTypeTwo== 'Quiz Mode' ? quizMode() : examMode()   }
{/* {quizMode()}  */}

        </div>
    )
}