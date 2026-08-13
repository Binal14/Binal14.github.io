"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "de";

const copy = {
  en: {
    nav: ["About", "Work", "Experience", "Skills", "Contact"],
    switchLabel: "Deutsch",
    eyebrow: "M.Sc. Data Science · Python / Odoo Engineer",
    headlineA: "I build systems that turn",
    headlineB: "complex data",
    headlineC: "into decisions.",
    intro:
      "Software engineer and Data Science student combining production Python, ERP expertise, machine learning, and business understanding.",
    viewWork: "Explore my work",
    download: "Download CV",
    status: "Open to working-student roles · up to 20 hrs/week",
    based: "Based in Dortmund, Germany",
    proof: [
      ["2+ years", "Production development"],
      ["1M+", "Migration records validated"],
      ["4", "External systems integrated"],
      ["99.2%", "Maintenance model accuracy"],
    ],
    aboutKicker: "01 · About",
    aboutTitle: "Engineering depth. Analytical perspective.",
    aboutText:
      "I’m pursuing an M.Sc. in Data Science at TU Dortmund after two years building business-critical Odoo and Python solutions. My strength is the space between models and real operations: preparing trustworthy data, building maintainable systems, and communicating results in business terms.",
    pathA: "Data Science & Analytics",
    pathAText:
      "Predictive modelling, statistical analysis, feature engineering, model evaluation, dashboards, and decision-ready reporting.",
    pathB: "Python & ERP Engineering",
    pathBText:
      "Odoo modules, REST integrations, accounting workflows, migrations, automated testing, OWL.js, QWeb, and production support.",
    workKicker: "02 · Selected work",
    workTitle: "From raw records to useful outcomes.",
    workLead:
      "A selection of professional and independent work across machine learning, analytics, ERP, and integrations.",
    caseStudy: "Case study",
    source: "View source",
    privateLabel: "Professional project",
    expKicker: "03 · Experience",
    expTitle: "Built in production, not only notebooks.",
    role: "Full Stack Developer (Python / Odoo)",
    company: "Silent Infotech Pvt. Ltd.",
    dates: "Jul 2024 – Feb 2026 · Ahmedabad, India",
    roleText:
      "Delivered production applications across CRM, accounting, payroll, inventory, manufacturing, eSign, websites, reporting, integrations, and ERP migration. Partnered with project managers and business users, supported releases, and received the Star Performance Award in April 2025.",
    trainee: "Full Stack Developer — Trainee",
    traineeDates: "Jan 2024 – Jul 2024",
    traineeText:
      "Built a foundation in Python backend development, SQL data handling, Odoo workflows, testing, debugging, and live-project support.",
    skillKicker: "04 · Capabilities",
    skillTitle: "A practical, end-to-end toolkit.",
    education: "Education",
    edu1: "M.Sc. Data Science · TU Dortmund University · 2026–present",
    edu2: "B.E. Computer Engineering · Government Engineering College, Rajkot · 2020–2024",
    language: "Languages",
    langText: "English C1 · German A2 (actively learning) · Gujarati native",
    contactKicker: "05 · Contact",
    contactTitle: "Let’s build something useful.",
    contactText:
      "I’m looking for a working-student role where I can contribute production engineering experience while growing further in data science and machine learning.",
    email: "Email me",
    linkedin: "LinkedIn",
    github: "GitHub",
    footer: "Designed around data, systems, and measurable outcomes.",
  },
  de: {
    nav: ["Über mich", "Projekte", "Erfahrung", "Kompetenzen", "Kontakt"],
    switchLabel: "English",
    eyebrow: "M.Sc. Data Science · Python- / Odoo-Entwicklerin",
    headlineA: "Ich entwickle Systeme, die",
    headlineB: "komplexe Daten",
    headlineC: "in Entscheidungen verwandeln.",
    intro:
      "Softwareentwicklerin und Data-Science-Studentin mit Erfahrung in produktivem Python, ERP-Systemen, Machine Learning und betriebswirtschaftlichen Prozessen.",
    viewWork: "Projekte entdecken",
    download: "Lebenslauf herunterladen",
    status: "Offen für Werkstudentenstellen · bis zu 20 Std./Woche",
    based: "Dortmund, Deutschland",
    proof: [
      ["2+ Jahre", "Produktive Entwicklung"],
      ["1 Mio.+", "Validierte Migrationsdatensätze"],
      ["4", "Integrierte externe Systeme"],
      ["99,2 %", "Genauigkeit des Wartungsmodells"],
    ],
    aboutKicker: "01 · Über mich",
    aboutTitle: "Technische Tiefe. Analytische Perspektive.",
    aboutText:
      "Nach zwei Jahren in der Entwicklung geschäftskritischer Odoo- und Python-Lösungen studiere ich Data Science im Master an der TU Dortmund. Meine Stärke liegt an der Schnittstelle zwischen Modellen und realen Abläufen: verlässliche Daten aufbereiten, wartbare Systeme entwickeln und Ergebnisse verständlich vermitteln.",
    pathA: "Data Science & Analytics",
    pathAText:
      "Prädiktive Modellierung, statistische Analysen, Feature Engineering, Modellevaluation, Dashboards und entscheidungsorientiertes Reporting.",
    pathB: "Python- & ERP-Engineering",
    pathBText:
      "Odoo-Module, REST-Integrationen, Accounting-Workflows, Migrationen, automatisierte Tests, OWL.js, QWeb und Production Support.",
    workKicker: "02 · Ausgewählte Projekte",
    workTitle: "Von Rohdaten zu konkretem Nutzen.",
    workLead:
      "Eine Auswahl professioneller und eigener Arbeiten aus Machine Learning, Analytics, ERP und Systemintegration.",
    caseStudy: "Projekt ansehen",
    source: "Quellcode ansehen",
    privateLabel: "Berufliches Projekt",
    expKicker: "03 · Erfahrung",
    expTitle: "Produktiver Einsatz – nicht nur Notebooks.",
    role: "Full Stack Developer (Python / Odoo)",
    company: "Silent Infotech Pvt. Ltd.",
    dates: "Jul 2024 – Feb 2026 · Ahmedabad, Indien",
    roleText:
      "Produktive Anwendungen für CRM, Accounting, Payroll, Inventory, Manufacturing, eSign, Websites, Reporting, Integrationen und ERP-Migrationen umgesetzt. Enge Zusammenarbeit mit Projektleitung und Fachbereichen; Star Performance Award im April 2025.",
    trainee: "Full Stack Developer — Trainee",
    traineeDates: "Jan 2024 – Jul 2024",
    traineeText:
      "Grundlagen in Python-Backend-Entwicklung, SQL-Datenverarbeitung, Odoo-Workflows, Tests, Debugging und Support für Live-Projekte aufgebaut.",
    skillKicker: "04 · Kompetenzen",
    skillTitle: "Ein praxisnahes End-to-End-Toolkit.",
    education: "Ausbildung",
    edu1: "M.Sc. Data Science · TU Dortmund University · 2026–heute",
    edu2: "B.E. Computer Engineering · Government Engineering College, Rajkot · 2020–2024",
    language: "Sprachen",
    langText: "Englisch C1 · Deutsch A2 (aktiv im Aufbau) · Gujarati Muttersprache",
    contactKicker: "05 · Kontakt",
    contactTitle: "Lassen Sie uns etwas Nützliches entwickeln.",
    contactText:
      "Ich suche eine Werkstudentenstelle, in der ich meine Erfahrung aus der produktiven Softwareentwicklung einbringen und mich in Data Science und Machine Learning weiterentwickeln kann.",
    email: "E-Mail senden",
    linkedin: "LinkedIn",
    github: "GitHub",
    footer: "Entwickelt rund um Daten, Systeme und messbare Ergebnisse.",
  },
};

const projects = {
  en: [
    {
      n: "01",
      type: "Machine learning · Public",
      title: "Predictive Maintenance Intelligence Platform",
      text: "End-to-end machine-failure prediction with feature engineering, FastAPI, Streamlit, SHAP explanations, and Docker.",
      impact: "99.2% accuracy · 94.8% precision · 97.2% ROC-AUC",
      tags: ["Python", "scikit-learn", "XGBoost", "SHAP", "FastAPI"],
      url: "https://github.com/Binal14/predictive-maintenance-platform",
    },
    {
      n: "02",
      type: "CRM analytics · Professional",
      title: "Lead Prediction & Revenue Forecasting",
      text: "Predicted lead-closing dates and sales-cycle duration, then translated outputs into amortised revenue forecasts and margin dashboards.",
      impact: "Connected model outputs to budgeting and resource planning",
      tags: ["Python", "pandas", "PostgreSQL", "Forecasting", "Dashboards"],
    },
    {
      n: "03",
      type: "Statistical analysis · Public",
      title: "Shipping Promise Reliability",
      text: "Analysed approximately 180,000 supply-chain orders and used ANOVA and Tukey HSD to identify where delivery promises misled customers.",
      impact: "Found Second Class under-delivered by nearly 2 days on average",
      tags: ["pandas", "SciPy", "statsmodels", "Matplotlib", "Seaborn"],
      url: "https://github.com/Binal14/Shipping-Promise-Reliability-Analysis-DataCo-Supply-Chain",
    },
    {
      n: "04",
      type: "Data migration · Professional",
      title: "NetSuite to Odoo Migration Assurance",
      text: "Mapped accounting and manufacturing entities, reconciled yearly and monthly values, and traced exact mismatches through external identifiers.",
      impact: "Validated more than 1,000,000 migrated records",
      tags: ["Python", "SQL", "Odoo", "NetSuite", "Reconciliation"],
    },
    {
      n: "05",
      type: "Platform engineering · Professional",
      title: "Reusable Multi-System Integrations",
      text: "Built reusable mapping, transformation, validation, and error-handling components for finance and operations platforms.",
      impact: "Integrated Bill.com, ClickUp, Clover, and QuickBooks",
      tags: ["REST APIs", "Python", "Multi-tenant", "ETL", "Automation"],
    },
  ],
  de: [
    {
      n: "01",
      type: "Machine Learning · Öffentlich",
      title: "Predictive Maintenance Intelligence Platform",
      text: "End-to-End-Ausfallprognose mit Feature Engineering, FastAPI, Streamlit, SHAP-Erklärungen und Docker.",
      impact: "99,2 % Accuracy · 94,8 % Precision · 97,2 % ROC-AUC",
      tags: ["Python", "scikit-learn", "XGBoost", "SHAP", "FastAPI"],
      url: "https://github.com/Binal14/predictive-maintenance-platform",
    },
    {
      n: "02",
      type: "CRM Analytics · Beruflich",
      title: "Lead Prediction & Revenue Forecasting",
      text: "Prognose von Lead-Abschlussdaten und Sales-Cycle-Dauer; Überführung in amortisierte Umsatzprognosen und Margin-Dashboards.",
      impact: "Modellergebnisse mit Budget- und Ressourcenplanung verbunden",
      tags: ["Python", "pandas", "PostgreSQL", "Forecasting", "Dashboards"],
    },
    {
      n: "03",
      type: "Statistische Analyse · Öffentlich",
      title: "Shipping Promise Reliability",
      text: "Rund 180.000 Supply-Chain-Aufträge analysiert und mit ANOVA sowie Tukey HSD irreführende Lieferzusagen identifiziert.",
      impact: "Second Class verfehlte Zusagen im Mittel um fast 2 Tage",
      tags: ["pandas", "SciPy", "statsmodels", "Matplotlib", "Seaborn"],
      url: "https://github.com/Binal14/Shipping-Promise-Reliability-Analysis-DataCo-Supply-Chain",
    },
    {
      n: "04",
      type: "Datenmigration · Beruflich",
      title: "NetSuite-zu-Odoo Migration Assurance",
      text: "Accounting- und Manufacturing-Entitäten gemappt, Jahres- und Monatswerte abgeglichen und Abweichungen über externe IDs zurückverfolgt.",
      impact: "Mehr als 1.000.000 migrierte Datensätze validiert",
      tags: ["Python", "SQL", "Odoo", "NetSuite", "Reconciliation"],
    },
    {
      n: "05",
      type: "Platform Engineering · Beruflich",
      title: "Wiederverwendbare Systemintegrationen",
      text: "Komponenten für Mapping, Transformation, Validierung und Fehlerbehandlung zwischen Finanz- und Operationssystemen entwickelt.",
      impact: "Bill.com, ClickUp, Clover und QuickBooks integriert",
      tags: ["REST APIs", "Python", "Multi-tenant", "ETL", "Automation"],
    },
  ],
};

const skills = [
  ["Data Science", "Python · pandas · NumPy · scikit-learn · XGBoost · statistics · feature engineering · model evaluation"],
  ["Data & Backend", "SQL · PostgreSQL · ETL · FastAPI · REST APIs · pytest · data validation · reconciliation"],
  ["Odoo / ERP", "Odoo ORM · Accounting · CRM · Payroll · Manufacturing · Inventory · eSign · migrations"],
  ["Frontend & Reporting", "JavaScript · OWL.js · XML · QWeb · dashboards · financial and operational reporting"],
  ["Engineering", "Git · Linux · Docker · debugging · documentation · deployment · production support"],
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
        <a className="brand" href="#top" aria-label="Binal Dave home">BD<span>.</span></a>
        <nav aria-label="Primary navigation">
          {["about", "work", "experience", "skills", "contact"].map((id, i) => (
            <a key={id} href={`#${id}`}>{t.nav[i]}</a>
          ))}
        </nav>
        <button className="lang" onClick={() => setLang(lang === "en" ? "de" : "en")} aria-label="Switch language">
          {t.switchLabel}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.headlineA} <em>{t.headlineB}</em> {t.headlineC}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">{t.viewWork} <span>↘</span></a>
              <a className="button secondary" href="/Binal_Dave_CV.pdf" download>{t.download} <span>↓</span></a>
            </div>
          </div>
          <aside className="availability">
            <span className="signal" />
            <p>{t.status}</p>
            <small>{t.based}</small>
          </aside>
        </div>
        <div className="proof-grid">
          {t.proof.map(([value, label]) => (
            <div className="proof" key={label}><strong>{value}</strong><span>{label}</span></div>
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
          <article><span className="path-icon">DS</span><h3>{t.pathA}</h3><p>{t.pathAText}</p></article>
          <article><span className="path-icon">PE</span><h3>{t.pathB}</h3><p>{t.pathBText}</p></article>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-intro horizontal">
          <div><p className="kicker">{t.workKicker}</p><h2>{t.workTitle}</h2></div>
          <p>{t.workLead}</p>
        </div>
        <div className="projects">
          {ps.map((p, i) => (
            <article className={i === 0 ? "project featured" : "project"} key={p.n}>
              <div className="project-top"><span>{p.n}</span><small>{p.type}</small></div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="impact">{p.impact}</div>
              <div className="tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a href={p.url || "#experience"} target={p.url ? "_blank" : undefined} rel={p.url ? "noreferrer" : undefined}>
                {p.url ? t.source : t.privateLabel} <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-intro"><p className="kicker">{t.expKicker}</p><h2>{t.expTitle}</h2></div>
        <div className="timeline">
          <article>
            <span className="timeline-dot" />
            <div className="timeline-date">{t.dates}</div>
            <div><h3>{t.role}</h3><h4>{t.company}</h4><p>{t.roleText}</p></div>
          </article>
          <article>
            <span className="timeline-dot" />
            <div className="timeline-date">{t.traineeDates}</div>
            <div><h3>{t.trainee}</h3><h4>{t.company}</h4><p>{t.traineeText}</p></div>
          </article>
        </div>
      </section>

      <section className="section skill-section" id="skills">
        <div className="section-intro"><p className="kicker">{t.skillKicker}</p><h2>{t.skillTitle}</h2></div>
        <div className="skill-list">
          {skills.map(([name, items], i) => <div key={name}><span>0{i + 1}</span><h3>{name}</h3><p>{items}</p></div>)}
        </div>
        <div className="education-grid">
          <div><p className="kicker">{t.education}</p><p>{t.edu1}</p><p>{t.edu2}</p></div>
          <div><p className="kicker">{t.language}</p><p>{t.langText}</p></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="kicker">{t.contactKicker}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <div className="contact-links">
          <a href="mailto:binaldave23@gmail.com">{t.email} <span>↗</span></a>
          <a href="https://www.linkedin.com/in/binal-dave-25993b305" target="_blank" rel="noreferrer">{t.linkedin} <span>↗</span></a>
          <a href="https://github.com/Binal14" target="_blank" rel="noreferrer">{t.github} <span>↗</span></a>
        </div>
      </section>

      <footer><a className="brand" href="#top">BD<span>.</span></a><p>{t.footer}</p><span>© 2026</span></footer>
    </main>
  );
}

