import React, { Component } from 'react';
export default class AddTimer extends Component {



  render() {

    return (

        <div onClick={this.props.action} className="add-button">Новый таймер</div>
    );

  }



}
