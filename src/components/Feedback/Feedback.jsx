import PropTypes from 'prop-types';
import './Feedback.css';

const Feedback = ({ onLeaveFeedback, options }) => {
    const optionsKeys = Object.keys(options); 

    return (
         <ul className='feedback-list'>
            {optionsKeys.map((option) => 
                    (<li key={option}>
                        <button
                            type='button'
                            className='feedback-button'
                            onClick={() => onLeaveFeedback(option)}>
                            {option}
                        </button>
                    </li>)
            )}
        </ul>
    )
}

Feedback.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    })
};

export default Feedback;