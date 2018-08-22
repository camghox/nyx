import React, { Component } from 'react';
import './HistoryDetail.css';

class HistoryDetail extends Component {

    constructor(props){
        super(props);
    
        this.close = this.close.bind(this);
    }

    close(){
        window.history.go(-1);
    }

    render() {
        return (
            <div className="HistoryDetail">
                <div className="HistoryContent">
                </div>
                <div className="CloseButton" onClick={this.close}>
                    <img alt="" src="/images/close.png" />
                </div>
            </div>
        );
    }
}

export default HistoryDetail;
