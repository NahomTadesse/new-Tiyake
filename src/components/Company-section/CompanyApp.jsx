import styled from "styled-components";
import Pricing from "./Pricing";

function CompanyApp() {
  return (
    <section>
    <MainContainer>
      {/* <div className="pricing-component">
        <Pricing
          data={[
            { text: "3 new project / month", value: true },
            { text: "Basic interaction", value: true },
            { text: "Assets library", value: false },
          ]}
          price={0}
          duration="y"
          currency="$"
          buttonContent="Get Started"
          subTitle="Great for starters"
          priceText="Discover how to create your first projects."
          headerText="free"
        />
      </div> */}
      <div className="pricing-component">
        <Pricing
          data={[
            { text: "The best Teachers", value: true },
            { text: "The newest material ", value: true },
            { text: "Up to date", value: true },
          ]}
          price={12}
          duration="y"
          background="linear-gradient(to left, #ff0844 0%, #FF5F1F 100%);"
          shadow="#FF5F1F"
          currency="$"
          buttonContent="Get Started"
          subTitle="For High School students"
          priceText="Enjoy limitless use with interactive export options."
          headerText="Entrance Exam"
        />
      </div>
      <div className="pricing-component">
        <Pricing
          data={[
            { text: "The best Teachers", value: true },
            { text: "The newest material ", value: true },
            { text: "Up to date", value: true },
          ]}
          price={12}
          duration="y"
          background="linear-gradient(to left, #ff0844 0%, #FF5F1F 100%);"
          shadow="#FF5F1F"
          currency="$"
          buttonContent="Get Started"
          subTitle="For University Students"
          priceText="Enjoy limitless use with interactive export options."
          headerText="Exit Exam"
        />
      </div>
    </MainContainer>
    </section>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // background-color: #f5f1ff;

  @media screen and (max-width: 970px) {
    height: 100%;
    flex-direction: column;
    .pricing-component {
      margin: 2rem 0;
    }
  }
`;

export default CompanyApp;