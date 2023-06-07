import PropTypes from 'prop-types';

const Inputitem = ({ item, classN, onclick }) => (
  <button
    className={classN}
    type="button"
    onClick={(e) => {
      onclick(e.target.textContent);
    }}
  >
    {item}
  </button>
);

Inputitem.defaultProps = {
  onclick: () => {},
};

Inputitem.propTypes = {
  item: PropTypes.string.isRequired,
  classN: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};
export default Inputitem;
