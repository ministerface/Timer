import React, { Component } from 'react';
import ListOfTimers from './ListOfTimer';
import AddTimer from './AddTimer';

require('./styles/main.scss');




export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        counters: []
      }
    }


    tick = () => {
      const { counters } = this.state;
      const index = 0

      counters[index].time = this.state.counters[0].time + 1;
      counters[index].price = this.state.counters[0].price + 100

      this.setState(
        {counters: counters}
      );
    }


      start (id){
        console.log(id);
         //this.timer = setInterval(this.tick, 1000);
      }
      reset = () => {
        this.setState({time: 0});
      }

      pause = () =>{
        clearInterval(this.timer);
      }

    addTimer = () => {

        const { counters } = this.state;
        counters.unshift({

          name:'Новый счетчик',
          time:0,
          price:0
        });

        this.setState(
          {counters: counters}
        );
    }




    render (){
      const actions = {
        start: this.start,
        pause: this.pause
      }


      return(
        <div className="timer-app">
          <ListOfTimers action={actions} counters={this.state.counters}/>
          <AddTimer action={this.addTimer}/>
        </div>
      )
    };


}



App.getDefaultProps ={
  start: Date.now(),
}
