import "../Community/Community.css";
import first from "../Assests/CommunityImage/first.png";
function Community() {
  return (
    <>
      <div className="container px-0 top-banner bg-dark backgraoundphoto">
        <div className="header-community ">
          <div className="main_content">
            <h1>Unlimited movies, TV shows and more</h1>
            <button className="btn btn-primary">heellojhdfdfd</button>
          </div>
        </div>
      </div>

        <div className="d-flex justify-content-evenly mt-5 master-section">
          <div className="">xyz</div>
          <div className="">
            <button className="btn">xyz</button>
          </div>
        </div>
      <div className="master-section d-flex container-fluid mt-5 ">

        <div className="d-flex m-3 p-3 gap-3 ">
          <div className="card">
            <img src={first} className="p-3" alt="..." />
          </div>
          <div className="card">
            <img src={first} className="p-3" alt="..." />
          </div>
          {/* <div
          id="carouselExampleControls"
          className="carousel slide col-2 m-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={first} className="d-block w-100 " alt="..."  />
            </div>
            <div className="carousel-item">
              <img src={first} className="d-block w-100" alt="..."  />
            </div>
            <div className="carousel-item">
              <img src={first} className="d-block w-100" alt="..."  />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
          <div className="card">
            <img src={first} className="p-3" alt="..." />
          </div>
          <div className="card">
            <img src={first} className="p-3" alt="..." />
          </div>
          <div className="card">
            <img src={first} className="p-3" alt="..." />
          </div>
          <div className="card">
            <img src={first} className="p-3" alt="..." />
          </div>
          <div className="card">
            <img src={first} className="p-3" alt="..." />
          </div>
          <div className="card">
            <img src={first} className="p-3" alt="..." />
          </div>
          <div className="card">
            <img src={first} className="p-3" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}
export default Community;
