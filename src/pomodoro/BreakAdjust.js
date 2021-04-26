import React from "react";
import {minutesToDuration} from "../utils/duration/index.js"
import PropTypes from 'prop-types';

function BreakAdjust({session, breakClickHandler}) {

    return (
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
                  onClick={breakClickHandler}
                  disabled={session.label}
                >
                  <span className="oi oi-minus" id="minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={breakClickHandler}
                  disabled={session.label}
                >
                  <span className="oi oi-plus" id="plus"/>
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

BreakAdjust.propTypes = {
    session: PropTypes.object,
    breakClickHandler: PropTypes.func,
}


export default BreakAdjust;