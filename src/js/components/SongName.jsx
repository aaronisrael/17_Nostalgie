import React, {PropTypes} from 'react';

import DisplaySongName from './DisplaySongName';

const SongName = songCounter => {

  const choseName = ({songCounter}) => {
    let title;
    switch (songCounter) {
    case 1:
      title = `Nico - These Days`;
      break;
    case 2:
      title = `Nico - All Tomorrows parties`;
      break;
    case 3:
      title = `Nice & The Velvet Underground - I'll be your mirror`;
      break;
    case 4:
      title = `Nico - Prelude`;
      break;
    case 5:
      title = `Nico - Afraid`;
      break;
    case 6:
      title = `Nico - Driving Me Backwards`;
      break;
    }

    return title;
  };

  return (
    <DisplaySongName title={choseName(songCounter)} />
  );
};

SongName.propTypes = {
  songCounter: PropTypes.number
};
SongName.defaultProps = {
  songCounter: 0
};

export default SongName;
