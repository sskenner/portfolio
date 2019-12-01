import React, { Component } from "react";

const hStyle = {
  color: "#ffffff",
  fontWeight: "bold"
};

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/skshowtech.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          {/* <h1> */}
                          <h1 style={hStyle}>
                            code
                            <br /> caster,
                          </h1>
                          {/* <h1 style={hStyle}>
                            I love solving
                            <br /> PROBLEMS ...
                          </h1> */}
                          <p>
                            <a
                              className="btn btn-primary"
                              style={hStyle}
                              href="https://github.com/sskenner"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {/* GH or projects */}
                              View GitHub <i className="icon-github" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/skshowtech.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={hStyle}>
                            problems
                            <br /> solver,
                          </h1>
                          {/* <h1 style={hStyle}>First name's SANTANA ...</h1> */}
                          <p>
                            <a
                              className="btn btn-primary"
                              style={hStyle}
                              href="https://drive.google.com/file/d/1pkMjCFwP7RZEyVyjru4cpPAEI_2Uzhhq/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/skshowtech.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={hStyle}>
                            GOOGLE
                            <br /> check-casher.
                          </h1>
                          {/* <h1 style={hStyle}>GOOGLE gave us 250k USD !! </h1> */}
                          <p>
                            <a
                              className="btn btn-primary"
                              style={hStyle}
                              href="https://mashable.com/2010/11/30/google-igotittoo/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Story <i className="icon-book" />
                            </a>
                          </p>
                          <p>
                            <a
                              className="btn btn-primary"
                              style={hStyle}
                              href="https://www.youtube.com/watch?v=OtMtwXS0I20&feature=youtu.be"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Video <i className="icon-video" />
                            </a>
                          </p>
                          <p>
                            <a
                              className="btn btn-primary"
                              style={hStyle}
                              href="https://www.facebook.com/pg/igotittoo/photos/?ref=page_internal"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Photos <i className="icon-camera" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
