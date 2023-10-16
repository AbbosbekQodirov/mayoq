import React from 'react'
import "./Face.css"

function Face({ setAuth , auth}) {
  console.log(auth);
  return (
    <div className={auth.length == "" ? "face" : "face close"}>
      <div className="container face_container">
        <div className="face_left">
          <h1>
            Mayoq <br /> web-saytiga xush kelibsiz{" "}
          </h1>
          <div className="btns">
            <div
              onClick={() => {
                setAuth("SIGNUP")
              }}
              className="btn"
            >
              Ro’yxatdan o’tish
            </div>
            <div
              onClick={() => {
                setAuth("LOGIN");
              }}
              className="btn"
            >
              Kirish <img src="./assets/imgs/arrow.png" alt="" />
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