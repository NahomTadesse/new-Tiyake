import {React,useState,useEffect} from 'react';
import StudentExam from './StudentExam'
import img1 from '../assets/images/profile.png'
import Button from '@mui/material/Button';
import TeachersProfile from './TeachersProfile';
import AddExamComponent from './AddExamComponent'
import Leaderboard from "./LeaderBoard"


export default function DashBoard(){
const [showExam,setShowExam] = useState(false)
const [showProfile,setShowProfile] = useState(true)
const [showLeaderboard,setShowLeaderboard] = useState(false)


    return(
        <div style={{display:'flex',flexDirection:"row"}}>
<div style={{display:'flex',flexDirection:"column",backgroundColor:'#ff5f1f',width:'10%',height: window.innerHeight }}>
    <div style={{display:'flex',alignSelf:'center',marginTop:20,flexDirection:'column'}}>
<img src={img1} alt="" width={100} height={100} style={{}}/>
<button onClick={()=>{setShowProfile(true); setShowExam(false); setShowLeaderboard(false)}} style={{marginTop:5}}>View Profile</button>
</div>

<div style={{display:'flex',alignSelf:'center',marginTop:20,flexDirection:'column'}}>
<Button onClick={()=>{setShowExam(true); setShowProfile(false); setShowLeaderboard(false)}} style={{color:'white'}}> Add Exam</Button>
<Button style={{color:'white'}} onClick={()=>{setShowExam(false); setShowProfile(false); setShowLeaderboard(true)}}>Leader Board</Button>
<Button style={{color:'white'}}> History</Button>

</div>

</div>
<div style={{width:window.innerWidth}}>
{
showExam ? <AddExamComponent/> : showProfile ? <TeachersProfile/>: showLeaderboard ? <Leaderboard/>:''

}
</div>
        </div>
    )
}