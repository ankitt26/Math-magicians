import PropTypes from 'prop-types';

const Inputitem = ({ item, classN }) => (
  <button className={classN} type="button">{item}</button>
);

Inputitem.defaultProps = {
  classN: 'input-item',
};

Inputitem.propTypes = {
  item: PropTypes.string.isRequired,
  classN: PropTypes.string,
};
export default Inputitem;
