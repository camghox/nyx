import React, { Component } from 'react';
import './Game.css';
import Api from '../Api.js';
import RoomInfo from './com/RoomInfo.js';
import PlayerFace from './com/PlayerFace.js';
import OtherPlayerFace from './com/OtherPlayerFace.js';

class Game extends Component {

    

    constructor(props){
        super(props);

        this.api = new Api();
        this.state = {
            profile: this.api.profile(),
            score: 0,
            cards: [],
            result: {},
            state: 0,
            player1: {},
            score1: 0,
            cards1: [],
            result1: {},
            player2: {},
            score2: 0,
            cards2: [],
            result2: {},
            player3: {},
            score3: 0,
            cards3: [],
            result3: {},
            player4: {},
            score4: 0,
            cards4: [],
            result4: {},
            player5: {},
            score5: 0,
            cards5: [],
            result5: {},
            player6: {},
            score6: 0,
            cards6: [],
            result6: {},
        };
        this.startGame = this.startGame.bind(this);
        this.quitGame = this.quitGame.bind(this);
        this.playout = this.playout.bind(this);
        this.getState = this.getState.bind(this);
        //this.stateInterval = setInterval(this.getState, 1000);
    }

    getState(){
        //console.info('get state');
        var self = this;
        this.api.getstate(function(data){
            //console.info('check state');
            if (data && data.state) {
                switch(parseInt(data.state, 10)){
                    //等待开始
                    case 1: {
                        
                        break;
                    }
                    //游戏开始
                    case 2: {
                        self.api.mycards(function(data){
                            if (data && data.ret === 0) {
                                var cards = [];
                                for(var k in data.card){
                                    var card = data.card[k];
                                    card.name = '/images/card/card' + card.value + '_' + card.color + ".png";
                                    cards.push(card);
                                }
                                self.setState({cards: cards});
                                console.info(cards);
                            }
                        });
                        self.api.players(function(data){
                            if (data && data.players) {
                                console.info(data.players);
                                const EMPTY_CARD = {cid:0, value:0, color:0, idx:1, name:'/images/card/cardbgsmall.png'};
                                var mid = self.api.mid();
                                for(var k=0;k<data.players.length;k++){
                                    var player = data.players[k];
                                    if (parseInt(player.mid,10) !== parseInt(mid,10)){
                                        var cards = [
                                            EMPTY_CARD, EMPTY_CARD, EMPTY_CARD, EMPTY_CARD, EMPTY_CARD,
                                        ];
                                        if (!self.state.player1.mid) {
                                            self.setState({player1:player, cards1:cards});
                                        } else if (!self.state.player2.mid) {
                                            self.setState({player2:player, cards2:cards});
                                        } else if (!self.state.player3.mid) {
                                            self.setState({player3:player, cards3:cards});
                                        } else if (!self.state.player4.mid) {
                                            self.setState({player4:player, cards4:cards});
                                        } else if (!self.state.player5.mid) {
                                            self.setState({player5:player, cards5:cards});
                                        }
                                    }//end if
                                }//end for
                            }//end if
                        });
                        break;
                    }
                    //游戏结束
                    case 3: {
                        self.api.results(function(data){
                            if (data && data.results) {
                                //{"result":[{"mid":"800001","value":"9","name":"牛九","differ":"6","fen":"6","coin":"24000","cards":[{"cid":"22","value":"7","color":"3"},{"cid":"1","value":"2","color":"4"},{"cid":"52","value":"1","color":"1"},{"cid":"13","value":"5","color":"4"},{"cid":"11","value":"4","color":"2"}]},{"mid":"800000","value":"1","name":"牛一","differ":"-6","fen":"-6","coin":"66000","cards":[{"cid":"35","value":"10","color":"2"},{"cid":"2","value":"2","color":"3"},{"cid":"31","value":"9","color":"2"},{"cid":"34","value":"10","color":"3"},{"cid":"41","value":"12","color":"4"}]}]}
                            }
                        });
                        break;
                    }
                    default: {
    
                    }
                }
                
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
                console.info("playout >>>>>>>>>>>>>>>>>>");
                console.info(data);
            });
        });
    }

    render() {
        return (
            <div className="GameTable">
                <RoomInfo></RoomInfo>
                <div className="PlayTable">
                    <div className="PlayersContainer">
                    {this.state.player1.mid &&
                        <OtherPlayerFace class={'OtherPlayerFace OtherPlayerFace Player1'} profile={this.state.player1} cards={this.state.cards1} score={this.state.score1}></OtherPlayerFace>
                    }
                    {this.state.player2.mid &&
                        <OtherPlayerFace class={'OtherPlayerFace OtherPlayerFace Player2'} profile={this.state.player2} cards={this.state.cards2} score={this.state.score2}></OtherPlayerFace>
                    }
                    {this.state.player3.mid &&
                        <OtherPlayerFace class={'OtherPlayerFace OtherPlayerFace Player3'} profile={this.state.player3} cards={this.state.cards3} score={this.state.score3}></OtherPlayerFace>
                    }
                    {this.state.player4.mid &&
                        <OtherPlayerFace class={'OtherPlayerFace OtherPlayerFace Player4'} profile={this.state.player4} cards={this.state.cards4} score={this.state.score4}></OtherPlayerFace>
                    }
                    {this.state.player5.mid &&
                        <OtherPlayerFace class={'OtherPlayerFace OtherPlayerFace Player5'} profile={this.state.player5} cards={this.state.cards5} score={this.state.score5}></OtherPlayerFace>
                    }
                    </div>
                    <div className="UsContainer">
                        <PlayerFace class={'OtherPlayerFace MyFace'} profile={this.state.profile} cards={this.state.cards} score={this.state.score}></PlayerFace>
                    </div>
                </div>               
                <div className="PlayKit">
                    <button onClick={this.getState}>State</button>
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
