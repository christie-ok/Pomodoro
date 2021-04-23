import React from "react";
import {secondsToDuration, minutesToDuration} from "../utils/duration/index.js"
import PropTypes from 'prop-types';

function SessionTitles({session, timerText, isTimerRunning}) {
  if (!session.label) return null;
  return (
    <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
        <h2 data-testid="session-title">
          {session.label} for {minutesToDuration(timerText)} minutes
        </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
        <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
            <p hidden={!(session && !isTimerRunning)}>PAUSED</p>
          </div>
    )
}

SessionTitles.propTypes = {
  session: PropTypes.object,
  timerText: PropTypes.number,
  isTimerRunning: PropTypes.bool,
}

export default SessionTitles;