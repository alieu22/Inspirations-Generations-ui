import React from "react";

const textstyle = {
  position: 'absolute',
  left: '15px',
  top: '30%',
  color: 'black',
};

function TextOverlay(props) {

  const defaultHeight = '300px';  // Adjusting to a more prominent height
  
  const { height = defaultHeight } = props;

  const cardStyle = {
    position: 'relative',
    height: height,
    width: '100%',  // Ensures it takes up the full width of the container
  };

  const imgStyle = {
    width: '100%',   // Image fills the width of the container
    height: '100%',  // Image fills the height of the container
    objectFit: 'cover',  // Ensures the image covers the card while maintaining aspect ratio
  };

  const combinedTextStyle = { ...textstyle, ...props.color };

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="card d-block mx-auto" style={cardStyle}>
          <img className="card-img-top" src={props.image} alt="" style={imgStyle} />
          <h2 className="card-img-overlay text-left" style={combinedTextStyle}>
            {props.text}
          </h2>
        </div>
      </div>
    </>
  );
}

export default TextOverlay;
