import React, { Component } from 'react';

import './App.css';
import './main/Playbar.css';
import Login from './login/Login';
import Game from './room/Game';
import Create from './room/Create';
import Join from './room/Join';
import Apply from './agent/Apply';
import Topbar from './main/Topbar';
import Bottombar from './main/Bottombar';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = { view: 'login', mid: 0, nickname: '' };
        this.initApp();
    }

    initApp () {
        //
    }
    
    create () {
        this.setState({
            view: 'create'
        });
        console.info('create');
    } 
    doCreate () {
        this.setState({
            view: 'game'
        });
        console.info('doCreate');
    }
    join () {
        this.setState({
            view: 'join'
        });
        console.info('join');
    }

    applyAgent (){
        this.setState({
            view: 'agent'
        });
        console.info('agent');
    }

    close (){
        this.setState({
            view: 'main'
        });
        console.info('main');
    }

    render() {
        if (this.state.view === 'create') {
            return (
                <div id="App" className="App">
                    <div className="CloseBtn">
                        <button onClick={this.close.bind(this)}>Close</button>
                    </div>
                    <Create app={this}></Create>
                </div>
            );
        } else if (this.state.view === 'game') {
          return (
              <div id="App" className="App">
                  <Game></Game>
              </div>
          );
        } else if (this.state.view === 'join') {
            return (
                <div id="App" className="App">
                    <div className="CloseBtn">
                        <button onClick={this.close.bind(this)}>Close</button>
                    </div>
                    <Join app={this}></Join>
                </div>
            );
        } else if (this.state.view === 'agent') {
            return (
                <div id="App" className="App">
                    <div className="CloseBtn">
                        <button onClick={this.close.bind(this)}>Close</button>
                    </div>
                    <Apply></Apply>
                </div>
            );
        } else if (this.state.view === 'main') {
            return (
                <div id="App" className="App">
                    <div className="Main">
                        <Topbar></Topbar>
                        <div className="Playbar">
                            <div className="Flex Playbar-Container">
                                <div className="Flex-item PlayItem Table-Cell">&nbsp;</div>
                                <div className="Flex-item PlayItem Table-Cell">&nbsp;</div>
                                <div className="Flex-item PlayItem Table">
                                    <span className="Table-Cell">
                                        <img alt="创建房间" src="/images/main/play/create.png" className="Create-Button" onClick={this.create.bind(this)} />
                                    </span>
                                </div>
                                <div className="Flex-item PlayItem Table">
                                    <span className="Table-Cell">
                                        <img alt="加入房间" src="/images/main/play/join.png" className="Join-Button" onClick={this.join.bind(this)} />
                                    </span>
                                </div>
                                <div className="Flex-item PlayItem Table">
                                    <span className="Table-Cell">
                                        <img alt="申请代理" src="/images/main/play/agent.png" className="Agent-Button" onClick={this.applyAgent.bind(this)} />
                                    </span>
                                </div>
                                <div className="Flex-item PlayItem Table-Cell">&nbsp;</div>
                            </div>
                        </div>
                        <Bottombar></Bottombar>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="App" className="App">
                  <Login app={this}></Login>
                </div>
            );
        }
    }
}

export default App;
