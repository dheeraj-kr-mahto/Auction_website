import { useState } from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function Navbar() {

  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Live-Auction</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Auctions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Sell</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Contact</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search best..." aria-label="Search" />
              <button class="btn btn-light" type="submit">Search</button>
            </form>
          </div>  
        </div>
      </nav>
    </>
  )
}

export default Navbar
