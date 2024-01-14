import "../Community/Community.css";
import arrowUp from '../../components/Assests/NewsImg/arrowUp.svg';
import new4 from '../../components/Assests/NewsImg/new4.jpg';
import new1 from '../../components/Assests/NewsImg/new1.jpg';
import new2 from '../../components/Assests/NewsImg/new2.jpg';
import new3 from '../../components/Assests/NewsImg/new3.jpg';
function Community() {
  const whatsNew = [
    { image: new2 },
    { image: new4 },
    { image: new3 },
    { image: new1 },
  ];
  return (
    <>


      <div className="container px-0 top-banner bg-dark backgraoundphoto">
        <div className="header-community ">
          <div className="main_content">
            <h1>The MasterCamps Experience,first Hand. </h1>
            <button style={{ background: "white", color: "black", width: "20rem", fontWeight: "600" }} className='btn btn-light mt-3 homepageBtn'>Connect With Us <img src={arrowUp} /></button>

          </div>
        </div>
      </div>

      <div className="bgColor">
        <div className="d-flex justify-content-evenly mt-5 master-section" style={{ height: "10rem" }}>
          <div className="cmBTn" style={{ fontSize: "3rem", fontWeight: "700", color: "white" }}>What's Cooking ?</div>
          <div className="">
            <button style={{ background: "white", color: "black", width: "20rem", fontWeight: "600" }} className='btn btn-light mt-3 homepageBtn'>Follow Us on Instagram <img src={arrowUp} /></button>
          </div>
        </div>

        <div className='container mt-5 box-shad'>
          <div className='row justify-content-center'>
            {whatsNew.map((item, index) => (
              <div key={index} className='col-md-2 mb-4 col-lg-3 col-sm-6  box-shado'>
                <div className='card' style={{ border: 'none' }}>
                  <img style={{ height: "30rem" }} src={item.image} className='card-img-top' alt='...' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Community;
