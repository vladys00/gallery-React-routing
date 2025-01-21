import './Gallery.css'
import artData from './../data-json.json'
function Gallery() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Gallery</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {artData.map((el)=>

        <div className="col" key={el.id}>
          <div className="card p-3">
            <img src={el.imageUrl} className="card-img-top" alt="..."  />
            <div className="card-body">
              <h5 className="card-title">{el.title}</h5>
              <button className='btn btn-secondary'>See details</button>
            </div>
          </div>
        </div>
        )}

      </div>
    </div>
  );
}

export default Gallery;
