import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who I am</h2>
                      <p>
                        I build AI agents and plain, rule-based code that move
                        information between the people doing the work, so
                        every team sees the same truth in real time. AI reads
                        the messy documents, emails, and PDFs, and rules make
                        the decisions, so every result can be audited.
                      </p>
                      <p>
                        I'm an Automation Engineer on the Virtual Agent
                        Services team at NYC Health + Hospitals, where I've
                        supported 45,000+ employees. I build the alerts,
                        pipelines, and reports that keep the service desk and
                        contact center running. I also co-founded iGotITtoo.org,
                        a tech education nonprofit that secured $250,000+ in
                        Google grants for under-served communities.
                      </p>
                      <p>
                        I start by watching what slows a team down, then build
                        the smallest tool that removes it. I'm currently
                        training in production agent engineering at{" "}
                        <a
                          href="https://manifold.school/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Manifold
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                {/* <span className="heading-meta">What I do?</span> */}
                <h2 className="colorlib-heading">What I do</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-layers2" />
                  </span>
                  <div className="desc">
                    <h3>AI Agents</h3>
                    <p>
                      Claude API agents that read PDFs, emails, and documents
                      into structured data, with checks on every output
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-chrome" />
                    {/* <i className="icon-bulb" /> */}
                  </span>
                  <div className="desc">
                    <h3>Workflow Automation</h3>
                    <p>
                      Python, Selenium, Power Automate, webhooks, REST APIs,
                      ServiceNow, Jira, Webex, Microsoft 365
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-data" />
                    {/* <i className="icon-phone3" /> */}
                  </span>
                  <div className="desc">
                    <h3>Data & Reporting</h3>
                    <p>
                      pandas, SQL, Excel automation, scheduled pipelines,
                      dashboards, and alerts when data goes missing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>
                      I am pursuing my internship with DevOps team at Juniper
                      and working with tools like Jenkins, Docker, K8s
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    );
  }
}
