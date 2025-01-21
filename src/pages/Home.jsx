import './Home.css'
function Home() {
  return (
    <div className="">
      <h1>Home Page</h1>
      <div className="card">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    <div className='carousel-container'>

      <div id="carouselExample" className="carousel slide ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?cs=srgb&dl=pexels-steve-1266808.jpg&fm=jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?cs=srgb&dl=pexels-steve-1183992.jpg&fm=jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_640.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Home;
