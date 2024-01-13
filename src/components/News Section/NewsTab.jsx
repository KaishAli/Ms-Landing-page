import new4 from '../../components/Assests/NewsImg/new4.jpg';
import new1 from '../../components/Assests/NewsImg/new1.jpg';
import new2 from '../../components/Assests/NewsImg/new2.jpg';
import new3 from '../../components/Assests/NewsImg/new3.jpg';

import { useEffect, useState } from "react";
import '../../components/News Section/NewsTab.css'

import arrowUp from '../../components/Assests/NewsImg/arrowUp.svg';

function NewsTab() {
    const [currentImageIndices, setCurrentImageIndices] = useState([0, 1]);
    const [isLoading, setIsLoading] = useState(true);
    const mastersData = [
        { image: new2 },
        { image: new4 },
        { image: new3 },
        { image: new1 },
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            // Generate two random indices different from the current ones
            let randomIndices;
            do {
                randomIndices = [
                    Math.floor(Math.random() * mastersData.length),
                    Math.floor(Math.random() * mastersData.length),
                ];
            } while (
                randomIndices[0] === currentImageIndices[0] ||
                randomIndices[1] === currentImageIndices[1]
            );

            setCurrentImageIndices(randomIndices);
            setIsLoading(false);
        }, 500); // Update every 500 milliseconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [currentImageIndices, mastersData.length]);
    const applyData = [
        { image: new2 },
        { image: new4 },
        { image: new3 },
        { image: new1 },
    ];
    return <>
        <div className='main-box'>
            <section id="master" className='mt-5 d-flex justify-content-between'>
                <div className="about-section mt-0 wrapper">
                    <span className="exp-engage" style={{ color: 'white' }}>In the News</span><br />
                    <span className="close-look" > Meet Your Masters</span><br />
                </div>
                <div className='me-5 p-4'>
                    <div className='arrow-direction'>
                        <i className="fa-solid fa-arrow-left text-light"></i>
                    </div>
                    <div className='arrow-direction'>
                        <i className="fa-solid fa-arrow-right text-light"></i>
                    </div>
                </div>
            </section>
            {/* Card Sections With Dyamic Mapping */}
            <div className='container mt-5'>
                {isLoading ? (
                    <div className='text-center row justify-content-center'>Loading...</div>
                ) : (
                    <div className='d-flex justify-content-center overflow-hidden gap-3'>
                        {mastersData.map((master, index) => (
                            <div key={index} className='col-md-2 mb-4 col-lg-6 col-sm-6'>
                                <div className='card' style={{ border: 'none' }}>
                                    <img
                                        src={master.image}
                                        className={`card-img-top fade-in ${currentImageIndices.includes(index) ? 'visible' : 'hidden'
                                            }`}
                                        alt='...'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='join-community container rounded-5 d-flex justify-content-evenly gap-5'>
                <div className='mt-5 ps-4 col-8 '>
                    <span className='join-com'>GET A PEAK INTO THE
                        <br /> MASTERCAMP LIFE</span>
                </div>
                <div className='mt-5 pt-4 col-4'>
                    <button className='btn btn-light '> Join Our Community<img src={arrowUp} /></button>
                </div>
            </div>
        </div>
        {/* Program Applications */}
        <section id="master" className='mt-5 d-flex justify-content-between'>
            <div className="about-section mt-0 wrapper">
                <span className="exp-engage" style={{ color: 'white' }}>Experience MasterCamps</span>
            </div>
        </section>

        {/* <marquee width="60%" direction="left" style={{display:"inline"}}> */}
            <div className='container-fluid mt-5 d-flex wrapper '>
                {
                    applyData.map((item, index) => (
                        <div key={index} className="card mb-3 me-2" style={{ maxWidth: "500px", height: "13rem" }}>
                            <div className="row g-0 ">
                                <div className="col-md-4">
                                    <img src={item.image} alt="" style={{ height: "9rem" }} className="img-thumbnail img-res zoom-effect" width="150" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body" style={{ background: "white" }}>
                                        <span className="education-title" style={{ background: "black", color: "white" ,borderRadius: "0.5rem" }}>Apply By:Jan 16,2024</span><br />
                                        <span style={{ fontSize: "1.5rem" }}>Master's Union CEO Challenge</span><br />
                                        <span style={{ color: "#8e8e8e" }} >Registration Open ,No Eligibility Criteria</span>
                                    </div>
                                    <button className='register-btn'>Register Now {">"}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >
        {/* </marquee> */}
    </>
}
export default NewsTab;