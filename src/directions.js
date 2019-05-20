import React, { Component } from 'react';

class Directions extends Component {
    render() {
        return (
            <div className="bg-primary" id="about">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-heading text-white">How to use the application</h2>
                        <hr className="light" />
                        <p className="text-faded">This App is a music search engine where you type in the name of an artist, and in return, the user will see: </p>
                        <ol className="text-faded">
                            <li>The three most popular albums from that artist (according to <a href="https://www.last.fm/">last.fm</a>);</li>
                            <li>Youtube links to listen to that album; and</li>
                            <li>A short artist biography.</li>
                        </ol>
                        <a className="btn btn-default btn-xl js-scroll-trigger" href="app.html">Click Here to try out the app!</a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Directions;