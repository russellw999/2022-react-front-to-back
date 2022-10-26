import PropTypes from 'prop-types';

const Button = ({ children, version, type, isDisabled }) => {
  // version the css class e.g primary, secondary
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      Button
    </button>
  );
};

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
