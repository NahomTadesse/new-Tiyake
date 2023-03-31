import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./signupas.css";
import SignCard from "./SignCard";

const SignData = [
  {
    id: "01",
    title: "SignUp as a Student",
    button: <a className="button a" href="/signups"><button className="btn"> Enroll</button></a>,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "SignUp as a Teacher",
    button: <a className="button a" href="/signupt"><button className="btn"> Enroll</button></a>,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "SignUp as speciacl Student Teacher",
    button: <a className="button a" href="/signupts"><button className="btn"> Enroll</button></a>,
    imgUrl: courseImg3,
  },
];

const SignUpAs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
           
          </Col>
          {SignData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <SignCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SignUpAs;
