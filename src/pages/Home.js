import React from "react";
import "../pages/Main.css";
import "./img/logo/logo3.png";
import mainLogo from "./img/logo/logo3.png";
import mainAbout from "./img/about/profile.png";
import mainIcon1 from "./img/icon/d1.png";
import mainIcon2 from "./img/icon/d2.png";

/* const price = 23;
const data=() =>{
    return price
}
 */

const Home = () => {
  return (
    <>
      <div id="preloader"></div>
      <header className="header-one">
        <div id="sticker" className="header-menu-area header-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
                <div className="logo">
                  <a href="index-2.html">
                    <img src={imageFunction.mainLogo} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-9">
                <div className="header-right ">
                  <a href="contact.html" className="top-btn coin-btn">
                    Buy token
                  </a>
                </div>
                <div className="header_menu f-right">
                  <nav id="mobile-menu">
                    <ul className="main-menu">
                      <li className="menu-item-has-children">
                        <a href="#">Home</a>
                        <ul className="submenu">
                          <li>
                            <a href="index-2.html">Home 01</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 02</a>
                          </li>
                        </ul>
                      </li>
                      <li className="resulta">
                        <a href="about.html">About us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="submenu">
                          <li>
                            <a href="user-panel.html">User panel</a>
                          </li>
                          <li>
                            <a href="coin.html">Coin Information</a>
                          </li>
                          <li>
                            <a href="stacking.html">Coin Stacking</a>
                          </li>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="token-ico.html">Token ICO</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="signup.html">Signup</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="contact">
                        <a href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="notify-overlay"></div>
        <div className="dsahboard-area bg-color area-padding-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4">
                <aside className="sidebar">
                  <div className="dashboard-side">
                    <div className="dashboard-head">
                      <div className="dashboard-profile">
                        <img src={imageFunction.mainAbout} alt="" />
                        <div className="profile-content">
                          <span className="pro-name">Stepen</span>
                          <span className="pro-id">ID: 25424343</span>
                          <span className="pro-number">support@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-menu">
                      <ul>
                        <li className="active">
                          <a href="user-panel.html">
                            <i className="ti-dashboard"></i>Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="user-diposit.html">
                            <i className="ti-wallet"></i>MY STAKED
                          </a>
                        </li>
                        <li>
                          <a href="user-stacking.html">
                            <i className="ti-bar-chart"></i>MY NETWORK
                          </a>
                        </li>
                        <li>
                          <a href="user-withdraw.html">
                            <i className="ti-import"></i>MY BONUSES
                          </a>
                        </li>
                        <li>
                          <a href="user-transection.html">
                            <i className="ti-layout-list-thumb"></i>MY WITHDRAW
                          </a>
                        </li>
                        <li>
                          <a href="user-notification.html">
                            <i className="ti-bell"></i>Notifecations
                          </a>
                        </li>
                        <li>
                          <a href="user-info.html">
                            <i className="ti-settings"></i>Settings
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-shift-right"></i>Log out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-8">
                <div className="row user-dashboard">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="user-top">
                      <div className="user-balance">
                        <span>Your balance</span>
                        {/*    <div className="main-bal">{data.price}</div> */}
                        <div className="main-bal">$8020.20</div>
                      </div>
                      <div className="userboard-btn">
                        <a className="user-btn coin-btn" href="#">
                          Make a deposite
                        </a>
                        <a className="user-btn color-btn" href="#">
                          Withdraw funds
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row dashboard-content">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">DAILY ROI</span>
                          <span className="pro-money">$5000</span>
                        </div>
                        <div className="invest-tumb">
                          <img src={imageFunction.mainIcon1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">LEVEL ROI</span>
                          <span className="pro-money">$3000</span>
                        </div>
                        <div className="invest-tumb">
                          <img src={imageFunction.mainIcon2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">PACKAGE</span>
                          <span className="pro-money">$7000</span>
                        </div>
                        <div className="invest-tumb">
                          <img src="img/icon/d3.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">WITHDRAW</span>
                          <span className="pro-money">$1500</span>
                        </div>
                        <div className="invest-tumb">
                          <img src="img/icon/d4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">TOTAL INVEST</span>
                          <span className="pro-money">$8000</span>
                        </div>
                        <div className="invest-tumb">
                          <img src="img/icon/d5.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">BALANCE CAP</span>
                          <span className="pro-money">$4000</span>
                        </div>
                        <div className="invest-tumb">
                          <img src="img/icon/d6.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="send-money-form transection-log">
                      <div className="form-text">
                        <h4 className="form-top">Leaderboard</h4>
                        <div className="form-inner table-inner">
                          <table>
                            <tr>
                              <th>Date</th>
                              <th>Transaction ID</th>
                              <th>Amount</th>
                              <th>Details</th>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="copyright">
                  <p>
                    Copyright © 2022
                    <a href="#">PCH PRO</a> All Rights Reserved
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="services.html">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="coin.html">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script src="js/vendor/modernizr-3.5.0.min.js"></script>
      <script src="js/vendor/jquery-1.12.4.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/jquery.nice-select.min.js"></script>
      <script src="js/jquery.meanmenu.js"></script>
      <script src="js/wow.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script>
    </>
  );
};
const imageFunction = {
  mainLogo,
  mainAbout,
  mainIcon1,
  mainIcon2,
};
export default Home;
