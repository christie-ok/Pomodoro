import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import TimerAdjust from "./TimerAdjust"
import Countdown from "./Countdown"

// These functions are defined outside of the component to insure they do not have access to state
// and are, therefore more likely to be pure.

/**
 * Update the session state with new state after each tick of the interval.
 * @param prevState
 *  the previous session state
 * @returns
 *  new session state with timing information updated.
 */
function nextTick(prevState) {
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  return {
    ...prevState,
    timeRemaining,
  };
}

/**
 * Higher order function that returns a function to update the session state with the next session type upon timeout.
 * @param focusDuration
 *    the current focus duration
 * @param breakDuration
 *    the current break duration
 * @returns
 *  function to update the session state.
 */
function nextSession(session) {
  /**
   * State function to transition the current session type to the next session. e.g. On Break -> Focusing or Focusing -> On Break
   */
  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        ...session,
        label: "On Break",
        timeRemaining: session.breakDuration * 60,
      };
    }
    return {
      ...session,
      label: "Focusing",
      timeRemaining: session.focusDuration * 60,
    };
  };
}

function Pomodoro() {

  const initialSession = {
    label: null,
    timeRemaining: null,
    focusDuration: 25,
    breakDuration: 5,
  };
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // The current session - null where there is no session running
  const [session, setSession] = useState({...initialSession});

    // ToDo: Allow the user to adjust the focus and break duration.

  

  /**
   * Custom hook that invokes the callback function every second
   *
   * NOTE: You will not need to make changes to the callback function
   */
   useInterval(() => {
    if (session.timeRemaining === 0) {
      new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
      return setSession(nextSession(session));
    }
    return setSession(nextTick);
  },
  isTimerRunning ? 100 : null
);

/**
 * Called whenever the play/pause button is clicked.
 */
function playPause() {
  setIsTimerRunning((prevState) => {
    const nextState = !prevState;
    if (nextState) {
      setSession((session) => {
        return {
        ...session,
            label: "Focusing",
            timeRemaining: session.focusDuration * 60,
          }
        });
    }
    return nextState;
  });
}

const focusClickHandler = ({target}) => { 
  setSession((session) => { 
  if (target.id === "plus") { 
    return { 
      ...session,
      focusDuration: Math.min(60, (session.focusDuration + 5)) 
    } 
  } 
  return { 
    ...session, 
    focusDuration: Math.max(5, (session.focusDuration - 5)) 
  } 
}) 
};

const breakClickHandler = ({target}) => { 
  setSession((session) => { 
    if (target.id === "plus") { 
      return { 
        ...session, 
        breakDuration: Math.min(15, (session.breakDuration + 1)) 
      } 
    }
 return { 
   ...session, 
   breakDuration: Math.max(1, (session.breakDuration - 1)) 
  }
 }) 
}
  
  const stopClickHandler = () => {
    setSession({...initialSession});
    setIsTimerRunning(false);
  }


  

  return (
    <div>
      <TimerAdjust isTimerRunning={isTimerRunning} session={session} playPause={playPause} focusClickHandler={focusClickHandler} breakClickHandler={breakClickHandler} stopClickHandler={stopClickHandler} />
      <Countdown session={session} isTimerRunning={isTimerRunning} />
    </div>
  );
}



export default Pomodoro;