import React, { useEffect } from "react";
import { Dispatcher } from "./App";
import "./Clock.css";

interface ClockProps {
    startTime: number,
    isPaused: boolean,
    setIsStopped: Dispatcher<boolean>,
}

const Clock = ({startTime, isPaused, setIsStopped}: ClockProps) => {
    let [timeRemaining, setTimeRemaining] = React.useState<number>(startTime);    
    useEffect(() => {
        const countDown = setInterval(() => {
            if (!isPaused) {
                timeRemaining > 0 ? setTimeRemaining(timeRemaining => timeRemaining -1) : setIsStopped(true);
            }
        }, 1000);
        return () => clearInterval(countDown);
    }, [timeRemaining, isPaused]);


    return ( 
    <div className={timeRemaining > 5 ? "clock" : "clock low-time"}>
        {timeRemaining}
    </div> );
}
 
export default Clock;