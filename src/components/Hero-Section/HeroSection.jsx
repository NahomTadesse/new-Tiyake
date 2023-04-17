import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/school-gfcc68fa2e_1920.jpg";
import "./hero-section.css";
// import { Link, animateScroll as scroll, } from 'react-scroll'


const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Basic description 
              </h2>
              <p className="mb-5">
              Tiyake is a web app that allows students to learn and practice national examination questions dating back years. 
               The focus of Tiyake is to help students understand the questions and their answers, 
               as well as track their progress through the questions and answers. <br></br>
               <p className="enroll ">
               {/* <Link to="about" smooth={true} offset={-200} duration={500}>Projects</Link> */}

            <a href="/learnmore"> Learm More</a>
          </p>
              </p>
            </div>
            <div>
            <a href='/signupaspage'>
              <button className="btn">SignUp</button>
              </a>

              </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
