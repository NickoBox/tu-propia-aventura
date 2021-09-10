import React, { Component } from 'react';

class Historial extends Component {
  render() {
    return (
      <div className="historial">
        <h3>Selección anterior: {this.props.seleccionAnterior}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <span>{this.props.elecciones}</span>
      </div>
    )
  }
}

export default Historial;