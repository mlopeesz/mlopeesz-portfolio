import React, { Component } from 'react';

class ProjectCarousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative mb-10 w-[90%]"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
          <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg"
                    src="https://media.istockphoto.com/vectors/electronic-goods-store-application-catalog-buyer-and-consultant-vector-id1306113985?k=20&m=1306113985&s=612x612&w=0&h=n1p_cRerxyATD3yliY6xBftgaPUGmjCD0qOxu71-1Ng="
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Store Manager
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    A API store manager trata-se de um sistema de gerenciamento
                    de vendas, onde será possível criar, visualizar, deletar e
                    atualizar produtos e vendas. Meu primeiro contato com a
                    arquitetura MSC e a RESTful.
                  </p>
                  <p className="text-gray-700 font-bold text-base mb-4">
                    Stacks: node.js, nodemon, body-parser, MSC,
                    mysql2, express.
                  </p>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Github
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
                    src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Blogs API
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Blogs API é uma API CRUD de posts de blog utilizando ORM.
                    Começando pela API, foi desenvolvido alguns endpoints
                    que estarão conectados ao
                    banco de dados e possuem autenticação e autorização de
                    usuário. No banco de dados temos entidades variadas como
                    Usuários, Categorias, Posts e relações diversas entre elas.
                  </p>
                  <p className="text-gray-700 font-bold text-base mb-4">
                    Stacks: node.js, nodemon, body-parser, MSC, RESTful,
                    mysql2, express, Sequelize, joi.
                  </p>
                  <a
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Github
                  </a>
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
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
        </button>
      </div>
    );
  }
}

export default ProjectCarousel;
