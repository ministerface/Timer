import React, { Component } from 'react';
import classnames from 'classnames';


export default class Timer extends Component {




  componentDidMount () {
    //this.timer = setInterval(this.tick, 1000);
    //if (!this.state.counters.length) {
      //this.addTimer();
    //}
  }
  componentWillUnmount (){
    clearInterval(this.timer)
  }

  addZero (i) {

    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

  secToTime(sec) {
    let dt = new Date();
    dt.setTime(sec*1000);

    return this.addZero(dt.getUTCHours())+':'+this.addZero(dt.getUTCMinutes())+':'+this.addZero(dt.getUTCSeconds());
  }

  start() {
    this.props.action.start(this.props.data.id);
  }

  pause() {
      this.props.action.pause(this.props.data.id);
  }

  reset() {
      this.props.action.reset(this.props.data.id);
  }




render() {
  const {active, name, price, time } = this.props.data;
  const {start} = this.props.action;
  const formatSec = this.secToTime(time);
  let classes = classnames('play-control-outer control-outer', {active: active.start});

  return(

      <div className="timer-body">
        <div className="timer-top">

          <div className="timer-title">
            {name}
          </div>
        </div>
        <div className="timer-middle">
          <div className="timer-controls">
            <div className={classes} onclick="start_timer();">
              <div className="control-inner">
                <div onClick={this.start.bind(this)} className="control-icon control-icon-play">
                  <i className="material-icons">&#xE037;</i>
                </div>
              </div>
            </div>
            <div className="stop-control-outer control-outer" onclick="stop_timer();">
              <div className="control-inner">
                <div onClick={this.pause.bind(this)} className="control-icon control-icon-stop">
                  <i className="material-icons">&#xE034;</i>
                </div>
              </div>
            </div>
            <div className="reset-control-outer control-outer" onclick="reset_timer();">
              <div className="control-inner">
                <div onClick={this.reset.bind(this)} className="control-icon">
                  <i className="material-icons">&#xE028;</i>
                </div>
              </div>
            </div>
          </div>
          <div className="timer-numbers-block">
            <div className="timer_numbers" id="timer_numbers">
              {formatSec}
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
            {price} руб.
          </div>
        </div>
      </div>


  );
}

}
