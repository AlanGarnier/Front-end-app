import * as React from 'react';



export default function navbar() {
        return(
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="container-fluid justify-content-center">
                    <div className="logo">
                        <a className="navbar-brand" href="#">
                            <img src="http://localhost:3000/images/LUNCH.png" alt="Logo" width="70px" height="70px" className="d-inline-block align-text-top"/>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse header-link text-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/menu">La carte</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">S'inscrire</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/connexion">Se connecter</a>
                            </li>{/*
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Mon compte
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/adminDashboard">Employé</a></li>
                                    <li><a className="dropdown-item" href="/dashboard">Cantinière</a></li>
                                </ul>
                            </li>*/}
                        </ul>
                    </div>
                </div>
            </nav>

        )

}