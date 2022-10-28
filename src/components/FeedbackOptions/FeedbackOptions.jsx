import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ optionsArr, onLeaveFeedback }) => {
  return (
    <div>
      {optionsArr.map(item => (
        <button
          className={css.button}
          key={item}
          name={item}
          type="button"
          onClick={event => onLeaveFeedback(event)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.protoTypes = {
  optionsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
