import React from "react";

const SignCard = (props) => {
  const { imgUrl, title, button } = props.item;

  return (
    
    <div className=" single__course__item">
       
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>
     
     <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>
      </div>

        <div>
              {button}
              </div>   
    </div>
  );
};

export default SignCard;
