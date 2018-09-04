import React, { Component } from 'react';
import './PlayerFace.css';

class PlayerFace extends Component {

    render () {
        var cardGroup = "";
        if (this.props.cards) {
            cardGroup = this.props.cards.map((card, index) =>
            <div className="Card" key={index}>
                <img alt="" src={card.name} />
            </div>);
        }
        return (
            <div className={this.props.class}>
                <div className="HeadImgWrapper">
                    <img className="HeadImg" alt="" src={this.props.profile.avatar} />
                </div>
                <div className="DetailWrapper">
                    <div className="NameWrapper">{this.props.profile.nickname}({this.props.profile.ismaster})</div>
                    <div className="ScoreWrapper">{this.props.score}</div>
                </div>
                <div className="CardWrapper">
                    {cardGroup}
                </div>
            </div>
        );
    }
}

export default PlayerFace;

