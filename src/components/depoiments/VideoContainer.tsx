import Video from './Video';
import thumbnailGiu from '../../assets/thumbGiu.webp';
import thumbnailTwo from '../../assets/thumbTwo.webp';
import thumbnailOne from '../../assets/thumbOne.webp';

function VideoContainer() {
  return (
    <div className="video-container">
      <Video
        poster={ thumbnailGiu }
        video="https://youtube.com/shorts/N59a1Epauvc?feature=share"
      />
      <Video
        poster={ thumbnailOne }
        video="https://youtube.com/shorts/bYMA_Bi58XQ"
      />
      <Video
        poster={ thumbnailTwo }
        video="https://youtube.com/shorts/MIUKD66kZ1E"
      />
    </div>
  );
}

export default VideoContainer;
