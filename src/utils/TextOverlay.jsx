import React from "react";

const textstyle = {
  position: 'absolute',
  left: '15px',
  top: '30%',
  color: 'black' 
};

function TextOverlay(props) {

  const defaultHeight = '200px';
  

  const { height = defaultHeight } = props;
  
  
  const cardStyle = {
    position: 'relative',
    height: height, 
  };


  const combinedTextStyle = { ...textstyle, ...props.color };

  return (
    <>
      <div className="container-fluid mb-5 centered">
        <div className="card w-40 d-block mx-auto" style={cardStyle}>
          <img className="card-img-top img-cover" src={props.image} alt="" />
          <h2 className="card-img-overlay text-left" style={combinedTextStyle}>
             {props.text}
          </h2>
        </div>
      </div>
    </>
  );
}

export default TextOverlay;
