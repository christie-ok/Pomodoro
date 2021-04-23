import React from "react";
import SessionTitles from "./SessionTitles";
import PropTypes from 'prop-types';

function Countdown({session, isTimerRunning}) {

    const timerText = (session.label === "Focusing") ? session.focusDuration : session.breakDuration;

    const progressBar = (secondsRemaining) => {
        if (session.label === "Focusing") {
          const secondsElapsed = session.focusDuration*60 - secondsRemaining;
          const percentFill = secondsElapsed/(session.focusDuration*60)
          return percentFill*100;
        }
         const secondsElapsed = session.breakDuration*60-secondsRemaining;
         const percentFill = secondsElapsed/(session.breakDuration*60);
         return percentFill*100;
      }

    return (
    <div hidden={!session.label}>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <SessionTitles session={session} timerText={timerText} isTimerRunning={isTimerRunning} />
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow= {progressBar(session.timeRemaining)} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${progressBar(session.timeRemaining)}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
}

Countdown.propTypes = {
  session: PropTypes.object,
  isTimerRunning: PropTypes.bool,
}

export default Countdown;