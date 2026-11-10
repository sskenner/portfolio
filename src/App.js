import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const PUB = process.env.PUBLIC_URL;
const EMAIL = "santana@igotittoo.org";
const CV = PUB + "/Santana_Kenner_Resume.pdf";

const Icon = {
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.3L4 7.2V17h16V7.2l-8 5.1ZM5.3 7l6.7 4.3L18.7 7H5.3Z" />
    </svg>
  ),
};

const PROJECTS = [
  {
    id: "invoice",
    tag: "AI · Claude API",
    title: "Invoice Checker",
    blurb: "AI reads supplier invoices; rules decide what gets paid.",
    body: [
      "Reads supplier invoice PDFs in any layout with the Claude API, copying values exactly as printed so vendor errors get caught.",
      "Rule-based checks compare each invoice to its purchase order and delivery ticket: price, quantity ordered and delivered, math, and duplicates.",
      "On 5 sample invoices it approved 1 and held 4, catching $8,887 in overcharges, undelivered material, a math error and a duplicate payment.",
      "Files each held invoice as a Jira ticket for Purchasing, Logistics or Accounting, with no duplicates on re-runs.",
    ],
    stack: ["Python", "Claude API", "Pydantic", "Jira REST API", "Procore API"],
    links: [
      { label: "Watch demo", href: "https://www.loom.com/share/decf4c3356a6463d9bc3a10004f79ba3" },
      { label: "Code", href: "https://github.com/sskenner/invoice-checker" },
    ],
  },
  {
    id: "snreport",
    tag: "ServiceNow REST API",
    title: "ServiceNow Report Tool",
    blurb: "Exports any saved report to CSV, even after layout changes.",
    body: [
      "Exports any saved ServiceNow report to CSV through the REST API.",
      "Reads each report's columns at run time, so changing a report's layout doesn't break the export.",
      "Flattens nested fields into readable columns and pages through large reports with automatic retries.",
    ],
    stack: ["Python", "ServiceNow REST API", "Flask", "CSV"],
    links: [{ label: "Watch demo", href: "https://www.loom.com/share/db3b79f609a4496a925d5a46bcd852da" }],
  },
  {
    id: "noheat",
    tag: "Live civic data",
    title: "No Heat NYC",
    blurb: "Is your landlord required to turn the heat on right now?",
    body: [
      "A live site rebuilt every morning from four NYC Open Data datasets and the National Weather Service.",
      "Pages for thousands of buildings with heat complaints, a citywide daily chart, a daily health check, and automatic alerts.",
    ],
    stack: ["Python", "GitHub Actions", "NYC Open Data", "NWS API"],
    links: [
      { label: "Visit site", href: "https://noheatnyc.com" },
      { label: "Code", href: "https://github.com/sskenner/noheatnyc" },
    ],
  },
  {
    id: "asp",
    tag: "NYC 311 API",
    title: "Do I Move My Car?",
    blurb: "A yes-or-no answer for alternate side parking, every hour.",
    body: [
      "An hourly-updated answer on whether NYC alternate side parking is in effect today.",
      "Street-cleaning times for about 3,800 streets, a 7-day outlook, and alerts when the rules are suspended.",
    ],
    stack: ["Python", "NYC 311 API", "GitHub Actions"],
    links: [
      { label: "Visit site", href: "https://doimovemycar.com" },
      { label: "Code", href: "https://github.com/sskenner/doimovemycar" },
    ],
  },
  {
    id: "ticketbot",
    tag: "Browser automation",
    title: "ServiceNow Ticket Bot",
    blurb: "Turns a support call into a finished incident ticket.",
    body: [
      "Captures issue details from a phone, email or chat interaction and creates the ServiceNow incident automatically.",
      "Works through the browser when no API access is available, and cut support ticket click-through in half.",
    ],
    stack: ["Python", "Selenium", "Flask", "ServiceNow"],
    links: [{ label: "Watch demo", href: "https://www.loom.com/share/0979f516528f468cb21eed791fcb2f49" }],
  },
  {
    id: "igotittoo",
    tag: "Nonprofit · co-founder",
    title: "iGotITtoo.org",
    blurb: "Tech education for under-served communities, Google-funded.",
    body: [
      "Co-founded a tech education nonprofit that helps under-served communities use technology to create education and economic opportunity.",
      "Secured $250,000+ in Google grants to scale its tech education services.",
      "Manage teams of specialists and volunteers who support personal, for-profit and nonprofit clients.",
    ],
    stack: ["Program design", "Grant writing", "Team leadership"],
    links: [{ label: "Read the story", href: "https://mashable.com/archive/google-igotittoo" }],
  },
];

const EXPERIENCE = [
  {
    role: "Automation Engineer, Virtual Agent Services",
    org: "NYC Health + Hospitals",
    when: "2025 – present",
    points: [
      "Real-time NICE CXone queue alerts that post each waiting call to Webex by webhook, with failsafe branching so a Webex outage can't drop a call.",
      "Python and Selenium bots that watch live call-center and ServiceNow Virtual Agent queues and alert Webex, helping cut wait times and abandoned calls.",
      "Daily ServiceNow and VCC data pipelines feeding the analytics team's Snowflake data stores, replacing 45–60 minutes of manual work a day; one export went from 10–13 minutes to 90 seconds.",
      "SLA alerts in Python and pandas that warn staff before ServiceNow tasks come due, bringing missed SLAs and late communications to zero.",
      "A morning check that confirms every report file arrived and escalates when one is missing; it has caught every missing file before anyone noticed.",
    ],
  },
  {
    role: "Systems Analyst",
    org: "NYC Health + Hospitals",
    when: "2016 – 2025",
    points: [
      "Supported 45,000+ employees and learned where workflows break by working directly with the people using them.",
      "Built a Power Automate Desktop flow that produces the daily abandoned-call report, saving 45–60 minutes of manual work every day.",
      "Automated Excel reports that run several times a day, saving 20–30 minutes a day.",
      "Built a user verification and ticket app that cut support ticket click-through in half.",
    ],
  },
  {
    role: "Co-founder",
    org: "iGotITtoo.org",
    when: "ongoing",
    points: ["Secured $250,000+ in Google grants for tech education in under-served communities."],
  },
  {
    role: "Production Agent Engineering training",
    org: "Manifold, The Multiverse School",
    when: "2026 – present",
    points: ["Agentic SDLC, intro to agents, context engineering, and controlling AI spending."],
  },
];

const SKILLS = [
  ["AI and agents", "Claude API, Claude Code, Claude Duet, Google Gemini, Google Antigravity, prompt design, structured extraction from PDFs, output checks"],
  ["Automation", "Python, Selenium, RPA, ETL, Flask, Power Automate, webhooks, REST APIs, scheduled jobs"],
  ["Systems", "ServiceNow (incl. REST API), Jira, Procore, NICE CXone, Webex, Microsoft 365, SharePoint"],
  ["Data", "pandas, SQL, PostgreSQL, Excel automation, CSV and JSON pipelines, dashboards"],
];

const STATS = [
  ["600+ hrs", "saved a year, 24/7"],
  ["$30K+", "staff time saved a year"],
  ["0", "missed SLAs"],
  ["$250K+", "in Google grants"],
];

function Panel({ panel, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!panel) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    closeRef.current && closeRef.current.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [panel, onClose]);
  if (!panel) return null;

  let title, kicker, content;
  if (panel.type === "project") {
    const p = panel.project;
    kicker = p.tag;
    title = p.title;
    content = (
      <>
        <ul className="points">
          {p.body.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="chips">
          {p.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        <div className="panel-links">
          {p.links.map((l) => (
            <a key={l.href} className="btn" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </>
    );
  } else if (panel.type === "experience") {
    kicker = "where I've done it";
    title = "Experience";
    content = (
      <div className="timeline">
        {EXPERIENCE.map((x) => (
          <section key={x.role + x.org} className="job">
            <div className="job-head">
              <h3>
                {x.role} <span className="org">· {x.org}</span>
              </h3>
              <span className="when">{x.when}</span>
            </div>
            <ul className="points">
              {x.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    );
  } else {
    kicker = "how I work";
    title = "About";
    content = (
      <>
        <p className="lead">
          I build AI agents and plain, rule-based code that move information between the people doing the
          work, so every team sees the same truth in real time. AI reads the messy documents, emails and PDFs;
          rules make the decisions, so every result can be audited.
        </p>
        <p className="lead">
          Before I automate anything, I ask to see the work done once, ideally as a screen recording. Then I
          sort out what can be automated reliably, what should stay manual, and where the risks are, and build
          the smallest tool that removes the slowdown.
        </p>
        <dl className="skills">
          {SKILLS.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </>
    );
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="kicker">{"// " + kicker}</div>
        <h2 id="panel-title">{title}</h2>
        {content}
      </div>
    </div>
  );
}

export default function App() {
  const [panel, setPanel] = useState(null);
  const close = () => setPanel(null);

  return (
    <div className="page">
      <div className="grid-bg" aria-hidden="true" />
      <header className="topbar">
        <div className="brand">
          santana kenner<span className="cursor">_</span>
        </div>
        <nav aria-label="Main">
          <button onClick={() => setPanel({ type: "experience" })}>Experience</button>
          <button onClick={() => setPanel({ type: "about" })}>About</button>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            CV ↓
          </a>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="photo" style={{ backgroundImage: `url(${PUB}/images/headshot_neon.png)` }} role="img" aria-label="Santana Kenner" />
          <div className="hero-text">
            <p className="prompt">$ whoami</p>
            <h1>
              AI agents <span className="accent">+</span> automation
              <br />
              running <span className="accent">24/7</span>
              <span className="cursor">_</span>
            </h1>
            <p className="sub">
              Automation Engineer · New York, NY
            </p>
            <div className="socials">
              <a href="https://github.com/sskenner" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                {Icon.github}
              </a>
              <a href="https://www.linkedin.com/in/santanakenner" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {Icon.linkedin}
              </a>
              <a href={"mailto:" + EMAIL} aria-label="Email">
                {Icon.mail}
              </a>
              <span className="email">{EMAIL}</span>
            </div>
          </div>
        </section>

        <section className="tiles" aria-label="Projects">
          {PROJECTS.map((p, i) => (
            <button key={p.id} className="tile" onClick={() => setPanel({ type: "project", project: p })}>
              <span className="tile-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="tile-tag">{p.tag}</span>
              <span className="tile-title">{p.title}</span>
              <span className="tile-blurb">{p.blurb}</span>
              <span className="tile-open" aria-hidden="true">
                open →
              </span>
            </button>
          ))}
        </section>

        <section className="stats" aria-label="Highlights">
          {STATS.map(([n, l]) => (
            <div className="stat" key={l}>
              <span className="stat-n">{n}</span>
              <span className="stat-l">{l}</span>
            </div>
          ))}
        </section>
      </main>

      <Panel panel={panel} onClose={close} />
    </div>
  );
}
