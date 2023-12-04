import './Section.css';

const Section = ({ title, children }) => (
  <section className="section">
    <h2 className="section-heading">{title}</h2>
    {children}
  </section>
);

export default Section;
