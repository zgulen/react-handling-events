/* eslint-disable no-undef */
import "./stopwatch.css";
import React, { createElement } from "react";

const Stopwatch = () => {
  let hour = 0,
    min = 0,
    sec = 0;
  let timer;
  let dakika = [],
    saniye = [],
    salise = [];
  let sayac = 0;
  const counter = () => {
    timer = setInterval((x) => {
      sec++;
      if (sec < 10) {
        document.getElementById("sec").innerText = "0" + sec;
      } else {
        document.getElementById("sec").innerText = sec;
      }
      if (sec === 99) {
        sec = 0;
        min++;
        if (min < 10) {
          document.getElementById("min").innerText = "0" + min;
        } else {
          document.getElementById("min").innerText = min;
        }
        sec = 0;
      } else if (min > 59) {
        hour++;
        document.getElementById("hour").innerText = "0" + hour;
        min = -1;
      }
    }, 9.9);
  };

  return (
    <div>
      <h2 className="watch">
        <span id="hour">00</span>:<span id="min">00</span>:
        <span id="sec">00</span>
      </h2>
      <i
        className="fa-solid fa-play"
        onClick={(e) => {
          if (e.target.classList.contains("fa-play")) {
            counter();

            e.target.classList.value = "fa-solid fa-pause";
          } else if (e.target.classList.contains("fa-pause")) {
            clearInterval(timer);
            e.target.classList.value = "fa-solid fa-play";
          }
        }}
      ></i>
      <i
        className="fa-solid fa-stop"
        onClick={(e) => {
          if (
            document.querySelector(".fa-solid fa-pause") !==
            '<i className="fa-solid fa-play")></i>'
          ) {
            document.querySelector(".fa-solid").className = "fa-solid fa-play";
          }
          clearInterval(timer);
          min = 0;
          sec = 0;
          hour = 0;
          document.getElementById("hour").innerText = "00";
          document.getElementById("min").innerText = "00";
          document.getElementById("sec").innerText = "00";
        }}
      ></i>

      <i
        className="fa-solid fa-flag-checkered"
        onClick={() => {
          dakika.push(document.getElementById("hour").innerText);
          saniye.push(document.getElementById("min").innerText);
          salise.push(document.getElementById("sec").innerText);
          document.getElementById("dakika").innerText = dakika[sayac];
          document.getElementById("saniye").innerText = saniye[sayac];
          document.getElementById("salise").innerText = salise[sayac];
          console.log(typeof x);
          document.querySelector(".capture").style.display = "block"
          sayac++;
        }}
      ></i>
      <div className="capture">
        <h3 className="flag">
          <span id="dakika"></span>:<span id="saniye"></span>:
          <span id="salise"></span>
        </h3>
      </div>
    </div>
  );
};

export default Stopwatch;
