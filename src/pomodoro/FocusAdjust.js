import React from "react";
import {minutesToDuration} from "../utils/duration/index.js"
import PropTypes from 'prop-types';

function FocusAdjust({session, focusClickHandler}) {

    return (
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
                onClick={focusClickHandler}
                disabled = {session.label}
              >
                <span className="oi oi-minus" id="minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={focusClickHandler}
                disabled={session.label}
              >
                <span className="oi oi-plus" id="plus" />
              </button>
            </div>
          </div>
        </div>
        
    )
}

FocusAdjust.propTypes = {
    session: PropTypes.object,
    focusClickHandler: PropTypes.func,
}


export default FocusAdjust;