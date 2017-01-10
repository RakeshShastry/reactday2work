import React from 'react';
import {Link, browserHistory} from 'react-router';

export default () =>{
    return (
    <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="/">React App</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav " />
                <ul className="nav navbar-nav " >
                    <li className="active"><Link to="/">Home</Link></li>
                    <li className="active"><Link to="/about">About</Link></li>
                    <li className="active"><Link to="/boxes/box">Box Example</Link></li>
                    <li className="active"><Link to="/random">Random</Link></li>
                    <li className="active"><Link to="/conversion">Conversion</Link></li>
                    <li className="active"><Link to="/movies/movies">Movies</Link></li>
                    <li className="active"><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    );
};