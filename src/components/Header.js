import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-light bg-light">
                    <a href="#" className="navbar-brand">
                        <img src="images/TFL-Logo.png" height="50" alt="CoolBrand">
                        </img>
                    </a>

                    <nav id="mainMenu">
                        <ul>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">TFL Home</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bikepoint">Search Bike Point</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/airquality">Check the Air Quality</Link>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
} 