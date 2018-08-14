import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Create.css';

class Create extends Component {

    render() {
        return (
            <div className="CreateDialog">
                <div className="CreateGame">
                    <button className="App-LunZhuang">
                    LunZhuang
                    </button>
                </div>
                <div className="CreateGame">
                    <button className="App-DingZhuang">
                    DingZhuang
                    </button>
                </div>
                <div className="CreateGame">
                    <button className="App-NiuNiuShangZhuang">
                    NiuNiuShangZhuang
                    </button>
                </div>
                <div className="CreateGame">
                    <button className="App-TongBiNiuNiu">
                    TongBiNiuNiu
                    </button>
                </div>
            </div>
        );
    }
}

export default Create;
