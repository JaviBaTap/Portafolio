const linkStyle = { color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }

const ContactLink = ({ href, icon, children }) => (
  <a href={href} style={linkStyle}>
    {icon} {children}
  </a>
)

export default ContactLink