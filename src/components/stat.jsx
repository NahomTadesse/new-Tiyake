// import "./App.css";
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    Sector, Cell, ResponsiveContainer 
  } from "recharts";

import React, { PureComponent } from 'react';


  
  const Stat = () => {
    const data = [
      { name: "Biology", Natural: 200 },
      { name: "Math", Natural: 1000 },
      { name: "Physics", Natural: 500 },
      { name: "Chemistry", Natural: 100 },
    ];
    const dataTwo = [
        { name: "Civics", Social: 700 },
        { name: "Amharic", Social: 500 },
        { name: "History", Social: 800 },
        { name: "Geography", Social: 1000 },
      ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
    return (
        <div style={{
          
marginTop:30
        }}>
      <div style={{ textAlign: "center" }}>
        <h1>Tiyake Platform Users</h1>
        <div style={{  textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
            alignItems: 'center',
            flexDirection:"row",
            marginTop:50}}>
          {/* <PieChart width={400} height={400}>
            <Pie
              dataKey="users"
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
             

            />
          
            <Tooltip />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </PieChart> */}
              <BarChart
            width={500}
            height={300}
            data={dataTwo}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
            
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="Social" fill="#ff5f1f" background={{ fill: "#eee" }} />
          </BarChart>
      
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="Natural" fill=" #040720" background={{ fill: "#eee" }} />
          </BarChart>
      
        </div>
      </div>
      </div>
    );
  };
  
  export default Stat;