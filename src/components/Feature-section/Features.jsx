import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Vision",
    desc: "Gearing up students with practical questions for any educational examinations",
    icon: "ri-draft-line",
  },

  {
    title: "Mission",
    desc: "To create a platform where students can access number of educational materials and professional guidance regardless of their predicament.",
    icon: "ri-discuss-line",
  },

  {
    title: "Objectives",
    desc: "To reach 1 million students in one year time, To have ten thousand students as high performers in the national exams they take",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
