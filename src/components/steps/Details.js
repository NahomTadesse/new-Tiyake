import { useStepperContext } from "../../contexts/StepperContext";

// import RadioButtonGroup from 'RadioButtonGroup';
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img1.png";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function Details() {
  const { userData, setUserData } = useStepperContext();

  // const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (e) => {
    const { name, value, event } = e.target;
    setUserData({ ...userData, [name]: value });
    setSelectedOption(event.target.value);
  };
  return (

    
<div className="flex flex-col ">
    <section>
    <Container>
      <Row>
      <Col lg="6" md="6">
    
     
        
      <div className="mx-2 w-full flex-1">
      
          
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
        	Favorite subject 
        </div>
        <select className="my-2 flex rounded border border-gray-200 bg-white p-1 mx-2 w-full flex-1">
          <input
            onChange={handleChange}
            value={userData["fullname"] || ""}
            name="fullname"
            placeholder="Fullname"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
    
        </select>
      </div>
      <div className="mx-2 w-full flex-1">
      
          
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
        Need help on subject  
        </div>
        <select className="my-2 flex rounded border border-gray-200 bg-white p-1 mx-2 w-full flex-1">
          <input
            onChange={handleChange}
            value={userData["fullname"] || ""}
            name="fullname"
            placeholder="Fullname"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
    
        </select>
      </div>
      <div className="mx-2 w-full flex-1">
      
          
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
        Good at on a subject  
        </div>
        <select className="my-2 flex rounded border border-gray-200 bg-white p-1 mx-2 w-full flex-1">
          <input
            onChange={handleChange}
            value={userData["fullname"] || ""}
            name="fullname"
            placeholder="Fullname"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
    
        </select>
      </div>
  
<div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">

       <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Type of Study</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Col>
        <FormControlLabel value=" Regular" control={<Radio />} label=" Regular" />
        <FormControlLabel value="None regular " control={<Radio />} label="None regular " />
        </Col>
      </RadioGroup>
    </FormControl>
      
    </div>
        </Col>
        <Col lg="6" md="6">
          
        <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        School name + branch 
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["dob"] || ""}
            name="dob"
            placeholder="School name + branch"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      

      <div className="mx-2 w-full flex-1">
      
          
      <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
    	Grade   
      </div>
      <select className="my-2 flex rounded border border-gray-200 bg-white p-1 mx-2 w-full flex-1">
        <input
          onChange={handleChange}
          value={userData["fullname"] || ""}
          name="fullname"
          placeholder="Fullname"
          className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
        />
  
      </select>
    </div>

 

<div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">

       <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Usage For</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Col>
        <FormControlLabel value=" Grade 12 university entrance exam" control={<Radio />} label=" Grade 12 university entrance exam" />
        <FormControlLabel value="University exit exam " control={<Radio />} label="University exit exam " />
        </Col>
      </RadioGroup>
    </FormControl>
      
    </div>

      
      
      
     
    </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
}