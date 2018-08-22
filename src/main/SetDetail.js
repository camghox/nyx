import React, { Component } from 'react';
import './SetDetail.css';

class SetDetail extends Component {

    constructor(props){
        super(props);
    
        this.close = this.close.bind(this);
    }

    close(){
        window.history.go(-1);
    }

    render() {
        return (
            <div className="SetDetail">
                <div className="SetContent">
                    <div className="SetGroup">
                        <div className="SetItem1">音效&nbsp;<input type="checkbox" /></div>
                        <div className="SetItem2">音乐&nbsp;<input type="checkbox" /></div>
                    </div>
                </div>
                <div className="CloseButton" onClick={this.close}>
                    <img alt="" src="/images/close.png" />
                </div>
            </div>
        );
    }
}

export default SetDetail;
