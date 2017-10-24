import React, {PropTypes} from 'react';
import Navitem from './Navitem';

const Navigation = ({
  navItems,
  onScroll: handleScrollItem
}) => {

  return (
    <ul>
      {navItems.map(t => {
        return (
          <Navitem
            key={t.id}
            {...t}
            onScroll={handleScrollItem}
          />
        );
      })}
    </ul>
  );

};

Navigation.propTypes = {
  navItems: PropTypes.array.isRequired,
  onScroll: PropTypes.func.isRequired
};

export default Navigation;
