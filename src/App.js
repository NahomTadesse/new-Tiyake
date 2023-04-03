import Home from "./pages/Home";
import SignUpAsPage from './pages/SignUpAsPage';
import SignUpS from './pages/SignUpS';
import SignUpT from './pages/SignUpT';
import SignUpTS from './pages/SignUpTS';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/Information/PrivacyPolicy";
import Disclaimer from "./components/Information/Disclaimer";
import EndUser from "./components/Information/EndUser";
import TermsConditions from "./components/Information/TermsConditions";

function App() {
  return (
  <>
  <Header />
  <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />}/>
        {/* <Route exact path='/login' element={<Login/>} /> */}
        <Route exact path='/signupaspage' element={<SignUpAsPage/>} />
        <Route exact path='/signups' element={<SignUpS/>} />
        <Route exact path='/signupt' element={<SignUpT/>} />
        <Route exact path='/signupts' element={<SignUpTS/>} />
        <Route exact path='/privacypolicy' element={<PrivacyPolicy/>} />
        <Route exact path='/enduser' element={<EndUser/>} />
        <Route exact path='/termsconditions' element={<TermsConditions/>} />
        <Route exact path='/disclaimer' element={<Disclaimer/>} />
       
        </Routes>
        </BrowserRouter>
        <Footer />
  </>
  );
}

export default App;
