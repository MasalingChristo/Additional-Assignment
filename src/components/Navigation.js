import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Nav.css';

const Navigation = () => {
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="row">
              <div className=" px-4 px-lg-5 ptosition-absolute " >
                  <Link className="navbar-brand" to="/">ALL TYPES<i className="bi bi-chevron-down mt-10"></i></Link>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                      </ul> */}
                  </div>
              </div>
        </div>


            <div className="conteiner Center">
              <div className=" px-4 px-lg-5 ptosition-relative" >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 d-flex justify-content-center">
                          <Link className="nav-link active" aria-current="page" to="/">Popular Product</Link>
                          <Link className="nav-link" to="/about">Low Prive</Link>
                          <Link className="nav-link" to="/about">High Price</Link>
                      </ul>
                  </div>
              </div>


              <div className="row">
              <div className=" px-4 px-lg-5 ptosition-absolute " >
                  <Link className="navbar-brand" to="/">Price <i class="bi bi-chevron-down"></i></Link>
                  {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                      </ul> */}
                  </div>
              </div>
        </div>






    </nav>

  );
}

export default Navigation;
