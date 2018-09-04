import React, { Component } from 'react';
import './OtherPlayerFace.css';

class OtherPlayerFace extends Component {

    render () {
        var cardGroup = "";
        if (this.props.cards) {
            cardGroup = this.props.cards.map((card, index) =>
            <div className="OtherCard" key={index}>
                <img alt="" src={card.name} />
            </div>);
        }
        return (
            <div className={this.props.class}>
                <div className="OtherHeadImgWrapper">
                    <img className="OtherHeadImg" alt="" src={this.props.profile.avatar} />
                </div>
                <div className="OtherDetailWrapper">
                    <div className="OtherNameWrapper">{this.props.profile.nickname}({this.props.profile.ismaster})</div>
                    <div className="OtherScoreWrapper">{this.props.score}</div>
                </div>
                <div className="OtherCardWrapper">
                    {cardGroup}
                </div>
            </div>
        );
    }
}

export default OtherPlayerFace;

