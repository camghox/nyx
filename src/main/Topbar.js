import React, { Component } from 'react';
import './Topbar.css';
import Api from '../Api.js';

class Topbar extends Component {

    render() {
        var api = new Api();
        var profile = api.profile();
        return (
            <div className="Topbar Flex">
                <div className="HeadImg">
                    <img alt="" src={profile.avatar} />
                </div>
                <div className="Flex-item">
                    <div className="Nickname">{profile.nickname}</div>
                </div>
                <div className="Flex-item">
                    <div className="MID">ID:{profile.mid}</div>
                </div>
                <div className="Flex-item">
                    <div className="Ingot">{profile.ingot}</div>
                </div>
                <div className="TopBtnBar">
                    <div className="TopBtnItem">
                        <img alt="" src="/images/main/top/msg.png" className="TopBtn"/>
                    </div>
                    <div className="TopBtnItem">
                        <img alt="" src="/images/main/top/share.png" className="TopBtn"/>
                    </div>
                    <div className="TopBtnItem">
                        <img alt="" src="/images/main/top/back.png" className="TopBtn"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;
