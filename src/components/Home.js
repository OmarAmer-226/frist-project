import React from "react";

const Home = () => {
  return (
  <>
  <div className=" w-100 h-200 bg-light">
  <h1  className=" mb-2 display-6 fw-bolder" >E-Shop</h1>
  <p className=" mb-4 display-6 ml ">Everything you want will be found here...</p>
  </div>
    <h3 className="text-center  mb-4 display-6 fw-bolder ">Labtop </h3>
  <div className="w-100 d-flex  m-auto">
  <img src="/imgs/computer.jpg" className="rounded mx-auto d-block   " alt="..."/>
  </div>

  <h3 className="text-center  mt-4 display-6 fw-bolder">Smartwatch</h3>
  <div className=" w-100 d-flex  m-auto">
  <img src="/imgs/88.png" className="rounded mx-auto d-block w-25 " alt="..."/>
  </div>

  <h3 className="text-center  display-6 fw-bolder">Books</h3>
  <div className="w-100 d-flex  m-auto  ">
  <img src="/imgs/book.jpg" className="rounded mx-auto d-block w-25 " alt="..."/>

  </div>
  
  </>
)};

export default Home;
