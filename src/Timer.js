import React, { Component } from 'react';
export default class Timer extends Component {

render() {
  return(

    <div className="timer-background">
      <div className="timer-body">
        <div className="timer-top">

          <div className="timer-title">
            Разработка сайта
          </div>
        </div>
        <div className="timer-middle">
          <div className="timer-controls">
            <div className="play-control-outer control-outer" onclick="start_timer();">
              <div className="control-inner">
                <div className="control-icon control-icon-play">
                  <i className="material-icons">&#xE037;</i>
                </div>
              </div>
            </div>
            <div className="stop-control-outer control-outer" onclick="stop_timer();">
              <div className="control-inner">
                <div className="control-icon control-icon-stop">
                  <i className="material-icons">&#xE034;</i>
                </div>
              </div>
            </div>
            <div className="reset-control-outer control-outer" onclick="reset_timer();">
              <div className="control-inner">
                <div className="control-icon">
                  <i className="material-icons">&#xE028;</i>
                </div>
              </div>
            </div>
          </div>
          <div className="timer-numbers-block">
            <div className="timer_numbers" id="timer_numbers">
              00:00:00
            </div>
            <div className="timer_number_titles">
              <div className="timer_number_hour">
                час
              </div>
              <div className="timer_number_min">
                мин
              </div>
              <div className="timer_number_sec">
                сек
              </div>
            </div>
          </div>
        </div>
        <div className="timer-bottom">
          <div className="timer-current-title">
            Стоимость
          </div>
          <div className="timer-current-time" id="timer-current-time">
            500 руб.
          </div>
        </div>
      </div>
      <div className="add-button">Новый таймер</div>
    </div>

  );
}

}
