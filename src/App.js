import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

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

    render() {
        if (this.state.view === 'game') {
          return (
              <div id="App" className="App">
                  <Game></Game>
              </div>
          );
        } else if (this.state.view === 'main') {
            return (
                <Router>
                <div id="App" className="App">
                    <div className="Main">
                        <Topbar></Topbar>
                        <div className="Playbar">
                            <div className="Flex Playbar-Container">
                                <div className="Flex-item PlayItem Table-Cell">&nbsp;</div>
                                <div className="Flex-item PlayItem Table-Cell">&nbsp;</div>
                                <div className="Flex-item PlayItem Table">
                                    <span className="Table-Cell">
                                    <Link to="create"><img alt="创建房间" src="/images/main/play/create.png" className="Create-Button"/></Link>
                                    </span>
                                </div>
                                <div className="Flex-item PlayItem Table">
                                    <span className="Table-Cell">
                                        <Link to="join"><img alt="加入房间" src="/images/main/play/join.png" className="Join-Button"/></Link>
                                    </span>
                                </div>
                                <div className="Flex-item PlayItem Table">
                                    <span className="Table-Cell">
                                    <Link to="apply"><img alt="申请代理" src="/images/main/play/agent.png" className="Agent-Button" /></Link>
                                    </span>
                                </div>
                                <div className="Flex-item PlayItem Table-Cell">&nbsp;</div>
                            </div>
                        </div>
                        <Bottombar></Bottombar>
                    </div>
                    <Route path="/create" component={Create}/>
                    <Route path="/join" component={Join}/>
                    <Route path="/apply" component={Apply}/>
                    <Route path="/game" component={Game}/>
                </div>
                </Router>
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
