import React, { Component } from 'react';
import './Game.css';
import Api from '../Api.js';
import RoomInfo from './com/RoomInfo.js';
import PlayerFace from './com/PlayerFace.js';

class Game extends Component {

    constructor(props){
        super(props);

        this.api = new Api();
        this.state = {
            players: [],
            state: 0,
            cards: [],
            player1: {},
            player2: {},
            player3: {},
            player4: {},
            player5: {},
            player6: {},
        };
        this.startGame = this.startGame.bind(this);
        this.quitGame = this.quitGame.bind(this);
        this.playout = this.playout.bind(this);
        this.getGameState = this.getGameState.bind(this);
        this.stateInterval = setInterval(this.getGameState, 1000);
    }

    getGameState(){
        //console.info('get state');
        var self = this;
        this.api.getstate(function(data){
            console.info('check state');
            if (data && data.state) {
                switch(parseInt(data.state, 10)){
                    case 1: {
                        
                        break;
                    }
                    case 2: {
                        self.api.mycards(function(data){
                            if (data) {
                                var cards = [];
                                for(var k in data.card){
                                    var card = data.card[k];
                                    card.name = '/images/card/card' + card.value + '_' + card.color + ".png";
                                    cards.push(card);
                                }
                                self.setState({cards:cards});
                            }
                        });
                        break;
                    }
                    case 3: {
                        break;
                    }
                    default: {
    
                    }
                }
                self.api.players(function(data){
                    if (data.players) {
                        console.info(data.players);
                        var mid = self.api.mid();
                        self.setState({
                            player1:{},player2:{},player3:{},player4:{},player5:{},
                        });
                        for(var k=0;k<data.players.length;k++){
                            var player = data.players[k];
                            if (parseInt(player.mid,10) !== parseInt(mid,10)){
                                player.cards = [
                                    {cid:0, value:0, color:0, idx:1, name:'/images/card/cardbgsmall.png'},
                                    {cid:0, value:0, color:0, idx:2, name:'/images/card/cardbgsmall.png'},
                                    {cid:0, value:0, color:0, idx:3, name:'/images/card/cardbgsmall.png'},
                                    {cid:0, value:0, color:0, idx:4, name:'/images/card/cardbgsmall.png'},
                                    {cid:0, value:0, color:0, idx:5, name:'/images/card/cardbgsmall.png'},
                                ];
                                if (!self.state.player1.mid) {
                                    self.setState({player1:player});
                                } else if (!self.state.player2.mid) {
                                    self.setState({player2:player});
                                } else if (!self.state.player3.mid) {
                                    self.setState({player3:player});
                                } else if (!self.state.player4.mid) {
                                    self.setState({player4:player});
                                } else if (!self.state.player5.mid) {
                                    self.setState({player5:player});
                                }
                            }//end if
                        }//end for
                    }//end if
                });
            }
        });
    }

    quitGame() {
        console.info('quit');
        clearInterval(this.stateInterval);
    }

    startGame() {
        this.api.start(function(data){

        });
    }

    playout(){
        var self = this;
        self.api.playout(function(data){
            self.api.results(function(data){

            });
        });
    }

    render() {
        var profile = this.api.profile();
        return (
            <div className="GameTable">
                <RoomInfo></RoomInfo>
                <div className="PlayTable">
                    <div className="PlayersContainer">
                    {this.state.player1.mid &&
                        <OtherHeadImg player={this.state.player1} class="HeadImg Player1" ></OtherHeadImg>
                    }
                    {this.state.player2.mid &&
                        <OtherHeadImg player={this.state.player2} class="HeadImg Player2" ></OtherHeadImg>
                    }
                    {this.state.player3.mid &&
                        <OtherHeadImg player={this.state.player3} class="HeadImg Player3" ></OtherHeadImg>
                    }
                    {this.state.player4.mid &&
                        <OtherHeadImg player={this.state.player4} class="HeadImg Player4" ></OtherHeadImg>
                    }
                    {this.state.player5.mid &&
                        <OtherHeadImg player={this.state.player5} class="HeadImg Player5" ></OtherHeadImg>
                    }
                    </div>
                    <div className="UsContainer">
                        <PlayerFace class={'PlayerFace MyFace'} src={profile.avatar} name={profile.nickname} ismaster={1} score={0} cards={this.state.cards}></PlayerFace>
                    </div>
                </div>               
                <div className="PlayKit">
                    <button onClick={this.getGameState}>State</button>
                    <button onClick={this.startGame}>Start</button>
                    <button onClick={this.playout}>Play</button>
                    <button onClick={this.quitGame}>Quit</button>
                </div>
                <RuleButton></RuleButton>
                <SetButton></SetButton>
                <MsgButton></MsgButton>
            </div>
        );
    }
}

class CardGroup extends Component{
    render() {
        var cardGroup = "";
        if (this.props.cards) {
            cardGroup = this.props.cards.map((card) =>
            <div className="Card" key={card.value*1000+card.color+card.idx}>
                <img alt="" src={card.name} />
            </div>);
        }
        return (
            <div className="CardGroup" >
                {cardGroup}
            </div>
        );
    }
}

class OtherCardGroup extends Component{
    render() {
        var cardGroup = "";
        if (this.props.cards) {
            cardGroup = this.props.cards.map((card) =>
            <div className="OtherCard" key={card.value*1000+card.color+card.idx}>
                <img alt="" src={card.name} />
            </div>);
        }
        return (
            <div className="OtherCardGroup" >
                {cardGroup}
            </div>
        );
    }
}

class OtherHeadImg extends Component{

    render() {
        return (
            <div className={this.props.class}>
                <div className="ImgContainer">
                    <div className="Img" >
                    <img alt="" src={this.props.player.avatar} />
                    </div>
                    <div className="Nickname">{this.props.player.nickname}</div>
                </div>
                <OtherCardGroup cards={this.props.player.cards}></OtherCardGroup>
            </div>
        );
    }
}

class HeadImg extends Component{

    render() {
        return (
            <div className="HeadImg">
                <div className="Img" >
                <img alt="" src={this.props.profile.avatar} />
                </div>
                <div className="Nickname">{this.props.profile.nickname}</div>
            </div>
        );
    }
}

class RuleButton extends Component{
    render() {
        return (
            <div className="RuleButton">
                <img alt="" src="/images/game/roominfo.png"/>
            </div>
        );
    }
}

class SetButton extends Component{
    render() {
        return (
            <div className="SetButton">
                <img alt="" src="/images/game/gamesetting.png"/>
            </div>
        );
    }
}

class MsgButton extends Component{
    render() {
        return (
            <div className="MsgButton">
                <img alt="" src="/images/game/gamemsg.png"/>
            </div>
        );
    }
}


export default Game;
