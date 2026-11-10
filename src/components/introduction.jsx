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
                          <h1 style={hStyle}>
                            AI agents
                            <br /> + automation,
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary"
                              style={hStyle}
                              href="https://www.loom.com/share/decf4c3356a6463d9bc3a10004f79ba3"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Watch Demo <i className="icon-video" />
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
                              href={process.env.PUBLIC_URL + "/Santana_Kenner_Resume.pdf"}
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
                          <p>
                            <a
                              className="btn btn-primary"
                              style={hStyle}
                              href="https://mashable.com/archive/google-igotittoo"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Story <i className="icon-book" />
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
