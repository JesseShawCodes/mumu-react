import React, { Component } from 'react';
import './banner.css'

class Banner extends Component {
    render() {
        return (
            <div className="banner">
            <header class="masthead">
                <div class="header-content">
                    <div class="header-content-inner">
                        <img src="https://jesseshawcodes.github.io/mumu/images/logo.png" alt="Mumu Logo" />
                        <div id="headingbackground">
                            <h1 id="homeheading">Mumu - The music Search Engine</h1>
                            <hr></hr>
                        </div>
                        
                    </div>
                    
                </div>
            </header>
            </div>
        );
    }
}

export default Banner;