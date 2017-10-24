import React, {PropTypes} from 'react';

const Navitem = ({
  id,
  title,
  active,
  location,
  onScroll
}) => {

  const handleScroll = () => onScroll(id, location);

  return (
    <li
      className={active ? `tekstGroot` : `tekstKlein`}
      onScroll={handleScroll}
      >
      <p>{title}</p>
      <span className={active ? `active bolleke` : `not bolleke`}></span>
    </li>
  );

};

Navitem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  active: PropTypes.string,
  location: PropTypes.func.isRequired,
  onScroll: PropTypes.func.isRequired
};

Navitem.defaultProps = {
  id: 0,
  title: ``,
  active: ``
};

export default Navitem;
