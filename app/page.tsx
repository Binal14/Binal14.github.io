"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "de";

const copy = {
  en: {
    nav: ["About", "Work", "Experience", "Skills", "Contact"],
    switchLabel: "Deutsch",
    eyebrow: "M.Sc. Data Science · Python · AI",
    headlineA: "I turn",
    headlineB: "data",
    headlineC: "into useful solutions.",
    intro:
      "Data Science student and Python developer combining 2+ years of professional software experience with machine learning, analytics, AI, and business understanding.",
    viewWork: "Explore my work",
    download: "Download CV",
    status: "Open to working-student roles · 15–20 hrs/week",
    based: "Based in Dortmund, Germany",
    proof: [
      ["2+ years", "Professional Python development"],
      ["1M+", "Records migrated & validated"],
      ["ML", "Predictive modelling & evaluation"],
      ["AI", "RAG · embeddings · semantic search"],
    ],
    aboutKicker: "01 · About",
    aboutTitle: "Engineering experience. Data Science perspective.",
    aboutText:
      "I’m pursuing an M.Sc. in Data Science at TU Dortmund after more than two years of professional experience building Python and Odoo solutions. My interest is at the intersection of data, software and real-world problems: understanding the data, finding useful patterns, and turning the results into practical solutions.",
    pathA: "Data Science & Analytics",
    pathAText:
      "Data preprocessing, exploratory analysis, feature engineering, predictive modelling, statistical analysis, model evaluation and dashboards.",
    pathB: "Python & Software Engineering",
    pathBText:
      "Python applications, REST APIs, PostgreSQL, Odoo, system integrations, data migration, automated testing and production support.",
    workKicker: "02 · Selected work",
    workTitle: "From data to practical outcomes.",
    workLead:
      "A selection of professional and independent projects across machine learning, AI, analytics, data engineering and software development.",
    caseStudy: "Case study",
    source: "View source",
    privateLabel: "Professional project",
    expKicker: "03 · Experience",
    expTitle: "Professional software experience behind the data.",
    role: "ERP / Software Developer — Python, Data & Automation",
    company: "Silent Infotech Inc.",
    dates: "Jan 2024 – Feb 2026 · Ahmedabad, India",
    roleText:
      "Built Python-based enterprise applications, automated workflows, reports and dashboards across CRM, accounting, inventory and manufacturing. Worked with large-scale business data, machine learning, data migration, REST APIs and system integrations while collaborating with international technical and business stakeholders.",
    trainee: "Full Stack Developer — Trainee",
    traineeDates: "Jan 2024 – Jul 2024",
    traineeText:
      "Built a foundation in Python backend development, SQL data handling, Odoo workflows, testing, debugging and support for live projects.",
    skillKicker: "04 · Capabilities",
    skillTitle: "Technical skills across data, AI and software engineering.",
    education: "Education",
    edu1: "M.Sc. Data Science · TU Dortmund University · 2026–2028 (expected)",
    edu2: "B.E. Computer Engineering · Government Engineering College, Rajkot · 2020–2024",
    language: "Languages",
    langText: "English C1 · German A2 (actively learning) · Gujarati native",
    contactKicker: "05 · Contact",
    contactTitle: "Let’s build something useful.",
    contactText:
      "I’m looking for a working-student role where I can contribute my professional Python experience while growing further in Data Science, Machine Learning and AI.",
    email: "Email me",
    linkedin: "LinkedIn",
    github: "GitHub",
    footer:
      "Binal Dave · Dortmund, Germany · Open to working-student opportunities",
  },

  de: {
    nav: ["Über mich", "Projekte", "Erfahrung", "Kompetenzen", "Kontakt"],
    switchLabel: "English",
    eyebrow: "M.Sc. Data Science · Python · AI",
    headlineA: "Ich verwandle",
    headlineB: "Daten",
    headlineC: "in praktische Lösungen.",
    intro:
      "Data-Science-Studentin und Python-Entwicklerin mit mehr als zwei Jahren Berufserfahrung in Softwareentwicklung, Machine Learning, Analytics, KI und Geschäftsprozessen.",
    viewWork: "Projekte entdecken",
    download: "Lebenslauf herunterladen",
    status: "Offen für Werkstudentenstellen · 15–20 Std./Woche",
    based: "Dortmund, Deutschland",
    proof: [
      ["2+ Jahre", "Professionelle Python-Entwicklung"],
      ["1 Mio.+", "Migrierte & validierte Datensätze"],
      ["ML", "Prädiktive Modellierung & Evaluation"],
      ["KI", "RAG · Embeddings · Semantische Suche"],
    ],
    aboutKicker: "01 · Über mich",
    aboutTitle: "Technische Erfahrung. Data-Science-Perspektive.",
    aboutText:
      "Nach mehr als zwei Jahren Berufserfahrung in der Entwicklung von Python- und Odoo-Lösungen studiere ich Data Science im Master an der TU Dortmund. Mein Interesse liegt an der Schnittstelle von Daten, Software und realen Problemen: Daten verstehen, relevante Muster erkennen und daraus praktische Lösungen entwickeln.",
    pathA: "Data Science & Analytics",
    pathAText:
      "Datenvorverarbeitung, explorative Analyse, Feature Engineering, prädiktive Modellierung, statistische Analyse, Modellevaluation und Dashboards.",
    pathB: "Python & Software Engineering",
    pathBText:
      "Python-Anwendungen, REST APIs, PostgreSQL, Odoo, Systemintegrationen, Datenmigration, automatisierte Tests und Production Support.",
    workKicker: "02 · Ausgewählte Projekte",
    workTitle: "Von Daten zu praktischen Ergebnissen.",
    workLead:
      "Eine Auswahl professioneller und eigener Projekte aus Machine Learning, KI, Analytics, Data Engineering und Softwareentwicklung.",
    caseStudy: "Projekt ansehen",
    source: "Quellcode ansehen",
    privateLabel: "Berufliches Projekt",
    expKicker: "03 · Erfahrung",
    expTitle: "Professionelle Softwareentwicklung als Grundlage.",
    role: "ERP / Software Developer — Python, Data & Automation",
    company: "Silent Infotech Inc.",
    dates: "Jan 2024 – Feb 2026 · Ahmedabad, Indien",
    roleText:
      "Entwicklung von Python-basierten Unternehmensanwendungen, automatisierten Workflows, Reports und Dashboards für CRM, Accounting, Inventory und Manufacturing. Erfahrung mit großen Geschäftsdatenmengen, Machine Learning, Datenmigration, REST APIs und Systemintegrationen sowie Zusammenarbeit mit internationalen technischen und fachlichen Teams.",
    trainee: "Full Stack Developer — Trainee",
    traineeDates: "Jan 2024 – Jul 2024",
    traineeText:
      "Grundlagen in Python-Backend-Entwicklung, SQL-Datenverarbeitung, Odoo-Workflows, Tests, Debugging und Support für Live-Projekte aufgebaut.",
    skillKicker: "04 · Kompetenzen",
    skillTitle:
      "Technische Kompetenz für Daten, KI und Softwareentwicklung.",
    education: "Ausbildung",
    edu1: "M.Sc. Data Science · TU Dortmund University · 2026–2028 (voraussichtlich)",
    edu2:
      "B.E. Computer Engineering · Government Engineering College, Rajkot · 2020–2024",
    language: "Sprachen",
    langText:
      "Englisch C1 · Deutsch A2 (aktiv im Aufbau) · Gujarati Muttersprache",
    contactKicker: "05 · Kontakt",
    contactTitle: "Lassen Sie uns etwas Nützliches entwickeln.",
    contactText:
      "Ich suche eine Werkstudentenstelle, in der ich meine Erfahrung mit Python einbringen und mich in Data Science, Machine Learning und KI weiterentwickeln kann.",
    email: "E-Mail senden",
    linkedin: "LinkedIn",
    github: "GitHub",
    footer:
      "Binal Dave · Dortmund, Deutschland · Offen für Werkstudentenstellen",
  },
};

const projects = {
  en: [
    {
      n: "01",
      type: "Machine learning · Public",
      title: "Predictive Maintenance Analytics Platform",
      text:
        "An end-to-end machine-learning application for predicting equipment failure from industrial sensor data.",
      impact:
        "F1 0.882 · Precision 0.949 · Recall 0.824 · ROC-AUC 0.979",
      tags: [
        "Python",
        "pandas",
        "scikit-learn",
        "FastAPI",
        "Streamlit",
        "Docker",
      ],
      url: "https://github.com/Binal14/predictive-maintenance-platform",
    },

    {
      n: "02",
      type: "AI / RAG · Public",
      title: "Industrial Maintenance RAG Assistant",
      text:
        "An end-to-end RAG application for answering questions from technical manuals using grounded responses and source citations.",
      impact: "Hit Rate@5 1.00 · MRR 0.833",
      tags: [
        "Python",
        "Embeddings",
        "BM25",
        "RAG",
        "FastAPI",
        "Docker",
      ],
      url: "https://github.com/Binal14",
    },

    {
      n: "03",
      type: "Statistical modelling · Public",
      title: "BayesFlow & HMM Protein Structure Inference",
      text:
        "A simulation-based inference project combining Hidden Markov Models with neural approximation to investigate protein secondary structure.",
      impact: "Real-data F1 0.503 · Accuracy 72.43%",
      tags: [
        "Python",
        "HMM",
        "BayesFlow",
        "SBI",
        "Statistical modelling",
      ],
      url: "https://github.com/Binal14",
    },

    {
      n: "04",
      type: "CRM analytics · Professional",
      title: "Lead Prediction & Revenue Forecasting",
      text:
        "Developed a machine-learning solution using historical CRM opportunity data to estimate closing timelines and support sales forecasting and planning.",
      impact:
        "Connected historical business data with forecasting and reporting",
      tags: [
        "Python",
        "pandas",
        "PostgreSQL",
        "Machine Learning",
        "Forecasting",
      ],
    },

    {
      n: "05",
      type: "Data migration · Professional",
      title: "NetSuite to Odoo Migration Assurance",
      text:
        "Supported the migration of financial and operational data by mapping entities, validating records, reconciling values and tracing inconsistencies.",
      impact: "More than 1,000,000 records migrated and validated",
      tags: [
        "Python",
        "SQL",
        "PostgreSQL",
        "Odoo",
        "Data validation",
      ],
    },

    {
      n: "06",
      type: "Integration engineering · Professional",
      title: "Multi-System API & Automation Integrations",
      text:
        "Built REST API and webhook integrations connecting Odoo with external business platforms and developed reusable data transformation and validation workflows.",
      impact:
        "Connected finance, CRM and operational workflows across multiple systems",
      tags: [
        "Python",
        "REST APIs",
        "Webhooks",
        "ETL",
        "Automation",
      ],
    },
  ],

  de: [
    {
      n: "01",
      type: "Machine Learning · Öffentlich",
      title: "Predictive Maintenance Analytics Platform",
      text:
        "Eine End-to-End-Machine-Learning-Anwendung zur Vorhersage von Maschinenausfällen anhand industrieller Sensordaten.",
      impact:
        "F1 0,882 · Precision 0,949 · Recall 0,824 · ROC-AUC 0,979",
      tags: [
        "Python",
        "pandas",
        "scikit-learn",
        "FastAPI",
        "Streamlit",
        "Docker",
      ],
      url: "https://github.com/Binal14/predictive-maintenance-platform",
    },

    {
      n: "02",
      type: "KI / RAG · Öffentlich",
      title: "Industrial Maintenance RAG Assistant",
      text:
        "Eine End-to-End-RAG-Anwendung zur Beantwortung von Fragen aus technischen Handbüchern mit fundierten Antworten und Quellenangaben.",
      impact: "Hit Rate@5 1,00 · MRR 0,833",
      tags: [
        "Python",
        "Embeddings",
        "BM25",
        "RAG",
        "FastAPI",
        "Docker",
      ],
      url: "https://github.com/Binal14",
    },

    {
      n: "03",
      type: "Statistische Modellierung · Öffentlich",
      title: "BayesFlow & HMM Protein Structure Inference",
      text:
        "Ein Projekt zur simulationsbasierten Inferenz, das Hidden Markov Models mit neuronaler Approximation zur Untersuchung von Protein-Sekundärstrukturen kombiniert.",
      impact: "F1 auf realen Daten 0,503 · Accuracy 72,43 %",
      tags: [
        "Python",
        "HMM",
        "BayesFlow",
        "SBI",
        "Statistische Modellierung",
      ],
      url: "https://github.com/Binal14",
    },

    {
      n: "04",
      type: "CRM Analytics · Beruflich",
      title: "Lead Prediction & Revenue Forecasting",
      text:
        "Machine-Learning-Lösung auf Basis historischer CRM-Daten zur Schätzung von Abschlusszeitpunkten und Unterstützung von Sales Forecasting und Planung.",
      impact:
        "Historische Geschäftsdaten mit Forecasting und Reporting verbunden",
      tags: [
        "Python",
        "pandas",
        "PostgreSQL",
        "Machine Learning",
        "Forecasting",
      ],
    },

    {
      n: "05",
      type: "Datenmigration · Beruflich",
      title: "NetSuite-zu-Odoo Migration Assurance",
      text:
        "Unterstützung bei der Migration von Finanz- und Betriebsdaten durch Mapping, Validierung, Abgleich und Nachverfolgung von Abweichungen.",
      impact: "Mehr als 1.000.000 Datensätze migriert und validiert",
      tags: [
        "Python",
        "SQL",
        "PostgreSQL",
        "Odoo",
        "Datenvalidierung",
      ],
    },

    {
      n: "06",
      type: "Integrationsentwicklung · Beruflich",
      title: "Multi-System API & Automation Integrations",
      text:
        "REST-API- und Webhook-Integrationen zwischen Odoo und externen Geschäftssystemen sowie wiederverwendbare Workflows für Datenumwandlung und Validierung entwickelt.",
      impact:
        "Finanz-, CRM- und operative Prozesse über mehrere Systeme verbunden",
      tags: [
        "Python",
        "REST APIs",
        "Webhooks",
        "ETL",
        "Automation",
      ],
    },
  ],
};

const skills = [
  [
    "Data Science",
    "Python · pandas · NumPy · scikit-learn · XGBoost · feature engineering · model evaluation · statistics",
  ],
  [
    "Data & Databases",
    "SQL · PostgreSQL · ETL · data transformation · data modelling · data validation · reconciliation",
  ],
  [
    "AI & Knowledge Systems",
    "RAG · embeddings · semantic search · BM25 · reciprocal rank fusion · LLM APIs · citation validation",
  ],
  [
    "Backend & Engineering",
    "FastAPI · REST APIs · webhooks · pytest · Git · Docker · Docker Compose · production debugging",
  ],
  [
    "Analytics & Applications",
    "Streamlit · dashboards · KPI reporting · Matplotlib · Seaborn · Python-based analytical applications",
  ],
  [
    "ERP",
    "Odoo ORM · Accounting · CRM · Payroll · Manufacturing · Inventory · eSign · Website · migrations",
  ],
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const ps = projects[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main>
      <header className="nav-shell">
        <a
          className="brand"
          href="#top"
          aria-label="Binal Dave home"
        >
          Binal Dave
        </a>

        <nav aria-label="Primary navigation">
          {["about", "work", "experience", "skills", "contact"].map(
            (id, i) => (
              <a key={id} href={`#${id}`}>
                {t.nav[i]}
              </a>
            )
          )}
        </nav>

        <button
          className="lang"
          onClick={() =>
            setLang(lang === "en" ? "de" : "en")
          }
          aria-label="Switch language"
        >
          {t.switchLabel}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>

            <h1>
              {t.headlineA} <em>{t.headlineB}</em>{" "}
              {t.headlineC}
            </h1>

            <p className="hero-intro">{t.intro}</p>

            <div className="hero-actions">
              <a
                className="button primary"
                href="#work"
              >
                {t.viewWork} <span>↘</span>
              </a>

              <a
                className="button secondary"
                href="/Binal_Dave_CV.pdf"
                download
              >
                {t.download} <span>↓</span>
              </a>
            </div>
          </div>

          <aside className="hero-profile">
            <div className="portrait-frame">
              <img
                src="/binal-dave.jpeg"
                alt="Binal Dave at TU Dortmund University"
              />
            </div>

            <div className="availability">
              <span className="signal" />

              <p>{t.status}</p>

              <small>{t.based}</small>
            </div>
          </aside>
        </div>

        <div className="proof-grid">
          {t.proof.map(([value, label]) => (
            <div className="proof" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-intro">
          <p className="kicker">{t.aboutKicker}</p>

          <h2>{t.aboutTitle}</h2>

          <p>{t.aboutText}</p>
        </div>

        <div className="dual-path">
          <article>
            <span className="path-icon">DS</span>

            <h3>{t.pathA}</h3>

            <p>{t.pathAText}</p>
          </article>

          <article>
            <span className="path-icon">PE</span>

            <h3>{t.pathB}</h3>

            <p>{t.pathBText}</p>
          </article>
        </div>
      </section>

      <section
        className="section work-section"
        id="work"
      >
        <div className="section-intro horizontal">
          <div>
            <p className="kicker">{t.workKicker}</p>

            <h2>{t.workTitle}</h2>
          </div>

          <p>{t.workLead}</p>
        </div>

        <div className="projects">
          {ps.map((p, i) => (
            <article
              className={
                i === 0
                  ? "project featured"
                  : "project"
              }
              key={p.n}
            >
              <div className="project-top">
                <span>{p.n}</span>

                <small>{p.type}</small>
              </div>

              <h3>{p.title}</h3>

              <p>{p.text}</p>

              <div className="impact">
                {p.impact}
              </div>

              <div className="tags">
                {p.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={p.url || "#experience"}
                target={
                  p.url ? "_blank" : undefined
                }
                rel={
                  p.url
                    ? "noreferrer"
                    : undefined
                }
              >
                {p.url
                  ? t.source
                  : t.privateLabel}{" "}
                <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section"
        id="experience"
      >
        <div className="section-intro">
          <p className="kicker">
            {t.expKicker}
          </p>

          <h2>{t.expTitle}</h2>
        </div>

        <div className="timeline">
          <article>
            <span className="timeline-dot" />

            <div className="timeline-date">
              {t.dates}
            </div>

            <div>
              <h3>{t.role}</h3>

              <h4>{t.company}</h4>

              <p>{t.roleText}</p>
            </div>
          </article>

          <article>
            <span className="timeline-dot" />

            <div className="timeline-date">
              {t.traineeDates}
            </div>

            <div>
              <h3>{t.trainee}</h3>

              <h4>{t.company}</h4>

              <p>{t.traineeText}</p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="section skill-section"
        id="skills"
      >
        <div className="section-intro">
          <p className="kicker">
            {t.skillKicker}
          </p>

          <h2>{t.skillTitle}</h2>
        </div>

        <div className="skill-list">
          {skills.map(([name, items], i) => (
            <div key={name}>
              <span>
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3>{name}</h3>

              <p>{items}</p>
            </div>
          ))}
        </div>

        <div className="education-grid">
          <div>
            <p className="kicker">
              {t.education}
            </p>

            <p>{t.edu1}</p>

            <p>{t.edu2}</p>
          </div>

          <div>
            <p className="kicker">
              {t.language}
            </p>

            <p>{t.langText}</p>
          </div>
        </div>
      </section>

      <section
        className="contact"
        id="contact"
      >
        <p className="kicker">
          {t.contactKicker}
        </p>

        <h2>{t.contactTitle}</h2>

        <p>{t.contactText}</p>

        <div className="contact-links">
          <a href="mailto:binaldave23@gmail.com">
            {t.email} <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/binal-dave-25993b305"
            target="_blank"
            rel="noreferrer"
          >
            {t.linkedin} <span>↗</span>
          </a>

          <a
            href="https://github.com/Binal14"
            target="_blank"
            rel="noreferrer"
          >
            {t.github} <span>↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a
          className="brand"
          href="#top"
        >
          Binal Dave
        </a>

        <p>{t.footer}</p>

        <span>© 2026</span>
      </footer>
    </main>
  );
}
