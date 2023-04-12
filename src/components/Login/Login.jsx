import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "../FormAction";
import FormExtra from "../FormExtra";
import Input from "../Input";
import DashBoard from '../DashBoard';
import DashboardTeacher from '../DashboardTeacher'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Routes, Route, BrowserRouter,useNavigate} from 'react-router-dom';
const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);
    const [showStudentDshboard,setShowStudentDshboard] =useState(true)
    const [showTeacherDshboard,setShowTeacherDshboard] =useState(false)
    const [checked, setChecked] = useState(false);
    const handleChangeSwitch = (event) => {
        setChecked(event.target.checked);
      };
    const navigate = useNavigate()

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();

       checked ?  navigate('/teacherdashboard'): navigate('/dashboard') 
      
   
       
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }

    return(
        <div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <Switch
        checked={checked}
        onChange={handleChangeSwitch}
        defaultChecked color="warning"
        inputProps={{ 'aria-label': 'controlled' }}
        
      />

     <p style={{marginTop:0}}>Are you a teacher ? </p>
    </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>
        <Routes>
    {  checked ?
    <Route exact path='/teacherdashboard' element={<DashboardTeacher/>} /> 
      
    :
    <Route exact path='/dashboard' element={<DashBoard/>} /> 
    
    }
      
      </Routes>
        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>

      </div>
    )
}