import React, {PropTypes} from 'react';

import Player from '../components/player';
import SongName from '../components/SongName';

const MusicPlayer = ({songCounter}) => {

  let path;
  switch (parseInt(songCounter)) {
  case 1:
    path = `../assets/audio/1.mp3`;
    break;
  case 2:
    path = `../assets/audio/2.mp3`;
    break;
  case 3:
    path = `../assets/audio/3.mp3`;
    break;
  case 4:
    path = `../assets/audio/4.mp3`;
    break;
  case 5:
    path = `../assets/audio/5.mp3`;
    break;
  case 6:
    path = `../assets/audio/6.mp3`;
    break;
  }

  this.state = {audio: path};

  return (
    <section className='audio-player'>
      <SongName songCounter={parseInt(songCounter)}  />
      <Player audio={this.state.audio} />
    </section>
  );
};

MusicPlayer.propTypes = {
  songCounter: PropTypes.string
};

MusicPlayer.defaultProps = {
  songCounter: 0
};

export default MusicPlayer;
