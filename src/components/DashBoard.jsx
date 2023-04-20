import {React,useState,useEffect} from 'react';
import StudentExam from './StudentExam'
import img1 from '../assets/images/profile.png'
import Button from '@mui/material/Button';
import TeachersProfile from './TeachersProfile';
import Leaderboard from "./LeaderBoard"
import TeacherFilter from './TeacherFilter';
import rankingImg from '../assets/images/ranking.png'
import teacherImg from '../assets/images/teacher.png'
import examImg from '../assets/images/exam.png'

export default function DashBoard(){
    const [showExam,setShowExam] = useState(false)
    const [showProfile,setShowProfile] = useState(false)
    const [showLeaderboard,setShowLeaderboard] = useState(true)
    const [showTeacherProfile, setShowTeacherProfile] = useState(false);
    const [showFilter,setShowFilter] = useState(false)

    return(
        <div style={{display:'flex',flexDirection:"row"}}>
            <div style={{display:'flex',flexDirection:"column",backgroundColor:'#ff5f1f',width:'25%',height: window.innerHeight }}>
                <div style={{display:'flex',alignSelf:'center',marginTop:20,flexDirection:'column'}}>
                    <img src={img1} alt="" width={100} height={100} style={{}}/>
                    <button onClick={()=>{setShowProfile(true); 
                                        setShowExam(false);
                                        setShowLeaderboard(false); 
                                        setShowTeacherProfile(false)}} 
                        style={{marginTop:5,
                                backgroundColor:"#040720",
                                borderWidth:1,
                                borderColor:'#040720',
                                borderRadius:10,
                                color:'white'}}>
                                    View Profile
                    </button>
                </div>
                <div style={{display:'flex',
                            alignSelf:'start',
                            marginTop:20,
                            flexDirection:'column',
                            marginLeft:10}}>
                    <div style={{display:"flex",
                                flexDirection:'row',
                                marginBottom:20}}>
                        <Button onClick={()=>{setShowExam(true); 
                                            setShowProfile(false); 
                                            setShowLeaderboard(false); 
                                            setShowTeacherProfile(false);
                                            setShowFilter(false)}} 
                                            style={{color:'white'}}>
                                            Take Exam
                            <img src={examImg} alt="" height={30} width={30} style={{marginLeft:5}}/> 
                        </Button>
                    </div>
                    <div style={{display:"flex",
                                flexDirection:'row',
                                marginBottom:20}}>
                        <Button style={{color:'white'}} 
                                onClick={()=>{setShowExam(false); 
                                            setShowProfile(false); 
                                            setShowLeaderboard(false); 
                                            setShowTeacherProfile(false);
                                            setShowFilter(true)}}>
                                                 Teachers
                            <img src={teacherImg} 
                                alt="" height={30} width={30}
                                style={{marginLeft:5,marginBottom:10}}/> 
                        </Button>
                    </div>
                    <div style={{display:"flex",
                                flexDirection:'row',
                                marginBottom:20}}>
                        <Button style={{color:'white'}} 
                                onClick={()=>{setShowExam(false); 
                                            setShowProfile(false); 
                                            setShowLeaderboard(true); 
                                            setShowTeacherProfile(false);
                                            setShowFilter(false)}}>
                                                 Leader Board
                            <img src={rankingImg} 
                                alt="" height={30} 
                                width={30} 
                                style={{marginLeft:5,
                                        marginBottom:10}}/> 
                        </Button>
                    </div>
                {/* <Button style={{color:'white'}} onClick={()=>{setShowExam(false); setShowProfile(false); setShowLeaderboard(false); setShowTeacherProfile(true)}}> Leader Board</Button> */}
                </div>
            </div>
            <div style={{width:window.innerWidth}}>
                {
                    showExam ? <StudentExam/> : showProfile ? <TeachersProfile/>: showLeaderboard ? <Leaderboard/>: showFilter ? <TeacherFilter/> : ''
                }
            </div>
        </div>
    )
}