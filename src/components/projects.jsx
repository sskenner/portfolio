import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Projects</span>
                <h2 className="colorlib-heading animate-box">What I've Done</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/invoicechecker.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://www.loom.com/share/decf4c3356a6463d9bc3a10004f79ba3" target="_blank" rel="noopener noreferrer">
                          <strong>Invoice Checker</strong> - AI-assisted three-way match
                        </a>
                      </h3>
                      <span>
                        Reads supplier invoice PDFs with the{" "}
                        <strong>Claude API</strong>, checks them against purchase
                        orders and delivery tickets with rule-based code, and
                        files each problem as a <strong>Jira</strong> ticket for
                        the right team. Written in <strong>Python</strong>.
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://www.loom.com/share/decf4c3356a6463d9bc3a10004f79ba3"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-video" />
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/noheatnyc.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://noheatnyc.com" target="_blank" rel="noopener noreferrer">
                          <strong>No Heat NYC</strong>
                        </a>
                      </h3>
                      <span>
                        A live site rebuilt every morning from four NYC Open
                        Data datasets and the National Weather Service, with
                        pages for thousands of buildings, a daily health check,
                        and alerts. Written in <strong>Python</strong> with{" "}
                        <strong>GitHub Actions</strong>.
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://noheatnyc.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-link" />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://github.com/sskenner/noheatnyc"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-github" />
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/doimovemycar.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://doimovemycar.com" target="_blank" rel="noopener noreferrer">
                          <strong>Do I Move My Car?</strong>
                        </a>
                      </h3>
                      <span>
                        An hourly-updated answer on whether NYC alternate side
                        parking is in effect, with street-cleaning times for
                        about 3,800 streets and alerts when the rules are
                        suspended. Written in <strong>Python</strong> with the{" "}
                        <strong>NYC 311 API</strong>.
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://doimovemycar.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-link" />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://github.com/sskenner/doimovemycar"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-github" />
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/rockstar1.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Visual AI Rockstar Hackathon</a>
                      </h3>
                      <span>
                        <p>
                          <strong>Rockstar</strong> is a collection of tests
                          written for the Applitools Rockstar hackathon using{" "}
                          <strong>WebdriverIO 4 Node.js</strong> test framework
                          and <strong>Applitools Visual AI SDK</strong>.
                          <br />
                          <strong>NOTE:</strong> Private GitHub repo shared upon
                          request.
                        </p>
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://github.com/sskenner/rockstar"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-github" />
                          </a>
                        </span>
                        {/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/seliniumAuto.jpeg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">
                          <strong>tech+</strong> - Automated user verification
                          and incident requests tool
                        </a>
                      </h3>
                      <span>
                        tech+ automates the user verification and incident
                        request workflow for systems analysts. Written using{" "}
                        <strong>Selenium</strong>, <strong>Python</strong> and{" "}
                        <strong>Flask</strong>.
                        <br />
                        <strong>NOTE:</strong> Private GitHub repo shared upon
                        request.
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://www.loom.com/share/0979f516528f468cb21eed791fcb2f49"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-video" />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://github.com/sskenner/WebinarPython/blob/hole/Flask_Blog/flaskblog.py"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-github" />
                          </a>
                        </span>
                        {/* <span><a href="#"><i className="icon-video" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/padrenoSwSquare.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">
                          <strong>POMS</strong> - Padreno Order Management
                          System
                        </a>
                      </h3>
                      {/* <h3><a href="work.html">Work 02</a></h3> */}
                      <span>
                        POMS is a cloud based system to submit, manage and track
                        the details of real estate general contractors project
                        work order requests. Written using{" "}
                        <strong>Django</strong>, <strong>Python</strong> and{" "}
                        <strong>Bootstrap</strong>.
                        <br />
                        <strong>NOTE:</strong> Private GitHub repo shared upon
                        request.
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://github.com/sskenner/padreno"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-github" />
                          </a>
                        </span>
                        {/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div> */}
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/snreporttool.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://www.loom.com/share/db3b79f609a4496a925d5a46bcd852da" target="_blank" rel="noopener noreferrer">
                          <strong>ServiceNow Report Tool</strong>
                        </a>
                      </h3>
                      <span>
                        Exports any saved ServiceNow report to CSV through the{" "}
                        <strong>ServiceNow REST API</strong>. It reads each
                        report's columns at run time, so layout changes don't
                        break it, flattens nested fields, and pages through
                        large reports with retries.
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            href="https://www.loom.com/share/db3b79f609a4496a925d5a46bcd852da"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-video" />
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
