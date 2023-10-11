import Video from './Video';
import depoimentOne from '../../assets/videos/videoTwo.mp4';
import depoimentTwo from '../../assets/videos/videoOne.mp4';
import depoimentGiuliano from '../../assets/videos/videoGiu.mp4';
import thumbnailGiu from '../../assets/thumbGiu.webp';
import thumbnailTwo from '../../assets/thumbTwo.webp';
import thumbnailOne from '../../assets/thumbOne.webp';

function VideoContainer() {
  return (
    <div className="video-container">
      <Video
        poster={ thumbnailGiu }
        video={ depoimentGiuliano }
      />
      <Video
        poster={ thumbnailOne }
        video={ depoimentTwo }
      />
      <Video
        poster={ thumbnailTwo }
        video={ depoimentOne }
      />
    </div>
  );
}

export default VideoContainer;
