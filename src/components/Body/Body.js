import React from "react";
import Button from "../Buttons/Button";
import "./Body.css";

function Body() {
  return (
    <div className="body-container">
      {/* <video src="videos/video-1.mp4" autoPlay loop muted /> */}
      <img src="/images/1.jpg"></img>
      <h1> Announcement !</h1>
      <p>
       <br/>Happy Dashain!  <br/><br/>
       The School will remain closed till 11th Kartik.
      </p>
      <div className="body-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Body;
