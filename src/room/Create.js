import React, { Component } from 'react';
import './Create.css';

import Api from '../Api.js';

class Create extends Component {

    constructor(props){
        super(props);

        this.api = new Api();
        this.playtype = 1;
        this.round = 10;
        this.base = 2;
        this.paytype = 1;
        this.rules = 1;
        this.spectype = [];

        this.doCreate = this.doCreate.bind(this);
        this.doOpenGame = this.doOpenGame.bind(this);
    }

    doCreate() {
        var token = this.api.token();
        console.info('do create');
        console.info(this.props.app);
        this.api.create({
            token: token,
            playtype: this.playtype,
            round: this.round,
            base: this.base,
            paytype: this.paytype,
            rules: this.rules,
            spectype: this.spectype.join(","),
        }, this.doOpenGame);
    }

    doOpenGame(data) {
        console.info("do open game");
        this.props.app.setState({view:'game'});
    }

    render() {
        return (
            <div className="CreateDialog">
                <div className="GameMain">
                    <div className="GameType">
                        <div className="GameTypeItem">轮庄</div>
                        <div className="GameTypeItem">定庄</div>
                        <div className="GameTypeItem">牛牛上庄</div>
                        <div className="GameTypeItem">通比牛牛</div>
                    </div>
                    <div className="GameOption">
                        <div className="GameOptionItem">
                            <span>局数</span>
                            <span><input type="radio" name="round" value="10" defaultChecked/>10局</span>
                            <span><input type="radio" name="round" value="20" />20局</span>
                            <span><input type="radio" name="round" value="30" />30局</span>
                        </div>
                        <div className="GameOptionItem">
                            <span>基础分</span>
                            <span><input type="radio" name="base" value="2" defaultChecked/>2分</span>
                            <span><input type="radio" name="base" value="5" />5分</span>
                            <span><input type="radio" name="base" value="10" />10分</span>
                        </div>
                        <div className="GameOptionItem">
                            <span>房费</span>
                            <span><input type="radio" name="paytype" value="1" defaultChecked/>AA支付</span>
                            <span><input type="radio" name="paytype" value="2" />房主支付</span>
                        </div>
                        <div className="GameOptionItem">
                            <span>翻倍规则</span>
                            <span>
                                <select name="rules">
                                    <option value="1">牛牛x4 牛九x3 牛八牛七x2</option>
                                    <option value="2">牛牛x4 牛九x3 牛八x2</option>
                                </select>
                            </span>
                        </div>
                        <div className="GameOptionItem">
                            <span>特殊牌型</span>
                            <span><input type="checkbox" name="spectype" value="1" />五花（5倍）</span>
                            <span><input type="checkbox" name="spectype" value="2" />炸弹（6倍）</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={this.doCreate.bind(this)}>确定</button>
                </div>
            </div>
            
        );
    }
}

export default Create;
