"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import AOSInit from "@/components/AOSInit"
import { Moon, Sun } from "lucide-react"

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function HomePage() {
const [theme, setTheme] = useState<"light" | "dark">("light")

// Same theme system used by the dashboard
useEffect(() => {
const saved = window.localStorage.getItem("riskopt-theme")


if (saved === "dark" || saved === "light") {
  setTheme(saved)
}

}, [])

useEffect(() => {
document.documentElement.classList.toggle("dark", theme === "dark")
document.documentElement.style.colorScheme = theme
window.localStorage.setItem("riskopt-theme", theme)
}, [theme])

return (
<> <AOSInit />

  <main className="landing-page">
    {/* Navbar */}
    <nav className="landing-navbar">
      <div className="landing-logo">
        <span>RISK</span>OPT
      </div>

      <div className="landing-nav-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>

        {/* Theme Toggle */}
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={() =>
            setTheme((t) => (t === "light" ? "dark" : "light"))
          }
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon size={18} strokeWidth={2} />
          ) : (
            <Sun size={18} strokeWidth={2} />
          )}
        </button>

        <Link href="/dashboard" className="nav-dashboard-btn">
          Launch Dashboard
        </Link>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-content">

        <div
          className="hero-badge"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          AI-POWERED CYBER RISK PLATFORM
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          Quantify Your
          <span> Cyber Risk.</span>
          <br />
          Optimize Your Security.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          RiskOpt continuously analyzes your cybersecurity risk,
          quantifies potential threats, and helps organizations make
          smarter security investment decisions.
        </p>

        <div
          className="hero-buttons"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <Link href="/dashboard" className="primary-btn">
            Get Started →
          </Link>

          <a href="#how-it-works" className="secondary-btn">
            Explore Platform
          </a>
        </div>

        <div
          className="hero-stats"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          <div>
            <strong>24/7</strong>
            <span>Risk Monitoring</span>
          </div>

          <div>
            <strong>AI</strong>
            <span>Risk Analysis</span>
          </div>

          <div>
            <strong>Real-Time</strong>
            <span>Threat Insights</span>
          </div>
        </div>
      </div>

      {/* Risk Visualization */}
      <div
        className="hero-visual"
        data-aos="fade-left"
        data-aos-delay="250"
        data-aos-duration="1200"
      >
        <div className="landing-risk-card">

          <div className="landing-risk-header">
            <div>
              <span className="landing-risk-label">
                CYBER RISK SCORE
              </span>
              <h3>Security Overview</h3>
            </div>

            <span className="landing-live">
              <span></span>
              LIVE
            </span>
          </div>

          <div className="landing-risk-main">
            <div className="landing-score">
              <span className="landing-score-number">72</span>
              <span className="landing-score-total">/100</span>
            </div>

            <div className="landing-risk-info">
              <span>Current Risk Level</span>
              <strong>Moderate</strong>
              <p>Your security posture is being monitored continuously.</p>
            </div>
          </div>

          <div className="landing-risk-metrics">

            <div className="landing-metric">
              <div className="landing-metric-top">
                <span>Threat Exposure</span>
                <strong>68%</strong>
              </div>

              <div className="landing-progress">
                <span style={{ width: "68%" }}></span>
              </div>
            </div>

            <div className="landing-metric">
              <div className="landing-metric-top">
                <span>Vulnerability</span>
                <strong>52%</strong>
              </div>

              <div className="landing-progress">
                <span style={{ width: "52%" }}></span>
              </div>
            </div>

            <div className="landing-metric">
              <div className="landing-metric-top">
                <span>Security Posture</span>
                <strong>81%</strong>
              </div>

              <div className="landing-progress">
                <span style={{ width: "81%" }}></span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    {/* About */}
    <section id="about" className="about-section">

      <div
        className="section-label"
        data-aos="fade-down"
      >
        WHY RISKOPT
      </div>

      <h2
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Turn Cybersecurity Data Into
        <span> Actionable Decisions.</span>
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Traditional cybersecurity approaches often provide isolated
        security information. RiskOpt brings risk assessment,
        threat intelligence, analytics and security investment
        optimization together in one platform.
      </p>
    </section>

    {/* Features */}
    <section id="features" className="features-section">
      <div className="section-heading">

        <div
          className="section-label"
          data-aos="fade-down"
        >
          PLATFORM FEATURES
        </div>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Everything You Need to
          <span> Understand Your Risk</span>
        </h2>
      </div>

      <div className="features-grid">

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="feature-icon">◉</div>
          <h3>Continuous Risk Monitoring</h3>
          <p>
            Continuously monitor your cybersecurity environment
            and identify changing risk conditions.
          </p>
        </div>

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="feature-icon">⌁</div>
          <h3>AI-Powered Analysis</h3>
          <p>
            Use intelligent analysis to understand threats,
            vulnerabilities and potential business impact.
          </p>
        </div>

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="feature-icon">◈</div>
          <h3>Threat Intelligence</h3>
          <p>
            Combine threat information with organizational risk
            data to improve cybersecurity visibility.
          </p>
        </div>

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="feature-icon">↗</div>
          <h3>Investment Optimization</h3>
          <p>
            Identify where security investments can provide
            meaningful risk reduction.
          </p>
        </div>

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="feature-icon">▦</div>
          <h3>Risk Visualization</h3>
          <p>
            Transform complex cybersecurity information into
            understandable dashboards and visual insights.
          </p>
        </div>

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="feature-icon">✓</div>
          <h3>Decision Support</h3>
          <p>
            Give security teams clear information for
            data-driven cybersecurity decisions.
          </p>
        </div>

      </div>
    </section>


{/* SCANNING WORKFLOW */}
<section className="scanning-section" id="scanning">
  <div className="scanning-container">
    <div className="scanning-header" data-aos="fade-up">
      <span className="scanning-eyebrow">
        <span className="scanning-eyebrow-dot"></span>
        CYBER RISK SCANNING
      </span>

      <h2>
        Scan. Analyse.
        <span> Understand. Secure.</span>
      </h2>

      <p>
        RiskOpt helps organizations identify potential security
        weaknesses, understand cyber risks and turn technical
        findings into actionable security insights.
      </p>
    </div>

    <div className="scanning-workflow">
      <div className="scanning-step" data-aos="fade-up">
        <div className="scanning-step-number">01</div>
        <div className="scanning-step-icon">◇</div>
        <span className="scanning-step-label">TARGET</span>
        <h3>Define Your Organization</h3>
        <p>
          Enter your organization's website or assessment
          information to begin.
        </p>
      </div>

      <div className="scanning-connector"></div>

      <div className="scanning-step" data-aos="fade-up" data-aos-delay="100">
        <div className="scanning-step-number">02</div>
        <div className="scanning-step-icon">◎</div>
        <span className="scanning-step-label">SCAN</span>
        <h3>Discover Security Findings</h3>
        <p>
          Identify potential vulnerabilities and security
          weaknesses in the assessed environment.
        </p>
      </div>

      <div className="scanning-connector"></div>

      <div className="scanning-step" data-aos="fade-up" data-aos-delay="200">
        <div className="scanning-step-number">03</div>
        <div className="scanning-step-icon">◈</div>
        <span className="scanning-step-label">ANALYSE</span>
        <h3>Understand Cyber Risk</h3>
        <p>
          Review the severity and potential impact of
          identified security findings.
        </p>
      </div>

      <div className="scanning-connector"></div>

      <div className="scanning-step" data-aos="fade-up" data-aos-delay="300">
        <div className="scanning-step-number">04</div>
        <div className="scanning-step-icon">✓</div>
        <span className="scanning-step-label">INSIGHTS</span>
        <h3>Get Actionable Recommendations</h3>
        <p>
          Use prioritized insights to support security
          decisions and investment planning.
        </p>
      </div>
    </div>

    <div className="scanning-action" data-aos="fade-up">
      <div>
        <strong>Ready to assess your organization?</strong>
        <span>Explore your cyber risk with RiskOpt.</span>
      </div>

      <Link href="/dashboard" className="scanning-action-btn">
        Launch Dashboard →
      </Link>
    </div>
  </div>
</section>

    {/* COMPLIANCE REQUIREMENTS */}
    <section
      className="compliance-section"
      id="compliance"
    >
      <div className="compliance-container">

        {/* HEADER */}
        <div className="compliance-header">

          <span
            className="compliance-eyebrow"
            data-aos="fade-down"
          >
            <span className="compliance-eyebrow-dot"></span>
            COMPLIANCE AWARENESS
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Know your
            <span> compliance requirements.</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Understand the security and compliance requirements that
            may apply to your organisation before making cybersecurity
            investment decisions.
          </p>

        </div>

        {/* COMPLIANCE CARDS */}
        <div className="compliance-grid">

          {/* CARD 1 */}
          <div
            className="compliance-card"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="compliance-card-icon">
              ✓
            </div>

            <div>
              <span className="compliance-card-label">
                GOVERNANCE
              </span>

              <h3>
                Understand Requirements
              </h3>

              <p>
                Identify the security, privacy and governance
                requirements relevant to your organisation.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="compliance-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="compliance-card-icon">
              ◈
            </div>

            <div>
              <span className="compliance-card-label">
                SECURITY CONTROLS
              </span>

              <h3>
                Map Security Controls
              </h3>

              <p>
                Understand how compliance requirements can relate
                to cybersecurity controls and risk management.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="compliance-card"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="compliance-card-icon">
              ◉
            </div>

            <div>
              <span className="compliance-card-label">
                RISK ALIGNMENT
              </span>

              <h3>
                Connect Compliance & Risk
              </h3>

              <p>
                Use compliance information alongside your risk
                assessment to understand areas that may require
                attention.
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM CTA */}
        <div
          className="compliance-bottom"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <div>
            <strong>
              Make compliance part of your risk strategy.
            </strong>

            <span>
              Explore requirements before optimising your investment.
            </span>
          </div>

          <a
            href="#how-it-works"
            className="compliance-link"
          >
            See how RiskOpt works →
          </a>
        </div>

      </div>
    </section>

    {/* HOW RISKOPT WORKS */}
    <section
      className="riskopt-workflow"
      id="how-it-works"
    >

      {/* LEFT SIDE */}
      <div
        className="workflow-intro"
        data-aos="fade-right"
        data-aos-duration="1000"
      >

        <span className="workflow-eyebrow">
          <span className="workflow-eyebrow-dot"></span>
          HOW RISKOPT WORKS
        </span>

        <h2
          data-aos="fade-up"
          data-aos-delay="150"
        >
          From your data
          <br />
          to <span>smarter security</span>
          <br />
          decisions.
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="250"
        >
          RiskOpt follows a simple four-step process to understand
          your organisation, quantify cybersecurity investment and
          help you identify suitable security solutions.
        </p>

        <div
          className="workflow-summary"
          data-aos="zoom-in"
          data-aos-delay="350"
        >
          <span className="workflow-summary-dot"></span>

          <div>
            <strong>Simple 4-step workflow</strong>
            <small>
              Access → Analyse → Quantify → Optimize
            </small>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="workflow-steps">

        {/* STEP 01 */}
        <div
          className="workflow-step"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="workflow-icon workflow-purple">
            ✦
            <span>01</span>
          </div>

          <div className="workflow-content">
            <span className="workflow-step-label">
              ACCESS
            </span>

            <h3>
              Launch Dashboard
            </h3>

            <p>
              Start your RiskOpt journey by launching the dashboard.
              This is your central workspace for managing your
              organisation's cybersecurity risk and investment.
            </p>
          </div>

          <span className="workflow-background-number">
            01
          </span>
        </div>

        {/* STEP 02 */}
        <div
          className="workflow-step"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="workflow-icon workflow-blue">
            ◈
            <span>02</span>
          </div>

          <div className="workflow-content">
            <span className="workflow-step-label">
              ANALYSE
            </span>

            <h3>
              Add Organisation
            </h3>

            <p>
              Add your organisation and provide the required
              information. RiskOpt uses this information to
              understand your environment and cybersecurity risk.
            </p>
          </div>

          <span className="workflow-background-number">
            02
          </span>
        </div>

        {/* STEP 03 */}
        <div
          className="workflow-step"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="workflow-icon workflow-cyan">
            ◉
            <span>03</span>
          </div>

          <div className="workflow-content">
            <span className="workflow-step-label">
              QUANTIFY
            </span>

            <h3>
              Choose Investment
            </h3>

            <p>
              Choose your cybersecurity investment or budget.
              RiskOpt analyses your organisation's information
              and quantifies how the investment relates to your
              cybersecurity risk.
            </p>
          </div>

          <span className="workflow-background-number">
            03
          </span>
        </div>

        {/* STEP 04 */}
        <div
          className="workflow-step"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="workflow-icon workflow-green">
            ✧
            <span>04</span>
          </div>

          <div className="workflow-content">
            <span className="workflow-step-label">
              OPTIMIZE
            </span>

            <h3>
              Get Recommendations
            </h3>

            <p>
              RiskOpt studies your organisation, risk profile and
              investment priorities to provide suitable
              cybersecurity software and security-control
              recommendations.
            </p>
          </div>

          <span className="workflow-background-number">
            04
          </span>
        </div>

      </div>
    </section>



{/* CONTACT */}
<section className="contact-section" id="contact">
  <div className="contact-container">
    <div className="contact-header" data-aos="fade-up">
      <span className="contact-eyebrow">GET IN TOUCH</span>

      <h2>
        Let's Strengthen Your
        <span> Security Posture.</span>
      </h2>

      <p>
        Have questions about cyber risk assessment, compliance
        or security investment optimization? Get in touch with us.
      </p>
    </div>

    <div className="contact-grid">
      <div className="contact-info" data-aos="fade-right">
        <div className="contact-info-card">
          <div className="contact-info-icon">◈</div>
          <div>
            <span>RISK ASSESSMENT</span>
            <h3>Understand Your Cyber Risk</h3>
            <p>
              Learn how RiskOpt helps identify and quantify
              cybersecurity risks.
            </p>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon">✓</div>
          <div>
            <span>PLATFORM SUPPORT</span>
            <h3>Need Help With RiskOpt?</h3>
            <p>
              Get assistance with scanning, risk analysis
              and dashboard functionality.
            </p>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon">✦</div>
          <div>
            <span>GENERAL ENQUIRIES</span>
            <h3>Let's Talk</h3>
            <p>
              Contact our team to learn more about the platform.
            </p>
          </div>
        </div>
      </div>

      <div className="contact-form-card" data-aos="fade-left">
        <h3>Send Us a Message</h3>
        <p>Tell us how we can help.</p>

        <form onSubmit={(event) => event.preventDefault()}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-organization">Organization</label>
            <input
              id="contact-organization"
              type="text"
              placeholder="Enter your organization"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="How can we help?"
              required
            />
          </div>

          <button type="submit" className="contact-submit-btn">
            Send Message →
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


    {/* CTA */}
    <section className="cta-section">

      <div
        className="cta-content"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="section-label">READY TO BEGIN?</div>

        <h2>
          Start Managing Cyber Risk
          <span> Smarter.</span>
        </h2>

        <p>
          Explore the RiskOpt dashboard and get a complete view
          of your cybersecurity risk environment.
        </p>

        <Link href="/dashboard" className="primary-btn">
          Launch RiskOpt Dashboard →
        </Link>
      </div>

    </section>


{/* RISKOPT FOOTER */}
<footer className="riskopt-footer" id="footer">

  {/* SECTION 1: POPULAR RESOURCES */}
  <section className="riskopt-footer-resources" aria-labelledby="riskopt-resources-title">
    <div className="riskopt-footer-container">

      <div className="riskopt-footer-resource-group">
        <h2 id="riskopt-resources-title" className="riskopt-footer-heading">
          Popular Technologies
        </h2>

        <div className="riskopt-technology-grid">
          <a href="#about">Artificial Intelligence</a>
          <a href="#scanning">Cybersecurity</a>
          <a href="#insights">Big Data Analytics</a>
          <a href="#insights">Generative AI</a>
          <a href="#insights">Cloud Computing</a>
          <a href="#insights">Internet of Things (IoT)</a>
          <a href="#insights">Machine Learning</a>
          <a href="#scanning">Vulnerability Management</a>
          <a href="#how-it-works">Risk Quantification</a>
          <a href="#compliance">Security Automation</a>
        </div>
      </div>

      <div className="riskopt-footer-resource-group riskopt-footer-blogs">
        <h2 className="riskopt-footer-heading">Popular RiskOpt Insights</h2>

        <div className="riskopt-footer-blog-grid">
          <a href="#about">Understanding Cyber Risk Quantification</a>
          <a href="#scanning">A Practical Guide to Vulnerability Management</a>
          <a href="#compliance">Security Controls and Compliance Explained</a>
          <a href="#how-it-works">How AI Improves Cybersecurity Risk Assessment</a>
          <a href="#how-it-works">Optimizing Cybersecurity Investments</a>
          <a href="#insights">Protecting Organizations Through Data-Driven Risk Analysis</a>
        </div>
      </div>

    </div>
  </section>

  {/* SECTION 2: COMPANY INFORMATION */}
  <section className="riskopt-footer-company" aria-label="Company information">
    <div className="riskopt-footer-container">

      <div className="riskopt-footer-columns">

        <div className="riskopt-footer-column">
          <h2 className="riskopt-footer-heading">About RiskOpt</h2>
          <a href="#about">About the Platform</a>
          <a href="#how-it-works">How RiskOpt Works</a>
          {/* <a href="#insights">Our Capabilities</a> */}
          <a href="#about">Our Team</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="riskopt-footer-column">
          <h2 className="riskopt-footer-heading">Risk &amp; Compliance</h2>
          <a href="#scanning">Cyber Risk Assessment</a>
          <a href="#compliance">Security Controls</a>
          <a href="#compliance">Compliance Requirements</a>
          <a href="#how-it-works">Risk Quantification</a>
          <a href="#how-it-works">Investment Optimization</a>
        </div>

        <div className="riskopt-footer-column">
          <h2 className="riskopt-footer-heading">Help &amp; Support</h2>
          <a href="#insights">Platform Resources</a>
          <a href="#insights">Frequently Asked Questions</a>
          <a href="#scanning">Scanning Support</a>
          <a href="#contact">Report a Security Concern</a>
          <a href="mailto:support@riskopt.com">Contact Support</a>
        </div>

      </div>

      <div className="riskopt-footer-extras">

        <div className="riskopt-footer-extra">
          <h2 className="riskopt-footer-heading">Quick Links</h2>
          <nav className="riskopt-footer-quick-links" aria-label="Quick links">
            <Link href="/dashboard">Dashboard</Link>
            <a href="#scanning">Risk Assessment</a>
            <Link href="/dashboard">Reports &amp; Analytics</Link>
            <a href="#insights">Resources</a>
            <Link href="/dashboard">Get Started</Link>
          </nav>
        </div>

        <div className="riskopt-footer-extra">
          <h2 className="riskopt-footer-heading">Find Us On</h2>
          <div className="riskopt-footer-socials">
            
<div className="riskopt-footer-socials">
  <a
    href="https://github.com/kumkumkaushik2026/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    title="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/kumkum-kaushik-b157aa345/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    title="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    title="Instagram"
  >
    <FaInstagram />
  </a>
</div>
            {/* <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              YouTube
            </a> */}
          </div>
          <p className="riskopt-footer-social-note">
            Replace these links with your official RiskOpt profiles when available.
          </p>
        </div>

        <div className="riskopt-footer-extra riskopt-footer-reach">
          <h2 className="riskopt-footer-heading">Reach Us</h2>
          <a className="riskopt-footer-email" href="mailto:support@riskopt.com">
            <span aria-hidden="true">✉</span>
            support@riskopt.com
          </a>
          <p>Questions about cyber risk, compliance, or security investment?</p>
          <a className="riskopt-footer-contact-link" href="#contact">
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="riskopt-footer-bottom">
        <p>Copyright © 2026 RiskOpt. All Rights Reserved.</p>
        <p>Quantifying cyber risk. Optimizing security investments. Building a more resilient digital future.</p>
      </div>

    </div>
  </section>
</footer>

  </main>
</>


)
}
