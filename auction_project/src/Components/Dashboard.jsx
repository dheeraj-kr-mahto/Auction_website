import { useState } from 'react'
import './Style.css'

function Dashboard() {

  return (
    <>
      {/* <h1 className="txtcolorD">Dashboard</h1> */}
      <div className="container-fluid">
        {/* Sidebar */}
        <div className="row">
          <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar py-4">
            <h4 className="text-center">Auction Admin</h4>
            <ul className="nav flex-column">
              <li className="nav-item"><a className="nav-link active" href="#">Dashboard</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Manage Auctions</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Payments</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1 className="my-4">Dashboard</h1>

            <div className="row">
              <div className="col-md-4">
                <div className="card bg-primary text-white">
                  <div className="card-body">
                    <h5>Total Auctions</h5>
                    <h2>20</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card bg-success text-white">
                  <div className="card-body">
                    <h5>Active Bids</h5>
                    <h2>15</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card bg-warning text-dark">
                  <div className="card-body">
                    <h5>Pending Payments</h5>
                    <h2>5</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Cards */}
            <div className="mt-5">
              <h3>Categories</h3>
              <div className="row">
                <div className="col-md-3">
                  <div className="card">
                    <img src="./public/images/antiques1.jpeg" className="card-img-top" alt="" />
                    <div className="card-body text-center">
                      <h5 className="card-title">ANTIQUES</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img src="./public/images/antiques3.jpeg" className="card-img-top" alt="Antiques" />
                    <div className="card-body text-center">
                      <h5 className="card-title">ANTIQUES</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img src="./public/images/electronics2.jpeg" className="card-img-top" alt="" />
                    <div className="card-body text-center">
                      <h5 className="card-title">ELECTRONICS</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img src="./images/download.jpeg" className="card-img-top" alt="mobile"/>
                    <div className="card-body text-center">
                      <h5 className="card-title">ELECTRONICS</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Auctions Table */}
            <div className="mt-5">
              <h3>Recent Auctions</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Starting Bid</th>
                    <th>Highest Bid</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Antiques</td>
                    <td>₹500</td>
                    <td>₹1100</td>
                    <td>Closed</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Electronics</td>
                    <td>₹5000</td>
                    <td>₹12000</td>
                    <td>Active</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Mobile-phones</td>
                    <td>₹10000</td>
                    <td>₹12500</td>
                    <td>Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
