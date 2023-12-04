import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ title, children }) => (
    <section className='section'>
        <h2 className='section-heading'>{title}</h2>
        {children}
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Section;
