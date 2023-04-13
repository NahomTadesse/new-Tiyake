import * as React from 'react';
import img1 from '../assets/images/profile.png'
import Footer from './Footer/Footer';
// import Navbar from './Navbar'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Button from '@mui/material/Button';



export default function TeacherProfile(){

const [editable,setEditable] = React.useState(true)
    return(
        <div>
               <div style={{display:'flex', justifyContent:"center"}}>

<div style={{marginTop:25,marginTop:20}}>
   
<img src={img1} alt="" height="100" width="100" style={{marginBottom:10,marginLeft:60}}/>
<Button onClick={()=>{setEditable(!editable)}}>Edit Profile</Button>
<Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-read-only-input"
          label="Full Name"
          defaultValue="Menassie Ermias"
          InputProps={{
            readOnly: editable,
          }}
        />
         <TextField
          id="outlined-read-only-input"
          label="Phone Number"
          defaultValue="+251988765654"
          InputProps={{
            readOnly: editable,
          }}
        />
           <TextField
          id="outlined-read-only-input"
          label="Email"
          defaultValue="menassie@gmail.com"
          InputProps={{
            readOnly: editable,
          }}
        />
        <div style={{display:"flex",flexDirection:'row'}}>
                <TextField
          id="outlined-read-only-input"
          label="From(Date)"
          defaultValue="06/06/2023"
          InputProps={{
            readOnly: editable,
          }}
          style={{marginRight:10}}
        />
              <TextField
          id="outlined-read-only-input"
          label="To(Date)"
          defaultValue="08/06/2023"
          InputProps={{
            readOnly: editable,
          }}
        /></div>
          <div style={{display:"flex",flexDirection:'row'}}>
              <TextField
          id="outlined-read-only-input"
          label="From(time)"
          defaultValue="10AM"
          InputProps={{
            readOnly: editable,
          }}
          style={{marginRight:10}}
        />
              <TextField
          id="outlined-read-only-input"
          label="To(time)"
          defaultValue="12PM"
          InputProps={{
            readOnly: editable,
          }}
        />
        </div>
          <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Online" />
      {!editable &&
          <Button variant="contained" href="#contained-buttons"  style={{marginLeft:10,width:50,
            alignSelf:'flex-end',marginLeft:10,backgroundColor:"#ff5f1f"}}
            onClick={()=>{setEditable(!editable)}}
            >
           Save
     </Button>
    }
    </FormGroup>
    </Stack>
 
</div>
</div>
{/* <Footer/> */}
        </div>
    )
}