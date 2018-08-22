import React, { Component } from 'react';
import logo from '../logo.svg';
import './Login.css';
import Api from '../Api.js';

class Login extends Component {
    
    constructor(props){
        super(props);

        this.api = new Api();   
        var mid = this.api.mid();
        var nickname = this.api.nickname();     
        this.state = {
            rid: 0,
            mid: mid,
            nickname: nickname,
        };
        if (mid) {
            this.props.app.setState({
                view: 'main',
                mid: mid,
                nickname: nickname,
            });
        }
        this.doLogin1 = this.doLogin1.bind(this);
        this.doLogin2 = this.doLogin2.bind(this);
    }

    doLogin1(){
        console.info('login1');
        var did = "TWGDU16B11000023";
        var openid = "okc730v0w7OgxW0pPowlSk14PDls";
        var self = this;
        this.api.login(did, openid, function(data){
            if (data && data.member) {
                self.props.app.setState({
                    view:'main',
                    mid:data.member.mid,
                    nickname:data.member.nickname,
                });
            }
        });
    }

    doLogin2(){
        console.info('login2');
        var did = "80SQBDPN223CG";
        var openid = "okc730sK1teK7F-9U5X6qc40pPoY";
        var self = this;
        this.api.login(did, openid, function(data){
            if (data && data.member) {
                self.props.app.setState({
                    view:'main',
                    mid:data.member.mid,
                    nickname:data.member.nickname,
                });
            }
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    <button onClick={this.doLogin1.bind(this)}>JYJ LOGIN</button>
                </p>    
                <p>
                    <button onClick={this.doLogin2.bind(this)}>LQJ LOGIN</button>
                </p>
            </div>
        );
    }
}

export default Login;
