import React, { Component } from 'react';

class Opciones extends Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button className="botones" onClick={this.props.handleClick} id="A">A</button>
          <h2>{this.props.opcionA}</h2>
        </div>
        <div className="opcion">
          <button className="botones"  onClick={this.props.handleClick} id="B">B</button>
          <h2>{this.props.opcionB}</h2>
        </div>
      </div>
    )
  }
}

export default Opciones;