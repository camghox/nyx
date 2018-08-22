import React, { Component } from 'react';
import './Join.css';
import Api from '../Api.js';

class Join extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            rid:8757,
        };
        this.api = new Api();

        this.doJoin = this.doJoin.bind(this);
        this.doOpenGame = this.doOpenGame.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    doJoin(){
        var self = this;
        this.api.join(this.state.rid, function(data){
            if (data && data.room) {
                self.doOpenGame(data.room);
            }
        });
    }

    doOpenGame(data) {
        console.info("do open game");
        this.props.app.setState({view:'game'});
    }

    handleChange(event) {
        this.setState({rid: event.target.value});
    }

    render() {
        var rid = this.state.rid;
        return (
            <div className="JoinDialog">
                <div className="JoinGame">
                    <input type="text" value={rid} onChange={this.handleChange} />
                    <button onClick={this.doJoin.bind(this)}>Join</button>
                </div>
            </div>
        );
    }
}

export default Join;
