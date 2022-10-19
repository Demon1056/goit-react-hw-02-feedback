export const Button = ({ option, onLiveFeedback, children }) => {
  return (
    <button type="button" name={option} onClick={onLiveFeedback}>
      {children}
    </button>
  );
};
