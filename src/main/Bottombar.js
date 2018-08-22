import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './Bottombar.css';
import RulesDetail from './RulesDetail.js';
import AgentDetail from './AgentDetail.js';
import SetDetail from './SetDetail.js';
import MallDetail from './MallDetail.js';
import HistoryDetail from './HistoryDetail.js';

class Bottombar extends Component {

    render() {
        return (
            <Router>
            <div className="Bottombar">
                <div className="Item"></div>
                <div className="Item">
                    <Link to="/mall">
                    <img alt="" src="/images/main/bottom/mall.png" className="ImageButton"/>
                    </Link>
                </div>
                <div className="Item">
                    <Link to="/agent">
                    <img alt="" src="/images/main/bottom/adv.png" className="ImageButton"/>
                    </Link>
                </div>
                <div className="Item">
                    <Link to="/history">
                    <img alt="" src="/images/main/bottom/history.png" className="ImageButton"/>
                    </Link>
                </div>
                <div className="Item">
                    <Link to="/rules">
                    <img alt="" src="/images/main/bottom/rules.png" className="ImageButton"/>
                    </Link>
                </div>
                <div className="Item">
                    <Link to="/set">
                    <img alt="" src="/images/main/bottom/set.png" className="ImageButton"/>
                    </Link>
                </div>
                <div className="Item"></div>
                <Route path="/mall" component={MallDetail}/>
                <Route path="/history" component={HistoryDetail}/>
                <Route path="/agent" component={AgentDetail}/>
                <Route path="/rules" component={RulesDetail}/>
                <Route path="/set" component={SetDetail}/>
            </div>
            
            </Router>
        );
    }
}

export default Bottombar;
