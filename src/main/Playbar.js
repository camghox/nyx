import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Playbar.css';

class Playbar extends Component {

    render() {
        return (
            <div className="Playbar">
                <div className="Flex Playbar-Container">
                    <div className="Flex-item"></div>
                    <div className="Flex-item">
                        <img src="/images/main/play/create.png" className="Create-Button" />
                    </div>
                    <div className="Flex-item">
                        <img src="/images/main/play/join.png" className="Join-Button" />
                    </div>
                    <div className="Flex-item">
                        <img src="/images/main/play/agent.png" className="Agent-Button" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Playbar;
