import React, { Component } from 'react';
import ReactDom from "react-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.jpg";
import jigsaw from "./img/jigsaw.jpg";
import baralho from "./img/baralho/baralho-jogador.png";
import baralhocomprar from "./img/baralho/baralho-comprar.png";
import { ListGroup, Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import carta1 from "./img/baralho/Amarelo/voltaamarelo.jpg";
import carta2 from "./img/baralho/Amarelo/maisdoisamarelo.jpg";
import carta3 from "./img/baralho/Neutro/mais4.jpg";
import carta4 from "./img/baralho/Neutro/escolhecor.jpg";
//import { Button } from '@material-ui/core';

class Nick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acao: "Começou sa bagaça!",
            cartas: "",
            nick: "",
            sala: "",
            tela: this.telaJogo()
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

    telaInicio = () => {
        this.setState({
            //reload na aplicação backend
            tela: this.telaNick()
        });
    }

    telaSaiuJogo = () => {

        return (
            <div>
                <h1><font color="red">Algum FDP saiu da partida!</font></h1>
                <h3>Você será redirecionado para a Tela de Nick em alguns segundos</h3>
                {setTimeout(this.telaInicio, 3000)}
            </div>

        );

    }

    encerrarJogo = () => {
        this.setState({
            tela: this.telaSaiuJogo()
        });
    }

    renderizarAdamento(texto, acaoAndamento) {

        return (
            <Card>
                <Card.Title>{texto}</Card.Title>
                <Card.Text>
                    {acaoAndamento}
                </Card.Text>
            </Card>
        );
    }

    renderizarJogador(nomeJogador, numeroCartas) {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{nomeJogador}</Card.Title>
                    <Card.Text>
                        Número de cartas: {numeroCartas}
                    </Card.Text>
                    <img id="baralho-jogador" src={baralho} />
                </Card.Body>
            </Card>
        );
    }

    renderizarComprar(nome) {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{nome}</Card.Title>
                    <Button type="button" className="btn btn-primary"  onClick={this.comprou}><img id="baralho-comprar" src={baralhocomprar}/></Button>
                </Card.Body>
            </Card>
        );
    }

    comprou(){
        alert("Comprou!");
    }

    comprarMaisQuatro = () => {
        return (alert("Comprar Mais Quatro!"));
    }

    gritarUno = (numeroCartas) => {
        numeroCartas = 1
        if(numeroCartas === 1){
            return (alert("Uno!"));
        } else {
            return (alert("You shall not pass!"))
        }
    }

    renderizarUnoMaisQuatro(nome) {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{nome}</Card.Title>
                    <input id="botao-opcao" type="button" className="btn btn-primary" onClick={this.comprarMaisQuatro} value="+4" />
                    <input id="botao-opcao" type="button" className="btn btn-primary" onClick={this.gritarUno} value="Uno" />
                </Card.Body>
            </Card>
        );
    }

    renderizarMesa(nome, codigoCarta) {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{nome}</Card.Title>
                    <img src={carta2} />
                </Card.Body>
            </Card>
        );
    }

    cartasJogador = () => {
        var j;
        let cartasDaMao = [];
        //for (j = 0; j < 10; j++) {
            cartasDaMao.push(<ListGroup.Item><Button><img src={carta1}/></Button></ListGroup.Item>)
            cartasDaMao.push(<ListGroup.Item><Button><img src={carta2} /></Button></ListGroup.Item>)
            cartasDaMao.push(<ListGroup.Item><Button><img src={carta3} /></Button></ListGroup.Item>)
            cartasDaMao.push(<ListGroup.Item><Button><img src={carta4} /></Button></ListGroup.Item>)
        //}
        return (
            <div>
                <ListGroup horizontal>
                    {cartasDaMao}
                </ListGroup>
            </div>
        );
    }

    renderizarJogadorPrincipal(nome) {
        
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{nome}</Card.Title>
                        <div>{this.cartasJogador()}</div> 
                    </Card.Body>
                </Card>
            </div>
        );
    }

    sentidoJogo(){
        var sentido = 1;
        if (sentido === 1) {
            return("Horário");
        } else {
            return("Anti-horário")
        }
    }

    telaJogo = () => {
        return (
            <div>
                <div>
                    <h1>Bora jogar!!</h1>
                    <img className="img-fluid rounded-circle" id="jig" src={jigsaw} />
                </div>
                <Container>
                    <Row>
                        <Col sm={8}>{this.renderizarAdamento("Andamento da Partida", "Vez do Jogador Chefe")}</Col>
                        <Col sm={2}><h5>Sentido {this.sentidoJogo()}</h5></Col>
                        <Col sm={2}><input id="botaoEntrar" type="button" className="btn btn-primary" onClick={this.encerrarJogo} value="Sair" /></Col>
                    </Row>
                    <Row>
                        <Col>{this.renderizarJogador("Jogador 1", "3")}</Col>
                        <Col>{this.renderizarJogador("Jogador 2", "3")}</Col>
                        <Col>{this.renderizarJogador("Jogador 3", "3")}</Col>
                    </Row>
                    <Row>
                        <Col>{this.renderizarJogador("Jogador 4", "3")}</Col>
                        <Col>{this.renderizarMesa("Mesa", "1")}</Col>
                        <Col>{this.renderizarJogador("Jogador 5", "3")}</Col>
                    </Row>
                    <Row>
                        <Col>{this.renderizarComprar("Comprar")}</Col>
                        <Col>{this.renderizarJogadorPrincipal("Jogador Principal")}</Col>
                        <Col>{this.renderizarUnoMaisQuatro("Opções")}</Col>
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