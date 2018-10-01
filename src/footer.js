import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <footer>
                <div className="footer-header">
                    <h2>Questions about the App?</h2>
                </div>
                <div className="contact">
                    <h3>If you have any questions regarding this project, feel free to contact Jesse Shaw at any of the points of contact below:</h3>
                    <div className="contact-tel">
                        410.703.6125
                    </div>
                    <div className="contact-email">
                        JesseShawCodes@gmail.com
                    </div>
                    <div className="contact-github">
                        GitHub
                    </div>
                </div>
            </footer>
        );
    }
}

export default Banner;