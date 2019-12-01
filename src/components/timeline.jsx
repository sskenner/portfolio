import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Timeline</span>
                <h2 className="colorlib-heading animate-box">
                  When I done did it
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-unlock" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Visual AI Rockstar Hackathon <span>11/2019</span>
                        </h2>
                        <p>
                          • Participated in Applitools software testing
                          hackathon
                          <br />• Created a collection of tests using{" "}
                          <strong>WebdriverIO 4 Node.js</strong> test framework
                          and <strong>Applitools Visual AI SDK</strong>.
                        </p>
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
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-book" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Graduation at Queensborough Community College{" "}
                          <span>09/2019-12/2019</span>
                        </h2>
                        <p>
                          • Graduated the Queensborough Community College CUNY
                          TechWorks software development continuing education
                          program
                          <br />• Learning included competencies for webclient
                          programming, systems design and implementation
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Systems Analyst at NYC Health + Hospitals{" "}
                          <span>01/2016-present</span>
                        </h2>
                        <p>
                          • Design and build automated user verification support
                          ticket creation app decreasing click-through by half
                          <br />• Develop and administer departmental
                          Knowledgebase wiki
                          <br />• Provide helpdesk/technical support for 35k
                          healthcare users and 4M broadband subscribers
                          <br />• Forecasted and reported call volume metrics
                          for staffing
                        </p>
                        <p className="icon">
                          <span>
                            <a
                              href="https://drive.google.com/file/d/1FckGb9PbdUcayD-LQAvqC80NMCJYF0L3/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-video" />
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Co-founder at iGotITtoo.org{" "}
                          <span>06/2009-present</span>
                        </h2>
                        <p>
                          •{" "}
                          <a
                            href="https://mashable.com/2010/11/30/google-igotittoo/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Secured $250k+ Google grant(s)
                          </a>{" "}
                          to scale{" "}
                          <a
                            href="https://www.facebook.com/pg/igotittoo/photos/?ref=page_internal"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            TechEd services
                          </a>{" "}
                          for under-served communities
                          <br />• Manage technical teams of specialists and
                          volunteers that support personal, for- and non-profit
                          clients
                        </p>
                        <p className="icon">
                          <span>
                            <a
                              href="https://mashable.com/2010/11/30/google-igotittoo/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-book" />
                            </a>{" "}
                            <a
                              href="https://www.youtube.com/watch?v=OtMtwXS0I20&feature=youtu.be"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-video" />
                            </a>{" "}
                            <a
                              href="https://www.facebook.com/pg/igotittoo/photos/?ref=page_internal"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-camera" />
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
