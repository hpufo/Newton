import React from 'react';

export default class ResultTitle extends React.Component {
  render(){
    return (
    <div>
      <h3>{this.props.title}</h3>
    </div>
    );
  }
}