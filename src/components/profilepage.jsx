import {React,useState }from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import StudentExam from './StudentExam'
import img1 from '../assets/images/profile.png'
import Button from '@mui/material/Button';
import TeachersProfile from './TeachersProfile';
import Leaderboard from "./LeaderBoard"
import TeacherFilter from './TeacherFilter';
import rankingImg from '../assets/images/ranking.png'
import teacherImg from '../assets/images/teacher.png'
import examImg from '../assets/images/exam.png'

export default function ProfilePage() {


////////////////////////////////////////////////////////////profile


const DashBoard=()=>{
  const [showExam,setShowExam] = useState(false)
  const [showProfile,setShowProfile] = useState(false)
  const [showLeaderboard,setShowLeaderboard] = useState(false)
  const [showTeacherProfile, setShowTeacherProfile] = useState(false);
  const [showFilter,setShowFilter] = useState(false)
  const [showTeacher,setshowTeacher] = useState(true)
  
      return(
          <div style={{display:'flex',flexDirection:"row"}}>
  <div style={{display:'flex',flexDirection:"column",backgroundColor:'#ff5f1f',width:'15%',height: window.innerHeight }}>
      <div style={{display:'flex',alignSelf:'center',marginTop:20,flexDirection:'column'}}>
  <img src={img1} alt="" width={100} height={100} style={{}}/>
  <button onClick={()=>{setShowProfile(true); setShowExam(false);setShowLeaderboard(false); setShowTeacherProfile(false);setshowTeacher(false);}} style={{marginTop:5
  ,backgroundColor:"#040720",
  borderWidth:1,borderColor:'#040720',borderRadius:10,color:'white'}}>View Profile</button>
  </div>
  
  <div style={{display:'flex',alignSelf:'start',marginTop:20,flexDirection:'column',marginLeft:10}}>
  <div style={{display:"flex",flexDirection:'row',marginBottom:20}}>
  <Button onClick={()=>{setShowExam(true); setShowProfile(false); setShowLeaderboard(false); setShowTeacherProfile(false);setShowFilter(false);setshowTeacher(false)}} style={{color:'white'}}> Take Exam
  <img src={examImg} alt="" height={30} width={30} style={{marginLeft:5}}/> </Button>
  </div>
  <div style={{display:"flex",flexDirection:'row',marginBottom:20}}>
  <Button style={{color:'white'}} onClick={()=>{setShowExam(false); setShowProfile(false); setShowLeaderboard(false); setShowTeacherProfile(false);setShowFilter(true);setshowTeacher(false)}}> Teachers
  <img src={teacherImg} alt="" height={30} width={30} style={{marginLeft:5,marginBottom:10}}/> </Button>
  </div>
  <div style={{display:"flex",flexDirection:'row',marginBottom:20}}>
  <Button style={{color:'white'}} onClick={()=>{setShowExam(false); setShowProfile(false); setShowLeaderboard(true); setShowTeacherProfile(false);setShowFilter(false);setshowTeacher(false)}}> Leader Board
  <img src={rankingImg} alt="" height={30} width={30} style={{marginLeft:5,marginBottom:10}}/> </Button>
  </div>
  {/* <Button style={{color:'white'}} onClick={()=>{setShowExam(false); setShowProfile(false); setShowLeaderboard(false); setShowTeacherProfile(true)}}> Leader Board</Button> */}
  </div>
  
  </div>
  <div style={{width:window.innerWidth}}>
  {
showExam ? <StudentExam/> : showProfile ? <TeachersProfile/>: showLeaderboard ? <Leaderboard/>: showFilter ? <TeacherFilter/> :
showTeacher ? (
  <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle mb-1"
                  style={{ width: '200px' }}
                  fluid />
                <p className="text-muted mb-1">Physics Teacher</p>
                <p className="text-muted mb-4">Addis Ababa, Ethiopia</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Abebe Kebede</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Preferable Study Course</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Astronomy, Physics</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">0972-34-56-78</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Experience</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">4 Years Teaching, 2 Years Practice</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Working Hours</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Monday through thursday, 9AM to 4PM</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Available?</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Yes!</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
) :''

}
  <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle mb-1"
                  style={{ width: '200px' }}
                  fluid />
                <p className="text-muted mb-1">Physics Teacher</p>
                <p className="text-muted mb-4">Addis Ababa, Ethiopia</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Abebe Kebede</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Preferable Study Course</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Astronomy, Physics</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">0972-34-56-78</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Experience</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">4 Years Teaching, 2 Years Practice</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Working Hours</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Monday through thursday, 9AM to 4PM</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Available?</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Yes!</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  </div>
          </div>
      )
  }



///////////////////////


  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <div>
        {DashBoard()}
      </div>
 
    </div>
  );
}