import React, { Component } from 'react';
require('./styles/main.scss');

export default class App extends Component {

    constructor(props){
      super(props)
      this.state = {
        counters: []
      }
    }

    tick = () => {

      const peeps = this.state.counters;
      const index = 0

      peeps[index].time = this.state.counters[0].time + 1;
      peeps[index].price = this.state.counters[0].price + 100

      this.setState(
        {counters: peeps}
      );
    }

    componentDidMount () {
      //this.timer = setInterval(this.tick, 1000);
      if (!this.state.counters.length) {
        this.addTimer();
      }
    }
    componentWillUnmount (){
      clearInterval(this.timer)
    }

    start (){
       this.timer = setInterval(this.tick, 1000);
   }
    reset = () => {
      this.setState({time: 0});
    }

    pause = () =>{
      clearInterval(this.timer);
    }

    addTimer = () => {
        const peeps = this.state.counters;

    peeps.unshift({
        name:'Новый счетчик',
        time:0,
        price:0
      });
      
      this.setState(
        {counters: peeps}
      );


    }

    render (){

      return(
        <div className="">

          <div ><h1 className="text"> This experiment started {this.state.time} seconds ago.</h1></div>
          <button className="waves-effect waves-light yellow darken-1 btn" onClick={this.pause}>pause</button>
          <button className="waves-effect waves-light green lighten-1 btn" onClick={this.start.bind(this)}>start</button>
          <button className="waves-effect waves-light  red darken-1 btn" onClick={this.addTimer.bind(this)}>add</button>
          </div>


      )
    };


}



App.getDefaultProps ={
  start: Date.now(),
}
