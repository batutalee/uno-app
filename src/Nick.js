import React, { Component } from 'react';
import ReactDom from "react-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.jpg";
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
//import { Button } from '@material-ui/core';

class Nick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nick: "",
            sala: "",
            tela: this.telaNick()
        };
        //this.verificaJogo = this.verificaJogo.bind(this);
    }

    jogar = () => {
        var nickJogador = document.getElementById('nickDigitado').value;
        if (nickJogador == "") {
            alert("Sua MULA! Num ta vendo que é pra digitar o Nick?");
        } else {
            this.setState({
                nick: document.getElementById('nickDigitado').value,
                tela: this.telaListaDeNick()
            });
        }
    }

    verificaSala = () => {
        var jogoAtivo = 1;
        if (jogoAtivo === 0) {
            alert("Se fudeu, sala cheia! Pera um cado e tenta de novo!");
            document.getElementById('botaoEntrar').disabled = false;

        } else {
            document.getElementById('botaoEntrar').disabled = true;
            this.jogar();
        }

    }

    telaNick = () => {
        return (
            <div>
                <img className="img-fluid rounded-circle" id="logo" src={logo} />
                <h1>Bora jogar Uno!!!</h1>

                <form id="form-geral">
                    <div className="form-group" id="input-nick">
                        <input className="form-control form-control-lg" id="nickDigitado" type="text" placeholder="Digite seu Nick..." maxLength="20" />
                    </div>
                    <input id="botaoEntrar" type="button" className="btn btn-primary" onClick={this.verificaSala} value="Jogar" />
                </form>
            </div>
        );
    }

    telaListaDeNick = () => {
        var i, idUsuario;
        let linhasLista = []
        const expressaoChefeComum = []
        for (i = 0; i < 10; i++) {
            linhasLista.push(<ListGroup.Item>Nick</ListGroup.Item>)
        }

        idUsuario = 1;
        if (idUsuario === 1) {
            expressaoChefeComum.push(<input id="botao-iniciar-jogo" type="button" className="btn btn-primary" onClick={this.iniciarJogo} value="Jogar" />)
        } else {
            expressaoChefeComum.push(<h4>Aguarde o Chefe iniciar o jogo.</h4>)
        }
        return (
            <div>
                <h1>Sala</h1>
                <h2>Quem tá mandando nessa porra toda!</h2>
                <h2>Usuário Chefe do Banco de Dados</h2>
                <h3>Lista de Nicks</h3>
                <ListGroup id="lista-nick">
                    {linhasLista}
                </ListGroup>
                {expressaoChefeComum}
            </div>
        );
    }

    iniciarJogo = () => {
        this.setState({
            tela: this.telaJogo()
        });
    }
    telaJogo = () => {
        return (
            <div>
                <h1>Bora jogar!! Separar por COR!!!</h1>
                <Container>
                    <Row>
                        <Col sm = {8}>Texto Andamento</Col>
                        <Col sm = {4}>Sair</Col>
                    </Row>
                    <Row>
                        <Col>Jogador 1</Col>
                        <Col>Jogador 2</Col>
                        <Col>Jogador 3</Col>
                    </Row>
                    <Row>
                        <Col>Jogador 4</Col>
                        <Col>Mesa</Col>
                        <Col>Jogador 5</Col>
                    </Row>
                    <Row>
                        <Col>Comprar</Col>
                        <Col>Jogador Principal</Col>
                        <Col>Uno</Col>
                        <Col>+4</Col>
                    </Row>
                </Container>
            </div>
        );
    }

    render(props) {
        return (
            <div className="container text-center" id="geral" >

                {this.state.tela}
            </div >
        );
    }
}
//const rootElement = document. getElementById("root")
//ReactDom.render(<Nick />, rootElement)
export default Nick;