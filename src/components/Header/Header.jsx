import '../Header/header.css';
import logo from '../Assests/logo.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ email, handleLogout }) {
    // const [giveAccess, setGiveAccess] = useState(false)

    // const storedData = localStorage.getItem('formData');
    // const myDataObject = storedData ? JSON.parse(storedData) : null;

    // useEffect(() => {
    //     if (myDataObject.email === "") {
    //         setGiveAccess(true);

    //     } else {
    //         setGiveAccess(false);
    //     }
    // }, [])


    return (
        <>
            <nav className="navbar navbar-expand-lg navigation-wrap">
                <div className="container mt-0">
                    <a className="navbar-brand" href="_blank"><img src={logo} alt='xyz' width="200px" /></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-stream" style={{ color: "white" }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        {/* {
                            giveAccess ? <>
                                <ul className="navbar-nav ms-auto mb-2">
                                    <li className="">
                                        <a className=" " aria-current="page" href="/Admin">Admin</a>
                                    </li>
                                </ul>
                            </> : */}

                        <ul className="navbar-nav ms-auto mb-2">

                            <li className="">
                                <Link to='/' >Home</Link>
                                {/* <a aria-current="page" href='/'>Home</a> */}
                            </li>
                            <ul className="navbar-nav ms-auto mb-2">
                                <li className="">
                                    <Link to='/Admin' >Admin</Link>
                                    {/* <a className=" " aria-current="page" href="/Admin">Admin</a> */}
                                </li>
                            </ul>
                            <li className="">
                            <Link to='/Apply' >Masters</Link>
                                {/* <a className=" " aria-current="page" href="/Apply">Masters</a> */}
                            </li>
                            <li className="">
                            <Link to='/ExperienceEngage' >Admissions</Link>
                                {/* <a className="" href="/ExperienceEngage">Admissions</a> */}
                            </li>
                            <li className="">
                            <Link to='/MeetMasters' >Student Life</Link>
                                {/* <a className="" href="/MeetMasters">Student Life</a> */}
                            </li>
                            <li className="">
                            <Link to='/Community' >Community</Link>
                                {/* <a className="" href="/Community">Community</a> */}
                            </li>
                            <li className="">
                            <Link to='/NewsTab' >Register</Link>
                                {/* <a className="" href="/NewsTab">Register</a> */}
                            </li>
                        </ul>
                        {/* } */}
                        <button onClick={handleLogout} className="header-button ms-auto mb-2 ">Log Out</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;