import React, { Component } from 'react';
import './RulesDetail.css';

class RulesDetail extends Component {

    constructor(props){
        super(props);
    
        this.close = this.close.bind(this);
    }

    close(){
        window.history.go(-1);
    }

    render() {
        return (
            <div className="RulesDetail">
                <div className="RulesContent">
                </div>
                <div className="CloseButton" onClick={this.close}>
                    <img alt="" src="/images/close.png" />
                </div>
            </div>
        );
    }
}

export default RulesDetail;
