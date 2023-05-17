export default function Banner() {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative h-[400px] object-cover w-full"
      >
        <img
          src={
            "https://img.freepik.com/free-photo/green-easter-car-with-eggs-copy-space_23-2149301298.jpg?w=1480&t=st=1684354161~exp=1684354761~hmac=d9210ee5f7cf1126caa4aa81e2d64a22ac32402bf28e5f25166c91f6a45164b1"
          }
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative h-[400px] object-cover w-full"
      >
        <img
          src={
            "https://img.freepik.com/free-photo/green-easter-car-with-eggs-copy-space_23-2149301298.jpg?w=1480&t=st=1684354161~exp=1684354761~hmac=d9210ee5f7cf1126caa4aa81e2d64a22ac32402bf28e5f25166c91f6a45164b1"
          }
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative h-[400px] object-cover w-full"
      >
        <img
          src={
            "https://img.freepik.com/free-photo/green-easter-car-with-eggs-copy-space_23-2149301298.jpg?w=1480&t=st=1684354161~exp=1684354761~hmac=d9210ee5f7cf1126caa4aa81e2d64a22ac32402bf28e5f25166c91f6a45164b1"
          }
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative h-[400px] object-cover w-full"
      >
        <img
          src={
            "https://img.freepik.com/free-photo/green-easter-car-with-eggs-copy-space_23-2149301298.jpg?w=1480&t=st=1684354161~exp=1684354761~hmac=d9210ee5f7cf1126caa4aa81e2d64a22ac32402bf28e5f25166c91f6a45164b1"
          }
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
