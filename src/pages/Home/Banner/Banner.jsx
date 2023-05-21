export default function Banner() {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative h-[400px] object-cover w-full"
      >
        <img
          src={
            "https://cdn.pixabay.com/photo/2020/07/19/09/03/mazda-5419417_1280.jpg"
          }
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide4"
            className="btn btn-circle bg-green-500 text-black border-0"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-green-500 text-black border-0"
          >
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
            "https://cdn.pixabay.com/photo/2020/07/19/09/03/mazda-5419417_1280.jpg"
          }
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="btn btn-circle bg-green-500 text-black border-0"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-green-500 text-black border-0"
          >
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
            "https://cdn.pixabay.com/photo/2020/07/19/09/03/mazda-5419417_1280.jpg"
          }
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="btn btn-circle bg-green-500 text-black border-0"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-green-500 text-black border-0"
          >
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
            "https://cdn.pixabay.com/photo/2020/07/19/09/03/mazda-5419417_1280.jpg"
          }
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide3"
            className="btn btn-circle bg-green-500 text-black border-0"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-green-500 text-black border-0"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
