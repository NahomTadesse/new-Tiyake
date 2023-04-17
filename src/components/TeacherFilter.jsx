
import { ImageList } from '@mui/material'
import {React,useState} from 'react'

import img1 from '../assets/images/profile.png'
import '../TeacherFilter.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Routes, Route, BrowserRouter,useNavigate} from 'react-router-dom';
import ProfilePage from './profilepage'

export default function TeacherFilter(){

    const [filterr, setFilter] = useState();
    const [search, setSearch] = useState('');
    const navigate = useNavigate()

    const handleChange = (event) => {
      setFilter(event.target.value);
    };


    const teacher=[
        {name:"Nahom Tadesse", subject :'Physics',Status : 'online',
        availableDate:'Thursday and Friday',availableTime:"10Am-9PM",
        profileImage : img1 },

        {name:"Gedion Abebe", subject :'Maths',Status : 'offline',
        availableDate:'Monday and Tuesday',availableTime:"9Am-12PM",
        profileImage : img1 },

        {name:"Henok Kinfegebriel", subject :'Chemistry',Status : 'online',
        availableDate:'Wednesday and Friday',availableTime:"7pm-5PM",
        profileImage : img1 },

        {name:"Menassie Ermias", subject :'Biology',Status : 'offline',
        availableDate:'Thursday and Friday',availableTime:"6pm-7PM",
        profileImage : img1 },

        {name:"Yosef Fikreyesus", subject :'English',Status : 'online',
        availableDate:'Wednesday and Thrsday',availableTime:"10AM-2PM",
        profileImage : img1 },

        {name:"Abel Seleshi", subject :'Amharic',Status : 'online',
        availableDate:'Tuesday and Friday',availableTime:"3Am-4PM",
        profileImage : img1
    },
    
    {name:"Michael Girma", subject :'Technical Drawing(TD)',Status : 'online',
    availableDate:'Tuesday and Friday',availableTime:"3Am-4PM",
    profileImage : img1
},

    {name:"Nardos Haylu", subject :'ICT',Status : 'offline',
    availableDate:'Tuesday and Friday',availableTime:"3Am-4PM",
    profileImage : img1
    },
    ]

const handleClick=()=>{
  navigate('/teacherprofile')
}

const teacherDetail =()=>{
  return  teacher.filter(x => 
    filterr == 'name' ?
    x.name.toString().toLowerCase().includes(search.toString().toLowerCase())
    :
    filterr == 'subject' ?
    x.subject.toString().toLowerCase().includes(search.toString().toLowerCase())
    :
    x
    )
    
    
    .map((teacher,index) =>{

console.log(filterr);

        return(
          
       <div>
     
            <div className='personalCard'>
            <button className='profileBtn' onClick={handleClick}>
                
                <profile style={{display:'flex',flexDirection:'column', alignItems: 'center'}}>
               <img src={teacher.profileImage} alt="" height={50} width={50} />
               <div style={{display:'flex',flexDirection:'row'}}>
               {teacher.name}
               <p style={teacher.Status == "online" ?{width:10,height:10,textAlign:'right',backgroundColor:'#0096FF',borderRadius:50,marginLeft:10,marginTop:8}
               : {width:10,height:10,textAlign:'right',backgroundColor:'grey',borderRadius:50,marginLeft:10,marginTop:8}}></p></div>
               </profile>
               <div className='profile'>

               <p>Subject : {teacher.subject} </p> 
               <p style={{textAlign:'left'}}>   Available Date : {teacher.availableDate} </p> 
               <p style={{textAlign:'left'}}> Available Time :{teacher.availableTime} </p> 
               
                </div>
                </button>
            </div>
           
            </div>
           
        )

    }
    )
  
}
    return(
        <div>
          
<div className='cardContent'>
    <div className='filterHeader'>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{top:-5}}>Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterr}
          label="Filter By"
          onChange={handleChange}
          size='small'
        >
          <MenuItem value={'name'}>Name</MenuItem>
          <MenuItem value={'subject'}>Subject</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
<input type="text" name="" id="" placeholder='Search' className='searchInput' onChange={(e)=>{setSearch(e.target.value)}}/>
    {console.log(search)}
    </div>
<section  className='teacherCard'>
<ImageList cols ={3} >
{teacherDetail()}
</ImageList>
</section>

</div>
        </div>
    )
}