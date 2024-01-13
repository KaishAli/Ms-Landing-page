import experinceImg from '../../components/Assests/experienceImg.png'
import '../../components/Experience Engage/Experience.css'
function ExperienceEngage() {


    return <>
        <section id="about">
            <div className="about-section mt-0 wrapper">
                <h1 className="exp-engage">Experience.<br /> Engage.Elevet</h1>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 text-sec">
                            <h2>In-Person Residenies</h2>
                            <p style={{color:"white"}}>
                            For every programme, we host 3 offline residencies across locations in India & our Gurgaon campus which gives cohor members the opportunity to learn, network & make memories
                            </p>
                            
                         </div>
                         <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                            <div className="card border-0 ">
                                <img
                                    src={experinceImg}
                                    alt=""
                                    className="img-fluid w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}
export default ExperienceEngage;