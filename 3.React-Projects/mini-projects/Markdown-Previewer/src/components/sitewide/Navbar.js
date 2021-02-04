import React, { Component } from 'react'
import './Navbar.css'; 

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-0">
            <button className="navbar-toggler border-0" type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
                <h1 className="logo">DJ</h1>
            </a>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0 col-8 d-none d-lg-block">
                    <i className="fa fa-search search-icon" aria-hidden="true"></i>
                    <input className="form-control mr-sm-2 col-6 search-box"
                        type="text" placeholder="Search" />
                </form>

                <ul className="navbar-nav mx-auto col-auto d-flex align-items-center">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><i className="fa fa-home
                                nav-icons" aria-hidden="true"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-compass
                                nav-icons" aria-hidden="true"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-envelope
                                nav-icons" aria-hidden="true"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-commenting
                                nav-icons" aria-hidden="true"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-bolt
                                nav-icons" aria-hidden="true"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-user
                                nav-icons" aria-hidden="true"></i></a>
                    </li>
                    <li className="nav-item" data-toggle="modal" data-target="#myModal">
                        <a className="nav-link" href="#"><i className="fa fa-pencil
                                nav-icons" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </nav>

    )
  }
}
