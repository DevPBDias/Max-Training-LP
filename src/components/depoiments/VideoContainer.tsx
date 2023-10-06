import Video from './Video';
import depoimentOne from '../../assets/videos/depoimentOne.mp4';
import depoimentTwo from '../../assets/videos/depoimentTwo.mp4';
import depoimentGiuliano from '../../assets/videos/depoimentGiuliano.mp4';

function VideoContainer() {
  return (
    <div className="video-container">
      <Video video={ depoimentGiuliano } />
      <Video video={ depoimentTwo } />
      <Video video={ depoimentOne } />
    </div>
  );
}

export default VideoContainer;
