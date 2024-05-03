import React from "react";
import Logo from "../../../assets/image/logo/logo.png";
  

export default function header() {
  return (
    <>
      <div className="se-pre-con"></div>
      <div
        className="theme_all_wrap"
        data-magic-cursor=" "
        data-color="crimson"
      >
        <div id="main-wrapper">
          <header className="header">
            <div className="main-navigation">
              <div className="navbar navbar-expand-lg bsnav bsnav-sticky bsnav-sticky-slide bsnav-transparent">
                <div className="container">
                  <a className="navbar-brand" href="index.html">
                    <img
                      src={Logo}
                      className="logo-display"
                      alt="Logo Display"
                    />
                    <img
                      src={Logo}
                      className="logo-scrolled"
                      alt="Logo Scrolled"
                    />
                  </a>
                  <div className="ttt">
                    <span>
                      {" "}
                      <i className="icofont-ui-call mr-2"></i>Call us-(+00) 1234
                      678 77
                    </span>
                  </div>
                  <button className="navbar-toggler toggler-spring">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-sm-end">
                    <ul className="navbar-nav navbar-mobile ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="index.html">
                          Home{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          About
                        </a>
                      </li>
                      <li className="nav-item dropdown fadeup">
                        <a className="nav-link" href="#">
                          Pages <i className="caret ti-angle-down"></i>
                        </a>
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <a className="nav-link" href="service.html">
                              Service
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="service-single.html">
                              Service Single
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="work.html">
                              Our Projects
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="work-single.html">
                              Project Single
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="team.html">
                              Our Team
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="404.html">
                              404
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bsnav-mobile">
                <div className="bsnav-mobile-overlay"></div>
                <div className="navbar"></div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
