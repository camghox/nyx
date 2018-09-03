import React, { Component } from 'react';
import './PlayerFace.css';
import Api from '../../Api';

class PlayerFace extends Component {

    constructor(props){
        super(props);
        this.api = new Api();

        this.state = {
            class: this.props.class,
            src: this.props.src,
            name: this.props.name,
            ismaster: this.props.ismaster,
            score: this.props.score,
            cards: this.props.cards,
        };
    }

    render () {
        var cardGroup = "";
        if (this.state.cards) {
            cardGroup = this.props.cards.map((card) =>
            <div className="Card" key={card.value*1000+card.color+card.idx}>
                <img alt="" src={card.name} />
            </div>);
        }
        return (
            <div className={this.state.class}>
                <div className="HeadImgWrapper">
                    <img className="HeadImg" alt="" src={this.state.src} />
                </div>
                <div className="DetailWrapper">
                    <div className="NameWrapper">{this.state.name}({this.state.ismaster})</div>
                    <div className="ScoreWrapper">{this.state.score}</div>
                </div>
                <div className="CardWrapper">
                    {cardGroup}
                </div>
            </div>
        );
    }
}

export default PlayerFace;

