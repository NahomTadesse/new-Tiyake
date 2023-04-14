import Home from "./pages/Home";
import SignUpAsPage from "./pages/SignUpAsPage";
import SignUpS from "./pages/SignUpS";
import SignUpT from "./pages/SignUpT";
import SignUpTS from "./pages/SignUpTS";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/Information/PrivacyPolicy";
import Disclaimer from "./components/Information/Disclaimer";
import EndUser from "./components/Information/EndUser";
import TermsConditions from "./components/Information/TermsConditions";
import AboutUs from "./components/About-us/AboutUs";
import CompanyApp from "./components/Company-section/CompanyApp";
import Login from "./pages/Login";
import DashBoard from "./components/DashBoard";
import TeacherFilter from "./components/TeacherFilter";
import StudentExamPageTwo from "./components/StudentExamPageTwo";
// <<<<<<< HEAD
import Index from "./pages/Home/Index";
// =======
import DashboardTeacher from "./components/DashboardTeacher";
import ProfilePage from "./components/profilepage";
// >>>>>>> e757b524ccb2f25d05d9e8f9b4af25f403ef2c65
// import SignUpAs from "./pages/SignUpAs";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route
            exact
            path="/teacherdashboard"
            element={<DashboardTeacher />}
          />
          <Route exact path="/signupaspage" element={<SignUpAsPage />} />
          <Route exact path="/signups" element={<SignUpS />} />
          <Route exact path="/signupt" element={<SignUpT />} />
          <Route exact path="/signupts" element={<SignUpTS />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route exact path="/enduser" element={<EndUser />} />
          <Route exact path="/termsconditions" element={<TermsConditions />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/companyapp" element={<CompanyApp />} />
          <Route exact path="/teacherprofile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
