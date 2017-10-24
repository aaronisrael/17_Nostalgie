import React, {PropTypes} from 'react';

const DisplaySongName = ({title}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

DisplaySongName.propTypes = {
  title: PropTypes.string,
};

DisplaySongName.defaultProps = {
  title: ``,
};

export default DisplaySongName;
