import React, { Component } from 'react';

export class HomePage extends Component {
    render(){
        return(
            <div class="container">  
            <div class="leftpane">
            <a href="/" className="home-link">Home Page</a>
            </div>
            <div class="middlepane">
                <h1>HomePage</h1>
            </div>
            <div class="rightpane"><h1>Test Page</h1></div>
        </div>   
        )
    }
}