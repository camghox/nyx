import React, { Component } from 'react';
import './RoomInfo.css';
import Api from '../../Api.js';

class RoomInfo extends Component {

    constructor(props){
        super(props);
        this.api = new Api();
    }

    render () {
        var roomInfo = this.api.roominfo();
        console.info(roomInfo);
        return (
            <div className="RoomInfo">
                <span className="InfoItem">ID: {roomInfo.roomnum}</span>
                <span className="InfoItem">PT: {roomInfo.playtypestr}</span>
                <span className="InfoItem">BA: {roomInfo.base}</span>
                <span className="InfoItem">RO: {roomInfo.rridx}/{roomInfo.round}</span>
            </div>
        );
    }
}

export default RoomInfo;

