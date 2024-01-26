import '../Header/header.css';
import logo from '../Assests/logo.png';
function Header({email,handleLogout}) {
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
                            <i className="fas fa-stream" style={{color:"white"}}/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ms-auto mb-2">
                                <li className="">
                                    <a className=" " aria-current="page" href="/Apply">Masters</a>
                                </li>
                                <li className="">
                                    <a className="" href="/ExperienceEngage">Admissions</a>
                                </li>
                                <li className="">
                                    <a className="" href="/MeetMasters">Student Life</a>
                                </li>
                                <li className="">
                                    <a className="" href="/Community">Community</a>
                                </li>
                                <li className="">
                                    <a className="" href="/NewsTab">News Articale</a>
                                </li>
                            </ul>
                            <button onClick={handleLogout} className="header-button ms-auto mb-2 ">Log Out</button>
                        </div>
                    </div>
                </nav>
        </>
    )
}
export default Header;