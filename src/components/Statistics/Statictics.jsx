import PropTypes from 'prop-types';
import { Message } from 'components/Message/Message';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <ul>
      <li>Good {good}</li>
      <li>Neutral {neutral} </li>
      <li>Bad {bad}</li>
      <li>Total {total}</li>
      <li>Positive Feedback {positivePercentage || 0} %</li>
    </ul>
  ) : (
    <Message />
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
