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
            members: [
                {did:'ecd63299',name:'专业抢票',openid:'okc730pc8c5AruzT4b-aGIk6oje0'},
                {did:'65e8b8b3',name:'橘子',openid:'okc730si0VoziK5Pc98TPN3bnlNQ'},
                {did:'TWGDU16B11000023',name:'江^桀',openid:'okc730v0w7OgxW0pPowlSk14PDls'},
                {did:'9088466d',name:'神九',openid:'okc730jFH-TPdy2poAK6Pey_qiD4'},
                {did:'L7YLTGPR99999999',name:'隔壁老王',openid:'okc730sidtQXYiz22Y5IZnhcgGCY'},
                {did:'KVXBB17911502243',name:'肖威',openid:'okc730l5N7NjHTB3WLDC3SrsPJJ8'},
                {did:'ecd63299',name:'July.n',openid:'okc730lCoZEZhxPprfoYxNaOk0tM'},
            ]
        };
        if (mid) {
            this.props.app.setState({
                view: 'main',
                mid: mid,
                nickname: nickname,
            });
        }
        this.doLogin = this.doLogin.bind(this);
    }

    doLogin(idx){
        //console.info('login1');
        //var did = "TWGDU16B11000023";
        //var openid = "okc730v0w7OgxW0pPowlSk14PDls";
        console.info(idx);
        var member = this.state.members[idx];
        console.info(member);
        var self = this;
        this.api.login(member.did, member.openid, function(data){
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

        const listItems = this.state.members.map((member, index) =>
            <p key={index}>
                <button onClick={() => this.doLogin(index)}>{member.name}</button>
            </p> 
        );
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {listItems}
            </div>
        );
    }
}

export default Login;
