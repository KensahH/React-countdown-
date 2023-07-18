import React from "react";
import "./style.css";
import{ useEffect, useState, useRef} from "react";

export default function App() {

const[timerDays, setTimerDays] = useState("00")
const[timerHours, setTimerHours] = useState("00")
 const[timerMinutes, setTimerMinutes]= useState("00");
 const[timerSeconds, setTimerSeconds] = useState("00")

 let interval = useRef();

 const startTimer=()=>{
const countDownDate = new Date("july 29, 2023 12:00:00").getTime();


interval = setInterval(()=>{
const now = new Date().getTime();
const timeleft = countDownDate - now;
const days = Math.floor(timeleft /(24 *60 *60* 1000));
const hours = Math.floor((timeleft % (24* 60*60* 1000))/ (1000 * 60  *60));
const minutes = Math.floor((timeleft %(60 * 60* 1000))/ (1000 * 60 ));

const seconds = Math.floor((timeleft %( 60 * 1000))/ (1000));

if(timeleft <0){
//stop timer
clearInterval(interval.current);

}else{
  //update Timer
setTimerDays(days);
setTimerHours(hours);
setTimerMinutes(minutes);
setTimerSeconds(seconds)



}


},1000)


};

useEffect(()=>{
startTimer();
return()=>{
  clearInterval(interval.current);
}


})


  return (
    <div>
      <h1 className="count">Countdown</h1>
      <div className="day">{timerDays}</div>
      <div className="hour">{timerHours}</div>
      <div className="minute">{timerMinutes}</div>
      <div className="second">{timerSeconds}</div>
      <p className="days">days</p>
      <p className="hours">hours</p>
      <p className="minutes">minutes</p>
      <p className="seconds">seconds</p>
  
    </div>
  );
}
