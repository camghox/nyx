import React, { Component } from 'react';
import './Playbar.css';

class Playbar extends Component {

    render() {
        return (
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
        );
    }
}

export default Playbar;
