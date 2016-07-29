import React, { Component } from 'react';
import ListOfTimers from './ListOfTimer';
import AddTimer from './AddTimer';
import { v4 } from 'node-uuid';

require('./styles/main.scss');




export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        counters: []
      }
    }


    tick = (id) => {
      const { counters } = this.state;
      const index = counters.findIndex( (el) => el.id === this.id );

      counters[index].time = this.state.counters[index].time + 1;
      counters[index].price = this.state.counters[index].price + 100

      this.setState(
        {counters: counters}
      );
    }


    pause = (id) =>{
      const { counters } = this.state;
      const index = counters.findIndex( (el) => el.id === id );

      counters[index].active.start = false;


      clearInterval(counters[index].active.time);
    }

      start = (id) => {
          const { counters } = this.state;

      counters.map(function(counter, i) {
              if (id !== counter.id) {
                clearInterval(counter.active.time);
              }
        });




        const index = counters.findIndex( (el) => el.id === id );

        this.id = id;
        counters[index].active.start = true;
        counters[index].active.time = setInterval(this.tick, 1000);

      }

      reset = (id) => {

        const { counters } = this.state;
        const index = counters.findIndex( (el) => el.id === this.id );

        counters[index].time = 0;
        counters[index].price = 0;

        this.setState(
          {counters: counters}
        );

      }



    addTimer = () => {

        const { counters } = this.state;
        counters.unshift({
          id: v4(),
          name:'Новый счетчик',
          time:0,
          price:0,
          active: {
            start:false,
            time: null
          }
        });

        this.setState(
          {counters: counters}
        );
    }




    render (){
      const actions = {
        start: this.start,
        pause: this.pause,
        reset: this.reset
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
