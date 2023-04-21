import React from 'react'
import { Link } from 'react-router-dom'
import ijazImg from '../static/images/ijaz.jpeg';

const Navbar = ({ mood, toggleMood }) => {

    return (
        <nav className={`navbar navbar-expand-lg bg-${mood === 'dark' ? 'dark' : 'light'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={ijazImg} style={{ height: '40px' }} className='rounded' alt="ijaz-group" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/list-group' className={`nav-link active ${mood === 'dark' && 'text-white'} `} aria-current="page">List Group</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${mood === 'dark' && 'text-white'} `} to="/products">E-commerce</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle ${mood === 'dark' && 'text-white'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/todo">Todo List</Link></li>
                                <li><Link className="dropdown-item" to='/custom-todo'>Custom Todo</Link></li>
                                <li><Link className="dropdown-item" to='/lifting-state-up'>Lifting State Up</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" style={mood === 'dark' ? { color: '#878181' } : { color: 'rgba(0, 0, 0, 0.3)' }} >Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="form-check form-switch ms-2">
                        <input className="form-check-input" onClick={toggleMood} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label
                            className={`form-check-label ${mood === 'dark' ? 'text-white' : 'text-black'}`}
                            htmlFor="flexSwitchCheckDefault"
                        >
                            {mood === 'light' ? 'Dark Mood' : 'Light Mood'}
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
