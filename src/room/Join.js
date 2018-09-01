import React, { Component } from 'react';
import './Join.css';
import Api from '../Api.js';

class Join extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            num1: null,
            num2: null,
            num3: null,
            num4: null,
        };
        this.api = new Api();
        this.close = this.close.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.reset = this.reset.bind(this);
    }

    close(){
        window.history.go(-1);
    }
    delete(){
        if (this.state.num4) {
            this.setState({
                num4: null,
            });
        } else if (this.state.num3) {
            this.setState({
                num3: null,
            });
        } else if (this.state.num2) {
            this.setState({
                num2: null,
            });
        } else if (this.state.num1) {
            this.setState({
                num1: null,
            });
        }
    }
    reset(){
        this.setState({
            num1: null,
            num2: null,
            num3: null,
            num4: null,
        });
    }
    add(num) {
        if (this.state.num1 === null) {
            this.setState({
                num1: num,
            });
            return;
        } else if (this.state.num2 === null) {
            this.setState({
                num2: num,
            });
            return;
        } else if (this.state.num3 === null) {
            this.setState({
                num3: num,
            });
            return;
        } else if (this.state.num4 === null) {
            this.setState({
                num4: num,
            });
        }
        var rid = this.state.num1 + '' + this.state.num2 + '' + this.state.num3 + '' + num;
        this.api.join(rid, function(data){
            if (data && data.ret === 1) {
                alert(data['msg']);
            } else {
                window.location = '/game';
            }
        })
    }

    render() {
        return (
            <div className="JoinDialog">
                <div className="JoinGameTop"></div>
                <div className="JoinGameMiddle">
                    <div className="JoinGameLeft">
                    </div>
                    <div className="JoinGameCenter">
                        <div className="JoinGameContent">
                            <div className="JoinGameTitle">
                            请输入房间号
                            </div>
                            <div className="JoinGameNum">
                                <span className="JoinGameNumInput">&nbsp;{this.state.num1}&nbsp;</span>
                                <span className="JoinGameNumInput">&nbsp;{this.state.num2}&nbsp;</span>
                                <span className="JoinGameNumInput">&nbsp;{this.state.num3}&nbsp;</span>
                                <span className="JoinGameNumInput">&nbsp;{this.state.num4}&nbsp;</span>
                            </div>
                            <div className="JoinGameGrid">
                                <div className="JoinGameGridRow">
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/1.png" onClick={() => this.add(1)} />
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/2.png" onClick={() => this.add(2)}/>
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/3.png" onClick={() => this.add(3)}/>
                                </div>
                                <div className="JoinGameGridRow">
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/4.png" onClick={() => this.add(4)}/>
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/5.png" onClick={() => this.add(5)}/>
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/6.png" onClick={() => this.add(6)}/>
                                </div>
                                <div className="JoinGameGridRow">
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/7.png" onClick={() => this.add(7)}/>
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/8.png" onClick={() => this.add(8)}/>
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/9.png" onClick={() => this.add(9)}/>
                                </div>
                                <div className="JoinGameGridRow">
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/reset.png" onClick={() => this.reset()}/>
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/0.png" onClick={() => this.add(0)}/>
                                    <img alt="" className="JoinGameNumBtn" src="images/join/digest/delete.png" onClick={() => this.delete()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="JoinGameRight">
                    </div>
                </div>
                <div className="JoinGameBottom"></div>
                <div className="CloseButton" onClick={this.close}>
                    <img alt="" src="/images/create/close.png" />
                </div>
            </div>
        );
    }
}

export default Join;
