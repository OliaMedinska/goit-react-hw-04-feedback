import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul>
      <li className="statistics-item">Good: {good}</li>
      <li className="statistics-item">Neutral: {neutral}</li>
      <li className="statistics-item">Bad: {bad}</li>
      <li className="statistics-item">Total: {total}</li>
      <li className="statistics-item">Positive feedback: {positiveFeedback}</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};

export default Statistics;
