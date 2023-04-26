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
import StudentHistory from './StudentHistory'

export default function DashBoard(){
    const [showExam,setShowExam] = useState(false)
    const [showProfile,setShowProfile] = useState(false)
    const [showLeaderboard,setShowLeaderboard] = useState(true)
    const [showTeacherProfile, setShowTeacherProfile] = useState(false);
    const [showFilter,setShowFilter] = useState(false)
    const [showHistory,setShowHistory] = useState(false)
    return(
        <div style={{display:'flex',flexDirection:"row"}}>

            <div
             style={{
          
					display: "flex",
					flexDirection: "column",
					// backgroundColor: "#ff5f1f",
					width: "25%",
					height:500,
					// box-shadow: 3px 3px 9px black;
					boxShadow:'3px 3px 9px black',
					borderWidth:1,
					borderColor:'white',
					borderRadius:'0 20 20 0',
					borderTopRightRadius:20,
					borderBottomRightRadius:20,
					marginBottom:100,
					marginTop:20
					
                 }}>
                <div style={{display:'flex',alignSelf:'center',marginTop:20,flexDirection:'column'}}>
                    <img src={img1} alt="" width={100} height={100} style={{}}/>
                    <button onClick={()=>{setShowProfile(true); 
                                        setShowExam(false);
                                        setShowLeaderboard(false); 
                                        setShowTeacherProfile(false)}} 
                        style={{marginTop:5,
                            marginTop: 5,
							// backgroundColor: "#040720",
							// borderWidth: 1,
							// borderColor: "#040720",
							// borderRadius: 10,
							color: "#ff5f1f",
                                }}>
                                    View Profile
                    </button>
                </div>
                <div style={{display:'flex',
                            alignSelf:'start',
                            marginTop:20,
                            flexDirection:'column',
                            marginLeft:10}}>
                    <div style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
                        <Button onClick={()=>{setShowExam(true); 
                                            setShowProfile(false); 
                                            setShowLeaderboard(false); 
                                            setShowTeacherProfile(false);
                                            setShowFilter(false);
                                            setShowHistory(false)
                                        }} 
                                            style={{ color: "#ff5f1f",boxShadow:'3px 3px 9px black' ,width:200,marginTop:20,
                                            marginLeft:20}}>
                                            Take Exam
                            {/* <img src={examImg} alt="" height={30} width={30} style={{marginLeft:5}}/>  */}
                        </Button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>

                        <Button 	style={{ color: "#ff5f1f",boxShadow:'3px 3px 9px black' ,width:'120%', marginLeft:20
							 }}
                                onClick={()=>{setShowExam(false); 
                                            setShowProfile(false); 
                                            setShowLeaderboard(false); 
                                            setShowTeacherProfile(false);
                                            setShowFilter(true);  setShowHistory(false)}}>
                                                 Teachers
                         
                        </Button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
                        <Button 	style={{ color: "#ff5f1f",boxShadow:'3px 3px 9px black' ,width:'120%', marginLeft:20
							 }}
                                onClick={()=>{setShowExam(false); 
                                            setShowProfile(false); 
                                            setShowLeaderboard(true); 
                                            setShowTeacherProfile(false);
                                            setShowFilter(false);  setShowHistory(false)}}>
                                                 Leader Board
                          
                        </Button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
                        <Button onClick={()=>{setShowExam(false); 
                                            setShowProfile(false); 
                                            setShowLeaderboard(false); 
                                            setShowTeacherProfile(false);
                                            setShowFilter(false);  setShowHistory(true)}} 
                                            style={{color: "#ff5f1f",boxShadow:'3px 3px 9px black' ,width:'120%', marginLeft:20}}>
                                            History
                            {/* <img src={examImg} alt="" height={30} width={30} style={{marginLeft:5}}/>  */}
                        </Button>
                    </div>
                {/* <Button style={{color:'white'}} onClick={()=>{setShowExam(false); setShowProfile(false); setShowLeaderboard(false); setShowTeacherProfile(true)}}> Leader Board</Button> */}
                </div>
                
                
            </div>
            
            <div style={{width:window.innerWidth}}>
                {
                    showExam ? <StudentExam/> : showProfile ? <TeachersProfile/>: showLeaderboard ? <Leaderboard/>: showFilter ? <TeacherFilter/> : showHistory ? <StudentHistory/> : ''
                }
            </div>
        </div>
    )
}