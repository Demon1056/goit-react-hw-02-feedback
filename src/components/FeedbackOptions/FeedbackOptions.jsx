import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
export const FeedbackOptions = ({ options, onLiveFeedBack }) => {
  return (
    <>
      <Button option={options[0]} onLiveFeedback={onLiveFeedBack}>
        Good
      </Button>
      <Button option={options[1]} onLiveFeedback={onLiveFeedBack}>
        Neutral
      </Button>
      <Button option={options[2]} onLiveFeedback={onLiveFeedBack}>
        Bad
      </Button>
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLiveFeedBack: PropTypes.func.isRequired,
};
