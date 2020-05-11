import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    console.log(`opacity = ${this.props.opacity}`)
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity > .2 ? <ColorBox opacity={this.props.opacity-.1} /> : null}
      </div>
    )
  }

}

