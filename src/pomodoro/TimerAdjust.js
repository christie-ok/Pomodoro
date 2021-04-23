import React from "react";
import classNames from "../utils/class-names";
import {minutesToDuration} from "../utils/duration/index.js"
import PropTypes from 'prop-types';

function TimerAdjust({isTimerRunning, session, playPause, focusMinusClickHandler, breakMinusClickHandler, focusPlusClickHandler, breakPlusClickHandler, stopClickHandler}) {

    return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus" >
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(session.focusDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={focusMinusClickHandler}
                disabled = {session.label}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={focusPlusClickHandler}
                disabled={session.label}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* DONE: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(session.breakDuration)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={breakMinusClickHandler}
                  disabled={session.label}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={breakPlusClickHandler}
                  disabled={session.label}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
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
  focusMinusClickHandler: PropTypes.func,
  breakMinusClickHandler: PropTypes.func,
  focusPlusClickHandler: PropTypes.func,
  breakPlusClickHandler: PropTypes.func,
  stopClickHandler: PropTypes.func,
}

export default TimerAdjust;