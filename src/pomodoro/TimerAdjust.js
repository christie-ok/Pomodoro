import React from "react";
import classNames from "../utils/class-names";
import PropTypes from 'prop-types';
import FocusAdjust from "./FocusAdjust"
import BreakAdjust from "./BreakAdjust"

function TimerAdjust({isTimerRunning, session, playPause, focusClickHandler, breakClickHandler, stopClickHandler}) {

    return (
    <div className="pomodoro">
      <div className="row">
      <FocusAdjust session={session} focusClickHandler={focusClickHandler} />
      <BreakAdjust session={session} breakClickHandler={breakClickHandler} />
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
            {/* TODO: Disable the stop button when there is no active session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="stop"
              title="Stop the session"
              onClick={stopClickHandler}
              disabled={!session.label}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

TimerAdjust.propTypes = {
  isTimerRunning: PropTypes.bool,
  session: PropTypes.object,
  playPause: PropTypes.func,
  breakClickHandler: PropTypes.func,
  focusClickHandler: PropTypes.func,
  stopClickHandler: PropTypes.func,
}

export default TimerAdjust;