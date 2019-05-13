import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
           
            <footer className="section footer-classic context-dark bg-image" style={{ background: '#2d3246' }}>
                <div className="container">
                    <div className="row row-30">
                        <div className="col-md-4 col-xl-5 mt-2">
                            <h5 className="text-uppercase">Transport of London</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        </div>
                        <div className="col-md-4 mt-2">
                            <h5>Contacts</h5>
                            <dl className="contact-list">
                                <dt>Address:</dt>
                                <dd>798 South Park Avenue, UK</dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>email:</dt>
                                <dd><a href="mailto:#">test@tfl.com</a></dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>phones:</dt>
                                <dd><a href="tel:#">+44 8000000000</a> <span>or</span> <a href="tel:#">+44 999999999</a>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-md-4 col-xl-3 mt-2">
                            <h5>Links</h5>
                            <ul className="nav-list">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contacts</a></li>                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters social-container">
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
                </div>
            </footer>
        )
    }
}