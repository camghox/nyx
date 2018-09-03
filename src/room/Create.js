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
        this.finishCreate = this.finishCreate.bind(this);
        this.changeLun = this.changeLun.bind(this);
        this.changeDing = this.changeDing.bind(this);
        this.changeNnsz = this.changeNnsz.bind(this);
        this.changeTbnn = this.changeTbnn.bind(this);
    }

    doCreate() {
        var token = this.api.token();
        console.info('do create');
        this.api.create({
            token: token,
            playtype: this.playtype,
            round: this.round,
            base: this.base,
            paytype: this.paytype,
            rules: this.rules,
            spectype: this.spectype.join(","),
        }, this.finishCreate);
    }

    finishCreate(data) {
        console.info("do open game");
        if (data.ret === 0) {
            window.location = '/game';
        }
        //this.props.app.setState({view:'game'});
    }

    close(){
        window.history.go(-1);
    }

    changeLun(e){
        console.info(e)
    }

    changeDing(e){
        console.info(e)
    }

    changeNnsz(e){
        console.info(e)
    }

    changeTbnn(e){
        console.info(e)
    }

    render() {
        return (
            <div className="CreateDialog">
                <div className="GameMain">
                    <TypeButtonGroup></TypeButtonGroup>
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
                        <div className="Buttonbar">
                            <div className="ButtonWrapper">
                                <img alt="" src="/images/create/create.png" onClick={this.doCreate} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CloseButton" onClick={this.close}>
                    <img alt="" src="/images/create/close.png" />
                </div>
            </div>
        );
    }
}

class CreateButton extends Component {

    constructor(props){
        super(props);

        this.onClick = props.onClick.bind(this);
    }

    render(){
        return <div className="ButtonWrapper">
                    <img alt="" src="/images/create/create.png" />
                </div>;
    }
}

class TypeButtonGroup extends Component {

    constructor(props){
        super(props);

        this.state = {
            isLunBtn: true,
            isDingBtn: false,
            isNnszBtn: false,
            isTbnnBtn: false,
        };
        this.clickLun = this.clickLun.bind(this);
        this.clickDing = this.clickDing.bind(this);
        this.clickNnsz = this.clickNnsz.bind(this);
        this.clickTbnn = this.clickTbnn.bind(this);
    }

    clickLun() {
        //console.info('lun');
        this.setState({
            isLunBtn: true,
            isDingBtn: false,
            isNnszBtn: false,
            isTbnnBtn: false,
        });
    }

    clickDing() {
        //console.info('ding');
        this.setState({
            isLunBtn: false,
            isDingBtn: true,
            isNnszBtn: false,
            isTbnnBtn: false,
        });
    }

    clickNnsz() {
        //console.info('nnsz');
        this.setState({
            isLunBtn: false,
            isDingBtn: false,
            isNnszBtn: true,
            isTbnnBtn: false,
        });
    }

    clickTbnn() {
        //console.info('tbnn');
        this.setState({
            isLunBtn: false,
            isDingBtn: false,
            isNnszBtn: false,
            isTbnnBtn: true,
        });
    }

    render(){
        var lunBtn = <img alt="" src="/images/create/type/lun1.png" />;
        if (this.state.isLunBtn)
            lunBtn = <img alt="" src="/images/create/type/lun2.png" />;
        var dingBtn = <img alt="" src="/images/create/type/ding1.png" />;
        if (this.state.isDingBtn)
            dingBtn = <img alt="" src="/images/create/type/ding2.png" />;
        var nnszBtn = <img alt="" src="/images/create/type/nnsz1.png" />;
        if (this.state.isNnszBtn)
            nnszBtn = <img alt="" src="/images/create/type/nnsz2.png" />;
        var tbnnBtn = <img alt="" src="/images/create/type/tbnn1.png" />;
        if (this.state.isTbnnBtn)
            tbnnBtn = <img alt="" src="/images/create/type/tbnn2.png" />;
        return  <div className="GameType">
                    <div className="GameTypeItem" onClick={this.clickLun}>{lunBtn}</div>
                    <div className="GameTypeItem" onClick={this.clickDing}>{dingBtn}</div>
                    <div className="GameTypeItem" onClick={this.clickNnsz}>{nnszBtn}</div>
                    <div className="GameTypeItem" onClick={this.clickTbnn}>{tbnnBtn}</div>
                </div>;
    }
}

export default Create;
