import React, {PropTypes} from 'react';

export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {play: false};
  }

  componentWillReceiveProps() {
    this.setState({play: true});
  }

  componentDidMount() {
    this.audio.addEventListener(`timeupdate`, () => {
      const ratio = this.audio.currentTime / this.audio.duration;
      const position = this.timeline.offsetWidth * ratio;
      this.positionHandle(position);
    });
  }

  positionHandle = position => {
    const timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    const handleLeft = position - this.timeline.offsetLeft;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      this.handle.style.marginLeft = `${handleLeft  }px`;
    }
    if (handleLeft < 0) {
      this.handle.style.marginLeft = `0px`;
    }
    if (handleLeft > timelineWidth) {
      this.handle.style.marginLeft = `${timelineWidth  }px`;
    }
  };

  handleMouseMove = e => {
    this.positionHandle(e.pageX);
    this.audio.currentTime = (e.pageX / this.timeline.offsetWidth) * this.audio.duration;
  };

  mouseUp = () => {
    window.removeEventListener(`mousemove`, this.handleMouseMove);
    window.removeEventListener(`mouseup`, this.mouseUp);
  };

  handleMouseDown = () => {
    window.addEventListener(`mousemove`, this.handleMouseMove);
    window.addEventListener(`mouseup`, this.mouseUp);
  };

  handlePlay = () => {
    if (this.state.play) {
      this.setState({play: false});
      this.audio.pause();
    } else {
      this.setState({play: true});
      this.audio.play();
    }
  };

  render() {
    return (
      <div className='player-controlls'>
        <audio src={this.props.audio} ref={audio => { this.audio = audio; }} />
        <div onClick={this.handlePlay} className={!this.state.play ? `playBtn` : `pauseBtn`}>
        </div>
        <div className='timeline' onClick={this.handleMouseMove} ref={timeline => { this.timeline = timeline; }}>
          <div className='handle' onMouseDown={this.handleMouseDown} ref={handle => { this.handle = handle; }} >
          </div>
        </div>
      </div>
    );
  }
}
Player.propTypes = {
  audio: PropTypes.string
};
Player.defaultProps = {
  audio: ``
};
