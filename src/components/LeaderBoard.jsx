

import * as React from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import trophyImg from '../assets/images/trophy.png';
import starImg from '../assets/images/star.png' 
import rankingsImg from '../assets/images/rankings.png' 
import userImg from '../assets/images/user.png' 
import checkImg from '../assets/images/check.png' 
import awardImg from '../assets/images/award.png' 

// import Footer from './Footer';
// import Navbar from './Navbar'
// import Header from './Header/Header'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#ff5f1f",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
export default function LeaderBoard(){

const students = [

{Name : "Nahom Tadesse",Rank:1,Points:500,Award:"Laptop"},
{Name : "Gedion Abebe",Rank:2,Points:480,Award:"Cell Phone"},
{Name : "Henock Kinfegebriel",Rank:3,Points:450,Award:"Cell Phone"},
{Name : "Menassie Ermias",Rank:4,Points:445,Award:"Cell Phone"},
{Name : "Yosef Fikreyesus",Rank:5,Points:400,Award:"Mouse"},
{Name : "Eyouel Tsegaye",Rank:6,Points:378,Award:"Mouse"},
{Name : "Yididya Fantahun",Rank:7,Points:370,Award:"1000 ETB"},
{Name : "Eden Tadele",Rank:8,Points:350,Award:"1000 ETB"},
{Name : "Abreham Hailu",Rank:9,Points:330,Award:"1000 ETB"},
{Name : "Leul Asefa",Rank:10,Points:315,Award:"1000 ETB"},
{Name : "Bethelem Abebe",Rank:11,Points:300,Award:"Certeficate"},
{Name : "Nardos Haylu",Rank:12,Points:290,Award:"Certeficate"},
{Name : "Kalkidan Ferew",Rank:13,Points:280,Award:"Certeficate"},
{Name : "Solomon Takele",Rank:14,Points:240,Award:"Certeficate"},
{Name : "Mekdes Ashagrie",Rank:15,Points:235,Award:"Certeficate"},
{Name : "Selam Tesfaye",Rank:16,Points:230,Award:"Certeficate"},
{Name : "Michael Abebe",Rank:17,Points:225,Award:"Certeficate"},
{Name : "Natnael Alemu",Rank:18,Points:205,Award:"Certeficate"},

]


    return(
        <div >
<div style={{display:'flex',justifyContent:"center"}}>
          <div style={{textAlign:'center',fontSize:24,marginTop:10,marginBottom:10,fontWeight:'bold'}}>
            TOP 50 STUDENTS
          </div>
          <img src={trophyImg} alt="" height={50} width={50}/>
          </div>
        {/* <Navbar/> */}
        <TableContainer component={Paper} sx={{ height: window.innerHeight, maxWidth: 1100,marginLeft:10,marginRight:10 }}>
        <Table sx={{}} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Rank
              <img src={rankingsImg} alt="" height={30} width={30}/>
              </StyledTableCell>
              <StyledTableCell align="left">Name
              <img src={userImg} alt="" height={30} width={30}/>
              </StyledTableCell>
              <StyledTableCell align="left">Points
              <img src={checkImg} alt="" height={30} width={30}/>
              </StyledTableCell>
              <StyledTableCell align="left">Award
              <img src={awardImg} alt="" height={30} width={30}/>
              </StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row,index) => (
              <StyledTableRow key={row.Rank}>
                <StyledTableCell component="th" scope="row" style={{display:'flex',flexDirection:'row'}}>
                  {row.Rank}
                  {row.Rank <= 5 && 
                    <img src={starImg} alt="" height={20} width={20} style={{marginLeft:5}}/>
                    
                  }
                </StyledTableCell>
                <StyledTableCell align="left">{row.Name}</StyledTableCell>
                <StyledTableCell align="left">{row.Points}</StyledTableCell>
                <StyledTableCell align="left">{row.Award}</StyledTableCell>
              
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Footer/> */}
      </div>
    )
}