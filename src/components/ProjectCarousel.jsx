import React, { Component } from 'react';

class ProjectCarousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative w-[90%]"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
          <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Card title
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
          <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Card title
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Card title
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default ProjectCarousel;
