import React, { Component } from "react";
import banana from "./banana.jpg";

class Ds03 extends Component {
  state = {
    nome: "Lidiane",
    idade: 33,
    comida: "Bobó de camarão",
    musicas: [
      "Aos olhos do Pai",
      "Deus Proverá",
      "Pedro, Thiago, João no barquinho"
    ]
  };

  render() {
    return (
      <div>
        <h1>Prazer, meu nome é {this.state.nome}.</h1>
        <h2>Eu tenho {this.state.idade} anos.</h2>
        <h3>A minha comida favorita é {this.state.comida}.</h3>
        <ul>
          <li>Música: {this.state.musicas[0]}</li>
          <li>Música: {this.state.musicas[1]}</li>
          <li>Música: {this.state.musicas[2]}</li>
        </ul>
        <img src={banana} />
      </div>
    );
  }
}

export default Ds03;
