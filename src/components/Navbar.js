import React from 'react'
import { Link } from "react-router-dom";
import { GiScooter } from 'react-icons/gi';
import { RiReservedFill } from 'react-icons/ri';
import { GiHomeGarage } from 'react-icons/gi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';


function Navbar(props) {
    return (
        <div>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline text-center">
                                    <img className='logoScooter ' src='scooter2.png' />
                                    <br />
                                    <span className="logotxt">Scooter rental</span>
                                </span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                                <li>

                                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <span className="d-none d-sm-inline nav-link px-0">
                                                <Link to="/scooters">SCOOTERS</Link>
                                                </span>
                                                <Link to="/scooters">
                                                <span className="d-sm-none">
                                                    <GiScooter className='navSideIcon sm-none' />
                                                </span>
                                                </Link>
                                        </li>
                                        <li>
                                            <span className="d-none d-sm-inline"><Link to="/reserve">RESERVE</Link></span>
                                                <Link to="/reserve">
                                                <span className="d-sm-none">
                                                    <RiReservedFill className='navSideIcon sm-none' />
                                                </span>
                                                </Link>
                                        </li>
                                        <li>
                                            <span className="d-none d-sm-inline nav-link px-0"><Link to="/reservations">MY RESERVATIONS</Link></span>
                                                <Link to="/reservations">
                                                <span className="d-sm-none">
                                                    <GiHomeGarage className='navSideIcon sm-none' />
                                                </span>
                                                </Link>
                                        </li>
                                        <li>
                                            <span className="d-none d-sm-inline nav-link px-0"><Link to="/shopping">ADD RESERVATIONS</Link></span>
                                                <Link to="/shopping">
                                                <span className="d-sm-none">
                                                    <IoMdAddCircleOutline className='navSideIcon sm-none' />
                                                </span>
                                                </Link>
                                        </li>
                                        <li>
                                            <Link to="/scooters" className="nav-link px-0"> <span className="d-none d-sm-inline">DELETE MOTERCYCLE</span></Link>
                                                <Link to="/scooters">
                                                <span className="d-sm-none">
                                                    <MdDelete className='navSideIcon sm-none' />
                                                </span>
                                                </Link>
                                        </li>
                                    </ul>
                                </li>




                            </ul>
                            <hr />
                            <div className="dropdown pb-4">
                                    <Link to="/form" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="d-none d-sm-inline mx-1">user</span>
                                    </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col py-3">
                        <span className='d-sm-none'>
                            <nav className="navbar navbar-dark bg-dark insidenav">

                                <span className="navbar-brand mb-0 h1">Scooter rental</span>
                            </nav>
                            
                            <br />
                        </span>




                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar