import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Router, Route, Link} from "react-router-dom";
import './Test.css';

class TestApp extends Component{

    render() {
        return (
            <div className="TestApp">
                <div>TestApp</div>
                <div><Link to='/account'>TestAccounts</Link></div>
                <div><Link to='/statements'>TestStatements</Link></div>
            </div>
        );
    }
}

class TestHome extends Component{

    render() {
        return (
            <div>TestHome</div>
        );
    }
}

class TestAccounts extends Component{

    render() {
        return (
            <div className="TestAccounts">TestAccounts</div>
        );
    }
}

class TestStatements extends Component{

    render() {
        return (
            <div className="TestStatements">TestStatements</div>
        );
    }
}

class Test extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <TestApp>
                    <Route path='/account' component={TestAccounts}/>
                    <Route path='/statements' component={TestStatements}/>
                    <Route path='/' component={TestHome}/>
                </TestApp>
            </BrowserRouter>
        );
    }
}



export default Test;
