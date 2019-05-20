import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
        <section id="contact">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading">Questions about the App?</h2>
                            <hr className="primary" />
                            <p className="contactp">If you have any questions regarding this project, feel free to contact Jesse Shaw at any of the points of contact below:</p>
                        </div>
                    </div>
                <div className="contactpoints">
                    <div className="col-lg-4 ml-auto text-center">
                        <i className="fa fa-phone fa-3x sr-contact"></i>
                        <p><a href="tel:410-703-6125">410-703-6125</a></p>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                            <p>
                                <a href="mailto:your-email@your-domain.com">jdshaw1987@gmail.com</a>
                            </p>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fa fa-github fa-3x sr-contact"></i>
                            <p>
                                <a href="https://github.com/thejesseshaw">GitHub</a>
                            </p>
                    </div>  
                    <div className="col-lg-4 mr-auto text-center">
                        <a href="index.html">
                            <img src="images/logo.png" alt="logo"/>
                        </a>
                    </div>
                </div>
                </div>
            </footer>
        </section>
        );
    }
}

export default Banner;