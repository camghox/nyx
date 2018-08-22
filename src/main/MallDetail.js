import React, { Component } from 'react';
import './MallDetail.css';

class MallDetail extends Component {

    constructor(props){
        super(props);
    
        this.close = this.close.bind(this);
    }

    close(){
        window.history.go(-1);
    }

    render() {
        return (
            <div className="MallDetail">
                <div className="MallContent">
                    <div className="MallInfoGroup">
                        <div className="InfoItem1">购买草莓（房卡）</div>
                        <div className="InfoItem2">关注公众号：XXX</div>
                        <div className="InfoItem3">客服微信：XXX</div>
                    </div>
                </div>
                <div className="CloseButton" onClick={this.close}>
                    <img alt="" src="/images/close.png" />
                </div>
            </div>
        );
    }
}

export default MallDetail;
