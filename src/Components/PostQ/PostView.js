import React, { Component } from 'react';

export class PostQ extends Component {
    render(){
        return(
            <div class="container">  
            <div class="leftpane">
            <a href="/" className="home-link">Home Page</a>
            </div>
            <div class="middlepane">
                <div className='post-div'>
                    <input type="text" className='post-box' placeholder='Post your Question!'/>
                    <button className="post-btn">Post</button>
                </div>
            </div>
            <div class="rightpane"><h1>Test Page</h1></div>
        </div> 
        )
    }
}