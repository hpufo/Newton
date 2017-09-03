import React from 'react';

export default class ResultTitle extends React.Component {
  render(){
    return (
    <div>
      <li>{this.props.title}</li>
    </div>
    );
  }
}