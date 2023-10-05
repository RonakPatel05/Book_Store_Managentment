import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
const image =require("../images/OIP.jpg")
  return (


    <div className="Home-Page bg-dark text-white container-fluid  d-flex justify-content-center align-items-lg-end flex-column">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-lg-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{fontsize:"70px"}}>BOOK STORE</h2>
          <h2 style={{fontsize:"70px"}}>FOR YOU </h2>
<p cla>
  Checkout The Books From Here
</p>
          <Link to="/books" className="viewBook my-3">View Books</Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img className="image class img-fluid homeimg" src="https://th.bing.com/th/id/R.ea08b29cc6c833a901de00949bee59e2?rik=LtAws%2bv2RnNyIg&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2018%2f04%2fChildren-Read-Best-Wallpaper-1024x512.jpg&ehk=eyhNFtLFpvMQZo41C7nvUzNnGuN1yXHlYn7whzqOklE%3d&risl=&pid=ImgRaw&r=0" alt="/"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
