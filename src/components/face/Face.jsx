import React from 'react'
import "./Face.css"

function Face({ setShowModal, showModal }) {
  return (
    <div className={showModal? "face" : "face close"}>
      <div className="container face_container">
        <div className="face_left">
          <h1>
            Mayoq <br /> web-saytiga xush kelibsiz{" "}
          </h1>
          <div className="btns">
            <div
              onClick={() => {
                setShowModal(!showModal);
              }}
              className="btn"
            >
              Ro’yxatdan o’tish
            </div>
            <div
              onClick={() => {
                setShowModal(!showModal);
              }}
              className="btn"
            >
              Kirish
            </div>
          </div>
        </div>
        <div className="face_right">
          <img src="./assets/imgs/fireman.png" alt="" />
          <img src="./assets/imgs/police.png" alt="" />
          <img src="./assets/imgs/doctor.png" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Face