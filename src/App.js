import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import logo from './logo.svg';
import Create from './room/Create';
import Join from './room/Join';
import Apply from './agent/Apply';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.initApp();
    }

    initApp () {
        this.state = { view : 'main' };
        
        axios.post('http://nyx.xifenhezi.com/nyxgame/member/login', {
          did:'TWGDU16B11000023',
          openid:'okc730v0w7OgxW0pPowlSk14PDls',
        })
        .then(res => {
            console.info(res);
        });
    }
    create () {
        this.setState({
            view: 'create'
        });
        console.info('create');
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
                    <div>
                        <button onClick={this.close.bind(this)}>Close</button>
                    </div>
                    <Create></Create>
                </div>
            );
        } else if (this.state.view === 'join') {
            return (
                <div id="App" className="App">
                    <div>
                        <button onClick={this.close.bind(this)}>Close</button>
                    </div>
                    <Join></Join>
                </div>
            );
        } else if (this.state.view === 'agent') {
            return (
                <div id="App" className="App">
                    <div>
                        <button onClick={this.close.bind(this)}>Close</button>
                    </div>
                    <Apply></Apply>
                </div>
            );
        } else {
            return (
                <div id="App" className="App">
                    <div className="Main">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to React</h1>
                        </header>
                        <p className="App-intro">
                            To get started, edit <code>src/App.js</code> and save to reload.
                        </p>
                        <p>
                            <button onClick={this.create.bind(this)}>Create</button>
                            <button onClick={this.join.bind(this)}>Join</button>
                            <button onClick={this.applyAgent.bind(this)}>Apply Agent</button>
                        </p>
                        <div id="App-create-menu"></div>
                    </div>
                </div>
            );
        }
    }
}

export default App;
