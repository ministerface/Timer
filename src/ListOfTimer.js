import React, { Component } from 'react';
import Timer from './Timer';


export default class ListOfTimers extends Component {






render() {
    const action = this.props.action;

    let counters = this.props.counters.map(function(counter, i) {
                return <Timer  key={i} data={counter} action={action}/>
    });

    return (
        <div className="timer-background">
            {counters}
        </div>
    );
}

}


export default ListOfTimers;
