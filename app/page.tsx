"use client";

type IconProps = {
  size?: number;
};

const ShieldCheckIcon = ({ size = 28 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a2 2 0 0 1 2-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C15.51 3.81 18 5 20 5a2 2 0 0 1 0 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ScanIcon = ({ size = 28 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  </svg>
);

const LockIcon = ({ size = 28 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="16" r="1" />
    <rect x="3" y="10" width="18" height="12" rx="2" />
    <path d="M7 10V7a5 5 0 0 1 10 0v3" />
  </svg>
);

const CodeIcon = ({ size = 28 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
);

const CheckIcon = ({ size = 18 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const ArrowUpRightIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const services = [
  {
    number: "01",
    icon: <ShieldCheckIcon size={28} />,
    title: "Protect Companies & Institutions",
    text: "We help protect businesses and institutions from cyber attacks, vulnerabilities, and evolving digital threats.",
  },
  {
    number: "02",
    icon: <ScanIcon size={28} />,
    title: "Monitor Threats",
    text: "We monitor suspicious activity and emerging threats to help organizations identify risks and respond quickly.",
  },
  {
    number: "03",
    icon: <LockIcon size={28} />,
    title: "Keep Systems Secure",
    text: "We help keep systems, accounts, networks, and digital environments secure, resilient, and better protected.",
  },
  {
    number: "04",
    icon: <ScanIcon size={28} />,
    title: "Ethical Security Testing",
    text: "With proper authorization, we legally test systems to identify weaknesses before real attackers can exploit them.",
  },
  {
    number: "05",
    icon: <CodeIcon size={28} />,
    title: "Build Secure Systems",
    text: "We build secure digital systems with security considered from the beginning rather than added as an afterthought.",
  },
  {
    number: "06",
    icon: <ShieldCheckIcon size={28} />,
    title: "Secure Networks & Software",
    text: "We design and strengthen networks and software to reduce exposure to cyber threats and improve resilience.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <a href="#home" className="brand">
          <img
            src="/images/sohi-logo.png"
            alt="SOHI Cybersecurity Solutions"
            className="brand-image"
          />

          <div className="brand-text">
            <h2>SOHI</h2>
            <p>CYBERSECURITY SOLUTIONS</p>
          </div>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Talk to Us
        </a>
      </header>

      {/* ================= HERO ================= */}

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
            SOHI helps businesses and institutions protect their digital
            assets, reduce cyber risk, and build secure modern digital
            solutions.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Explore Our Services
              <span className="button-arrow">→</span>
            </a>

            <a href="#contact" className="btn btn-secondary">
              Talk to Us
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-icon">
              <CheckIcon size={18} />
            </div>

            <div>
              <strong>Security-first approach</strong>
              <p>Protection built around your organization.</p>
            </div>
          </div>
        </div>

        {/* REAL LAPTOP IMAGE */}

        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="laptop-frame">
            <img
              src="/images/sohi-laptop.jpg"
              alt="SOHI Cybersecurity workstation"
              className="hero-laptop-image"
            />
          </div>

          <div className="laptop-status">
            <div className="status-icon">
              <ShieldCheckIcon size={19} />
            </div>

            <div className="status-content">
              <span>Security Status</span>
              <strong>Protected</strong>
            </div>

            <div className="status-dot"></div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}

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

      {/* ================= ABOUT ================= */}

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
            <div className="quick-icon">
              <ShieldCheckIcon size={30} />
            </div>

            <h3>Protect</h3>

            <p>
              Strengthen your business against cyber threats and security
              vulnerabilities.
            </p>
          </div>

          <div className="quick-card">
            <div className="quick-icon">
              <ScanIcon size={30} />
            </div>

            <h3>Monitor</h3>

            <p>
              Keep an eye on threats, vulnerabilities, and suspicious activity.
            </p>
          </div>

          <div className="quick-card">
            <div className="quick-icon">
              <LockIcon size={30} />
            </div>

            <h3>Secure</h3>

            <p>
              Build safer systems, networks, accounts, and digital environments.
            </p>
          </div>

          <div className="quick-card">
            <div className="quick-icon">
              <CodeIcon size={30} />
            </div>

            <h3>Build</h3>

            <p>
              Create modern digital solutions with security considered from the
              beginning.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

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

              <span className="service-arrow">
                <ArrowUpRightIcon size={20} />
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="security-cta">
        <div className="cta-content">
          <p className="section-tag">LET&apos;S SECURE YOUR BUSINESS</p>

          <h2>Security should be proactive, not an afterthought.</h2>

          <p>
            Let&apos;s understand your risks, strengthen your digital
            environment, and build technology you can trust.
          </p>
        </div>

        <a href="#contact" className="btn btn-primary">
          Talk to SOHI
          <span className="button-arrow">→</span>
        </a>
      </section>

      {/* ================= CONTACT ================= */}

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
          {/* WHATSAPP */}

          <a
            className="contact-card"
            href="https://wa.me/250796156181"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-icon social-icon">
              <img src="/images/whatsapp.png" alt="WhatsApp" />
            </div>

            <div className="contact-card-content">
              <span>WhatsApp</span>

              <strong>+250 796 156 181</strong>
              <strong>+250 798 776 559</strong>
            </div>

            <ArrowUpRightIcon size={18} />
          </a>

          {/* EMAIL */}

          <a
            className="contact-card"
            href="mailto:umutonisophiee@gmail.com"
          >
            <div className="contact-icon social-icon">
              <img src="/images/email.png" alt="Email" />
            </div>

            <div className="contact-card-content">
              <span>Email</span>

              <strong>umutonisophiee@gmail.com</strong>
              <strong>aanualitheuwayo@gmail.com</strong>
            </div>

            <ArrowUpRightIcon size={18} />
          </a>

          {/* LINKEDIN */}

          <a
            className="contact-card"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-icon social-icon">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </div>

            <div className="contact-card-content">
              <span>LinkedIn</span>

              <strong>Sophie Umutoni</strong>
            </div>

            <ArrowUpRightIcon size={18} />
          </a>

          {/* INSTAGRAM */}

          <a
            className="contact-card"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-icon social-icon">
              <img src="/images/instagram.png" alt="Instagram" />
            </div>

            <div className="contact-card-content">
              <span>Instagram</span>

              <strong>s_sohi.i</strong>
            </div>

            <ArrowUpRightIcon size={18} />
          </a>

          {/* TIKTOK */}

          <a
            className="contact-card"
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-icon social-icon">
              <img src="/images/tiktok.png" alt="TikTok" />
            </div>

            <div className="contact-card-content">
              <span>TikTok</span>

              <strong>sohi_group</strong>
            </div>

            <ArrowUpRightIcon size={18} />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="footer-brand">
          <img
            src="/images/sohi-logo.png"
            alt="SOHI Cybersecurity Solutions"
            className="footer-logo"
          />

          <div>
            <h2>SOHI</h2>
            <p>CYBERSECURITY SOLUTIONS</p>
          </div>
        </div>

        <p className="footer-description">
          At SOHI, your business&apos;s security is our priority.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}