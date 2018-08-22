import React, { Component } from 'react';
import './AgentDetail.css';

class AgentDetail extends Component {

    constructor(props){
        super(props);
    
        this.close = this.close.bind(this);
    }

    close(){
        window.history.go(-1);
    }

    render() {
        return (
            <div className="AgentDetail">
                <div className="AgentContent">
                    <div className="AgentTitle"></div>
                    <div className="Content">
                    <div className="Content1">
                        <p className="ContentTitle">代理介绍</p>
                        <p>采用全新的一键分享分销代理机制,完全不同于传统“卖房卡,赚差价”的代理模式。只需要您一键推送给好友,或者分享朋友圈,只要有人点击并下载,成功登陆就算推广成功,终生绑定,无需你陪玩或者代开房。</p>
                        <p>默认为普通玩家,申请后可成为白银代理,当您的总收益达到5000元时升级为黄金代理,当达到20000元时升级为钻石代理,不同等级分成收益不同。</p>
                    </div>
                    <div className="Content2">
                        <p className="ContentTitle">分成说明</p>
                        <p>白银代理获得下面无限级别所有非代理的30%的分成;</p>
                        <p>黄金代理获得下面无限级别所有非代理的40%的分成,获得下级代理的10%的分成;</p>
                        <p>钻石代理获得下面无限级别所有非代理的50%的分成,获得下级代理的10%的分成;</p>
                        <p>当你成为代理后,如果有推荐的玩家升级为代理,你将获得10%的培养奖。</p>
                        <p>您所推广的玩家在平台上的任意一笔消费,都与你的分成挂钩,终生绑定。</p>
                        <p>轻松分享,高额分成。</p>
                        <p>&nbsp;</p>
                        <p className="ApplyAction"><button className="ApplyButton">申请代理</button></p>
                        <p>&nbsp;</p>
                    </div>
                    </div>
                </div>
                <div className="CloseButton" onClick={this.close}>
                    <img alt="" src="/images/close.png" />
                </div>
            </div>
        );
    }
}

export default AgentDetail;
