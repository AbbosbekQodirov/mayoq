import React from 'react'
import "./Face.css"

function Face() {
  return (
    <div className="face">
      <div className="container face_container">
        <div className="face_left">
          <h1>Mayoq <br /> web-saytiga xush kelibsiz </h1>
          <div className="btns">
            <div className="btn">Ro’yxatdan o’tish</div>
            <div className="btn">Kirish</div>
          </div>
        </div>
        <div className="face_right">
          <img src="./public/assets/imgs/fireman.png" alt="" />
          <img src="./public/assets/imgs/police.png" alt="" />
          <img src="./public/assets/imgs/doctor.png" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Face