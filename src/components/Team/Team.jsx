/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row } from "react-bootstrap";
import "./team.css";

function Team () {
    let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
    return (
      <section className="section-white">
        <Container>
        <Row>
 
    <div className="container">
 
        <div className="row">
       
                    <div className="col-md-12 text-center">

                          <h2 className="section-title">The Team Behind Pacifico</h2>

                          <p className="section-subtitle">{message}</p>
                          
                    </div> 
             
                    <div className="col-sm-6 col-md-4">

<div className="team-item">

    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" className="team-img" alt="pic" />
   
    <h3>ALEXANDRA SMITHS</h3>
    
    <div className="team-info"><p>SEO Specialist</p></div>

    <p>Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>

    <ul className="team-icon">
    
        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
        
        <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
        
        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
        
        <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>
        
    </ul>
    
</div>

</div>
              
            <div className="col-sm-6 col-md-4">

                  <div className="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" className="team-img" alt="pic" />
                     
                      <h3>ALEXANDRA SMITHS</h3>
                      
                      <div className="team-info"><p>SEO Specialist</p></div>

                      <p>Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>
                  
                      <ul className="team-icon">
                      
                          <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                          
                          <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" className="dribble"><i className="fa fa-dribbble"></i></a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
            <div className="col-sm-6 col-md-4">

                  <div className="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" className="team-img" alt="pic" />
                     
                      <h3>ELISA JOHANSON</h3>
                      
                      <div className="team-info"><p>Marketing Manager</p></div>

                      <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>
                  
                      <ul className="team-icon">
                      
                          <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                          
                          <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" className="dribble">
                            <i className="fa fa-dribbble"></i>
                        </a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
        
        </div> 
    
    </div> 
    </Row>
    </Container>
    </section>
    )
}

export default Team;