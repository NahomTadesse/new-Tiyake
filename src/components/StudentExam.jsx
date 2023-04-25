
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import ExamInformation from "./ExamInformation"
import StudenExamPageTwo from "./StudentExamPageTwo"
import StudenExamPageOne from "./StudentExamPageOne"
import StudentPreview from "./StudentPreview"
import Instruction from './Instruction';
// import Preview from './Preview'
// import Navbar from './Navbar';
import Footer from './Footer/Footer';

const steps = [
  StudenExamPageTwo,
  StudenExamPageTwo,
  StudentPreview,
  Instruction

]



export default function AddExam(){
    const [activeStep, setActiveStep] = React.useState(0);
    // const [steps, setSteps] = React.useState(steps[0]);
    const [completed, setCompleted] = React.useState({});
  
    const totalSteps = () => {
      return steps.length;
    };
  
    const completedSteps = () => {
      return Object.keys(completed).length;
    };
  
    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };
  
    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };
  
    const handleNext = () => {

      // if last dont inc
      if(isLastStep() ){
        return;
      }

      setActiveStep(prevSteps => prevSteps + 1)



    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStep = (step) => () => {
      setActiveStep(step);
    };
  
    const handleComplete = () => {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    };
  
    const handleReset = () => {
      setActiveStep(0);
      setCompleted({});
    };
  
    return (
     <div>
      <div style={{}}>
       {/* <Navbar/> */}
       </div>
      <Box sx={{ width: '80%', m: "3rem auto 0" ,marginTop:5,height:window.innerHeight,marginBottom:10}}>
    
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}> 
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                {activeStep == 0 ? 'Mode Type': activeStep == 1 ? 'Instruction' : activeStep == 2 ? "Exam" : activeStep == 3 ?'Preview' :'' }
              </Typography>

              {
                activeStep === 0 && <StudenExamPageOne/>
              }

              {
                activeStep === 1 && <Instruction/>
              }

              {  activeStep === 2 && <StudenExamPageTwo/>
}
{  activeStep === 3 && <StudentPreview/>
}
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }} style={{backgroundColor:"#ff5f1f",color:'white'}} >
                  Next
                </Button>
              
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
      {/* <Footer/> */}
      </div>
    );
}