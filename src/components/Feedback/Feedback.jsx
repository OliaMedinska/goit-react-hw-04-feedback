import './Feedback.css';

const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <ul className="feedback-list">
      {options.map(option => (
        <li key={option}>
          <button
            type="button"
            className="feedback-button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Feedback;
