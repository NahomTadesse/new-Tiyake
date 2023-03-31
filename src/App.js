import Home from "./pages/Home";
import SignUpAsPage from './pages/SignUpAsPage';
import SignUpS from './pages/SignUpS';
import SignUpT from './pages/SignUpT';
import SignUpTS from './pages/SignUpTS';
import {Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
  <>
  
  <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />}/>
        {/* <Route exact path='/login' element={<Login/>} /> */}
        <Route exact path='/signupaspage' element={<SignUpAsPage/>} />
        <Route exact path='/signups' element={<SignUpS/>} />
        <Route exact path='/signupt' element={<SignUpT/>} />
        <Route exact path='/signupts' element={<SignUpTS/>} />
        </Routes>
        </BrowserRouter>

  </>
  );
}

export default App;
