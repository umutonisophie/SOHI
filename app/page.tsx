// "use client";

// export default function Home() {
//   return (
//     <main>
//       <section className="hero">
//         <div className="hero-content">
//           <p className="eyebrow">SOHI CYBERSECURITY SOLUTIONS</p>

//           <h1>
//             Secure Your Digital World.
//             <span> Build With Confidence.</span>
//           </h1>

//           <p className="hero-text">
//             SOHI helps businesses protect their digital assets and build
//             powerful, modern websites that support growth.
//           </p>

//           <div className="hero-buttons">
//             <a href="#services" className="btn btn-primary">
//               Explore Our Services
//             </a>

//             <a href="#contact" className="btn btn-secondary">
//               Talk to Us
//             </a>
//           </div>
//         </div>

//         <div className="hero-visual">
//           <div className="glow"></div>

//           <div className="security-card card-one">
//             <span>:closed_lock_with_key:</span>
//             <p>Cybersecurity</p>
//           </div>

//           <div className="security-card card-two">
//             <span>:globe_with_meridians:</span>
//             <p>Web Development</p>
//           </div>

//           <div className="hero-shield">
//             <span>✦</span>
//           </div>
//         </div>
//       </section>

//       <section className="intro" id="services">
//         <p className="section-tag">WHAT WE DO</p>

//         <h2>Security and technology built around your business.</h2>

//         <p>
//           We combine cybersecurity expertise with modern web development to
//           help businesses build, protect, and grow their digital presence.
//         </p>
//       </section>
//     </main>
//   );
// }

"use client";

const services = [
  {
    number: "01",
    icon: ":shield:",
    title: "Protect Companies & Institutions",
    text: "We help protect businesses and institutions from cyber attacks and digital threats.",
  },
  {
    number: "02",
    icon: ":satellite_antenna:",
    title: "Monitor Threats",
    text: "We monitor suspicious activity and emerging threats to help you respond quickly.",
  },
  {
    number: "03",
    icon: ":closed_lock_with_key:",
    title: "Keep Systems Secure",
    text: "We help keep systems, accounts, and digital environments secure and resilient.",
  },
  {
    number: "04",
    icon: ":mag:",
    title: "Ethical Security Testing",
    text: "With proper authorization, we legally test systems to find weaknesses before real attackers do.",
  },
  {
    number: "05",
    icon: ":computer:",
    title: "Build Secure Systems",
    text: "We build secure digital systems with security considered from the beginning.",
  },
  {
    number: "06",
    icon: ":globe_with_meridians:",
    title: "Secure Networks & Software",
    text: "We design and strengthen networks and software to help prevent cyber threats.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <div className="brand-logo">
            <div className="brand-star">✦</div>
          </div>

          <div>
            <h2>SOHI</h2>
            <p>CYBERSECURITY SOLUTIONS</p>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Talk to Us
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">SOHI CYBERSECURITY SOLUTIONS</p>

          <h1>
            Secure Your
            <br />
            Digital World.
            <span>
              <br />
              Build With
              <br />
              Confidence.
            </span>
          </h1>

          <p className="hero-text">
            SOHI helps businesses and institutions protect their digital assets
            and build secure, modern digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Explore Our Services
              <span>→</span>
            </a>

            <a href="#contact" className="btn btn-secondary">
              Talk to Us
            </a>
          </div>
        </div>

        {/* LAPTOP HERO */}
        <div className="laptop-side">
          <div className="tech-grid"></div>

          <div className="hero-laptop">
            <div className="laptop-screen">
              <div className="screen-top">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <p>SOHI SECURITY TERMINAL</p>
              </div>

              <div className="code-layout">
                <div className="code-lines">
                  <span>01&nbsp; system.scan()</span>
                  <span>02&nbsp; threat_monitor.active</span>
                  <span>03&nbsp; firewall.status = secure</span>
                  <span>04&nbsp; network.check()</span>
                  <span>05&nbsp; vulnerabilities: 0</span>
                  <span>06&nbsp; encryption.enabled = true</span>
                </div>

                <div className="screen-shield">
                  <div className="lock">:lock:</div>
                  <p>SYSTEM SECURE</p>
                </div>
              </div>
            </div>

            <div className="laptop-base"></div>
          </div>

          <div className="security-chip chip-one">
            <span>:closed_lock_with_key:</span>
            <div>
              <strong>Cybersecurity</strong>
              <small>Protect. Monitor. Secure.</small>
            </div>
          </div>

          <div className="security-chip chip-two">
            <span>:computer:</span>
            <div>
              <strong>Secure Development</strong>
              <small>Built with security in mind.</small>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <p>Helping businesses and institutions stay secure</p>

        <div className="trust-items">
          <span>Businesses</span>
          <span>Institutions</span>
          <span>Networks</span>
          <span>Systems</span>
          <span>Software</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="section-heading">
          <p className="section-tag">WHAT WE DO</p>
          <h2>Security and technology built around your business.</h2>
          <p>
            We help organizations understand their security, reduce digital
            risks, and build technology they can trust.
          </p>
        </div>

        <div className="quick-cards">
          <div className="quick-card">
            <div className="quick-icon">:shield:</div>
            <h3>Protect</h3>
            <p>Strengthen your business against cyber threats.</p>
          </div>

          <div className="quick-card">
            <div className="quick-icon">◉</div>
            <h3>Monitor</h3>
            <p>Keep an eye on threats and suspicious activity.</p>
          </div>

          <div className="quick-card">
            <div className="quick-icon">:lock:</div>
            <h3>Secure</h3>
            <p>Build safer systems, networks, and digital environments.</p>
          </div>

          <div className="quick-card">
            <div className="quick-icon">&lt;/&gt;</div>
            <h3>Build</h3>
            <p>Create modern and secure digital solutions.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="section-heading dark-heading">
          <p className="section-tag">OUR SERVICES</p>
          <h2>How SOHI helps you stay ahead.</h2>
          <p>
            Practical cybersecurity and secure technology solutions designed
            around your organization.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span className="service-number">{service.number}</span>
                <div className="service-icon">{service.icon}</div>
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <span className="service-arrow">:arrow_upper_right:</span>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="security-cta">
        <div>
          <p className="section-tag">LET'S SECURE YOUR BUSINESS</p>
          <h2>Security should be proactive, not an afterthought.</h2>
        </div>

        <a href="#contact" className="btn btn-primary">
          Talk to SOHI <span>→</span>
        </a>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <p className="section-tag">CONTACT SOHI</p>
          <h2>Let&apos;s Talk.</h2>
          <p>
            Reach out to us. We are here to help you protect your business and
            build secure digital solutions.
          </p>
        </div>

        <div className="contact-grid">
          <a
            className="contact-card"
            href="https://wa.me/250796156181"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-icon">◉</div>
            <div>
              <span>WhatsApp</span>
              <strong>+250 796 156 181</strong>
              <strong>+250 798 776 559</strong>
            </div>
          </a>

          <a
            className="contact-card"
            href="mailto:umutonisophiee@gmail.com"
          >
            <div className="contact-icon">:email:</div>
            <div>
              <span>Email</span>
              <strong>umutonisophiee@gmail.com</strong>
              <strong>aanualitheuwayo@gmail.com</strong>
            </div>
          </a>

          <div className="contact-card">
            <div className="contact-icon">in</div>
            <div>
              <span>LinkedIn</span>
              <strong>Sophie Umutoni</strong>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">◎</div>
            <div>
              <span>Instagram</span>
              <strong>s_sohi.i</strong>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">♪</div>
            <div>
              <span>TikTok</span>
              <strong>sohi_group</strong>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <div className="brand-logo small-logo">
            <div className="brand-star">✦</div>
          </div>
          <h2>SOHI</h2>
        </div>

        <p>At SOHI, your business&apos;s security is our priority. :handshake:</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}