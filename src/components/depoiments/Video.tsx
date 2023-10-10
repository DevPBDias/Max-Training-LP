type IVideoProps = {
  video: string,
  poster: string,
};

function Video({ video, poster }: IVideoProps) {
  return (
    <video poster={ poster } className="video" controls src={ video }>
      <track default kind="captions" srcLang="pt" />
    </video>
  );
}

export default Video;
