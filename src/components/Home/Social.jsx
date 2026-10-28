import "./home.css";

const links = [
  {
    href: "https://www.linkedin.com/in/joeyker-mayora-avilez-3b9993265/",
    icon: "uil uil-linkedin",
    label: "LinkedIn",
    meta: "Network",
    external: true,
  },
  {
    href: "https://github.com/Joeyker-Mayora",
    icon: "uil uil-github",
    label: "GitHub",
    meta: "Code",
    external: true,
  },
  {
    href: "mailto:oswaldo_avilez@outlook.es",
    icon: "bx bxs-envelope",
    label: "Email",
    meta: "Write",
    external: false,
  },
  {
    href: "https://wa.me/1127029297",
    icon: "uil uil-whatsapp-alt",
    label: "WhatsApp",
    meta: "Message",
    external: true,
  },
];

const Social = ({ className = "" }) => {
  return (
    <div className={`home-social ${className}`.trim()}>
      {links.map(({ href, icon, label, meta, external }) => (
        <a
          key={label}
          href={href}
          className="home-social-icon"
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <span className="home-social-mark" aria-hidden="true">
            <i className={icon}></i>
          </span>
          <span className="home-social-copy">
            <span className="home-social-label">{label}</span>
            <span className="home-social-meta">{meta}</span>
          </span>
          <i className="uil uil-arrow-up-right home-social-arrow" aria-hidden="true"></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
