import hero from '../Assests/hero.png';
import '../Hero/Hero.css';
function Hero() {
    return (
        <>
            <div className='container'>
                <div className='homepage-sec rounded-5 d-flex justify-content-between gap-5'>
                    <div className='mt-5 ps-4 col-8 '>
                        <span className='join-com '>Online Practitioner-Led Learning with Offline Community Experiences</span>
                    </div>
                    <div className='pt-4 col-4'>
                        <span className='d-flex' style={{color:"white"}}> Our hybrid & experiential programmes are designed to help you elevate your skills and embark on a unique learning journey that redefines your career path.</span>
                        <button style={{ background: "none", color: "white" }} className='btn btn-light mt-3 homepageBtn'> WHICH PROGRAMM IS RIGHT FOR ME</button>
                    </div>
                </div>
                {/* <section id="master" className='mt-5 d-flex justify-content-between'>
                    <div className="about-section mt-0 wrapper">
                        <span className="exp-engage" style={{ color: 'white' }}>Online Practitioner-Led Learning with Offline Community Experiences</span><br />
                    </div>
                    <div className='me-5 p-4'>
                        <div className='arrow-direction'>
                            <i className="fa-solid fa-arrow-left text-light"></i>
                        </div>
                        <div className='arrow-direction'>
                            <i className="fa-solid fa-arrow-right text-light"></i>
                        </div>
                    </div>
                </section> */}
                <div className="img">
                    <img src={hero} alt="" className='w-100' />
                </div>
                <div className='ads col-12'>
                    <p class="text-justify "><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span>br<span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span></p>
                    <p class="text-justify"><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span>br<span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span></p>
                </div>
            </div>


        </>
    )
}
export default Hero;