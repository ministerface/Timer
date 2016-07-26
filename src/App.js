import React, { Component } from 'react';

export default class App extends Component {

    constructor(props){
      super(props)
      this.state = {
        counters: [
          {
            id: 1,
            time: 0,
            price:0
          }
        ]
      }
    }

    tick = () => {

      var peeps = this.state.counters;
      var index = 0

      peeps[index].time = this.state.counters[0].time + 1;
      peeps[index].price = this.state.counters[0].price + 100

      this.setState(
        {counters: peeps}
      );
    }

    componentDidMount () {
      //this.timer = setInterval(this.tick, 1000);
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

    render (){

      return(
        <div className="">

          <div ><p className="text"> This experiment started {this.state.time} seconds ago.</p></div>
          <button className="waves-effect waves-light yellow darken-1 btn" onClick={this.pause}>pause</button>
          <button className="waves-effect waves-light green lighten-1 btn" onClick={this.start.bind(this)}>start</button>
          <button className="waves-effect waves-light  red darken-1 btn" onClick={this.reset}>reset</button>
          </div>


      )
    };


}



App.getDefaultProps ={
  start: Date.now(),
}
