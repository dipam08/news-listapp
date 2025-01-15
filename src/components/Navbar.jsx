import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/general">Home</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/technology">Technoloy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/sports">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/business">Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/health">Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/entertainment">Entertainment</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
