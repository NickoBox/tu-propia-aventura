import React, { Component } from 'react';
import Opciones from './Opciones.js';
import Historial from './Historial.js';
import Swal from 'sweetalert2'

import data from './data.json';
const elecciones = [];

class Aventura extends Component {

  constructor(props) {
    super(props);
    this.state = {
      escenario: 0,
      seleccionAnterior: ""
    }
  }

  componentDidMount(){
    Swal.fire({
      title: 'Bienvenido a tu propia aventura!',
      text: "Tus desiciones afectaran el final de tu historia, elige sabiamente...",
      confirmButtonColor: '#30a830',
      confirmButtonText: 'Comenzar'
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.escenario !== this.state.escenario) {
      elecciones.push(this.state.seleccionAnterior);
    }
  }

  handleClick = (e) => {
    const id = e.target.id;
    if (this.state.escenario >= 7) {
      Swal.fire({
        title: 'Gracias por soñar!',
        text: "Vuelve pronto...",
        confirmButtonColor: '#30a830',
        confirmButtonText: 'Seguir soñando',
        showDenyButton: true,
        denyButtonText: 'Repositorio GitHub',
        denyButtonColor: '#333333'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Reiniciando el sueño...",
            icon: "success"
          })
          setTimeout( () => window.location.reload(),1500)
        } else if (result.isDenied) {
          Swal.fire({
            title: "Viajando al repositorio",
            icon: "success"
          })
          setTimeout( () => window.location = "https://github.com/NickoAcu/tu-propia-aventura", 500)
        }
      });
    } else if (id === "A" && this.state.seleccionAnterior !== "A") {
      this.setState({
        escenario: this.state.escenario + 1,
        seleccionAnterior: "A",
      });
    } else if (id === "A" && this.state.seleccionAnterior === "A") {
      this.setState({
        escenario: this.state.escenario + 2,
      });
    } else if (id === "B" && this.state.seleccionAnterior === "A") {
      this.setState({
        escenario: this.state.escenario + 3,
        seleccionAnterior: "B",
      });
    } else if (id === "B") {
      this.setState({
        escenario: this.state.escenario + 2,
        seleccionAnterior: "B",
      });
    }
    console.log(elecciones);
  };

  render() {
    return (
      <div className="main">
        <div className="background"></div>
        <div className="layout">
          <h1 className="historia">{data[this.state.escenario].historia}</h1>
          <Opciones
            handleClick={this.handleClick}
            opcionA={data[this.state.escenario].opciones.a}
            opcionB={data[this.state.escenario].opciones.b}
          />
          <Historial 
            seleccionAnterior={this.state.seleccionAnterior}
            elecciones={elecciones.map(
              (eleccion, index) => (
                <li key={index}>{eleccion}</li>
              ),
              data[this.state.escenario].id
            )}
          />
        </div>
      </div>
    )
  }
}

export default Aventura;