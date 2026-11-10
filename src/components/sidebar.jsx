import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/IMG_0016serious.JPG)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">santana kenner</a>
              </h1>
              <span className="email">
                <a href="mailto:sskenner@gmail.com">sskenner@gmail.com</a>{" "}
                <i className="icon-mail"></i>
              </span>
            </div>
            <br />
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://github.com/sskenner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/santanakenner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <a
                href={process.env.PUBLIC_URL + "/Santana_Kenner_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV <i className="icon-download4" />
              </a>
              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" />,{" "}
                  <i className="icon-coffee" aria-hidden="true"></i> and React.
                  {/* <br></br>
                  Bigup{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ddbarochiya
                  </a>{" "}
                  for the step by step */}
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
