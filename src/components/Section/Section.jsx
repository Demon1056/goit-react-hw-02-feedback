import PropTypes from 'prop-types'; // ES6
export const Section = ({ tittle, children }) => {
  return (
    <div>
      {' '}
      <h2>{tittle}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  tittle: PropTypes.string,
};
