import PropTypes from 'prop-types';

export const Button = ({ option, onLiveFeedback, children }) => {
  return (
    <button type="button" name={option} onClick={onLiveFeedback}>
      {children}
    </button>
  );
};

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onLiveFeedback: PropTypes.func.isRequired,
};
