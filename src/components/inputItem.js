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
  classN: 'input-item',
  onclick: () => {},
};

Inputitem.propTypes = {
  item: PropTypes.string.isRequired,
  classN: PropTypes.string,
  onclick: PropTypes.func,
};
export default Inputitem;
