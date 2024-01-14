import "../Apply/Apply.css";
function Apply() {
    return (
        <>
            <div className="hr-main container-fluid" style={{ background: "#f6f6f6" }}>
                <div className="ms-md-5 mt-4">
                    <h1 className="text-dark">
                        Learn From <br />
                        Master, Hands-On
                    </h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-8">
                        <ul className="table-design">
                            <li className="text-black w-100">Applide Finance</li>
                            <hr />
                            <li>User Exprince Design</li>
                            <hr />
                            <li>Human Resource Management</li>
                            <hr />
                            <li>Applide Finance</li>
                            <hr />
                            <li>User Exprince Design</li>
                            <hr />
                            <li>Human Resource Management</li>
                            <hr />
                        </ul>
                    </div>

                    <div className="col-lg-7 col-sm-8 hrm">
                        <div class="container-fluid py-5 bg-white rounded-3 m-4">
                            <span className="fw-bold  text-dark text-capitalize fs-5">
                                Human Resource Management
                            </span>
                            <hr />
                            <div className="container d-flex">
                                <div className="col-6">
                                    <table class="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <i class="fa-regular fa-clock"></i>  <td>Round | Deadline</td>
                                                <i class="fa-solid fa-location-dot"></i> <td>6 Months</td>
                                            </tr>
                                            <tr>
                                                <i class="fa-regular fa-address-card"></i> <td>Hybrid</td>
                                                <i class="fa-solid fa-calendar-days"></i> <td>Tought by</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <ul style={{display:"contents"}}>
                                        <li><i class="fa-solid fa-star"></i> Get All Classes By KPMG Experts</li>
                                        <li><i class="fa-solid fa-star"></i> Join Internship</li>
                                        <li><i class="fa-solid fa-star"></i> Hand on on Practice</li>
                                    </ul>
                                    <button style={{ background: "none", color: "black", width:"20rem" }} className='btn btn-light mt-3 homepageBtn'>Apply Now</button>
                                </div>
                                <div className="col-md-6">
                                    <iframe width="350" height="250" className="rounded-2" src="https://www.youtube.com/embed/IyMIGNBmRrg?si=_73SMSqsh1ZBXNXe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Apply;
