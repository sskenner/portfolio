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
                <h2 className="colorlib-heading animate-box">When I did it</h2>
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
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Automation Engineer, Virtual Agent Services at NYC Health + Hospitals{" "} <span>06/2025-present</span>
                        </h2>
                        <p>
                          • Built a real-time NICE CXone queue alert that posts each waiting call to Webex by webhook, with failsafe branching so a Webex outage can't drop a call
                          <br />• Built Python and Selenium bots that watch live call-center and ServiceNow Virtual Agent queues and alert Webex when limits are crossed
                          <br />• Built data pipelines that pull ServiceNow and VCC reports daily and deliver them to network data stores for Snowflake
                          <br />• Built SLA alerts in Python and pandas that warn staff before ServiceNow tasks come due
                          <br />• Built a morning check that confirms every report file arrived and escalates to "action required" by email when one is missing
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
                          AI engineering training at Manifold{" "} <span>2026-present</span>
                        </h2>
                        <p>
                          • Production Agent Engineering; Agentic SDLC: Ship Software with AI Agent Teams; Intro to Agents; Context Engineering; Control AI Spending
                        </p>
                      </div>
                    </div>
                  </article>
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
                          <span>01/2016-06/2025</span>
                        </h2>
                        <p>
                          • Built an automated user verification and support
                          ticket app that cut click-through in half
                          <br />• Built a Power Automate Desktop flow that
                          produced the daily abandoned-call report
                          <br />• Automated Excel reports that ran several times
                          a day: calculations, merging, renaming and exporting
                          <br />• Developed and administered the departmental
                          knowledge base wiki
                          <br />• Provided technical support for 45,000+
                          employees
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
                          <span>ongoing</span>
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
                          TechEd services{" "}
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
