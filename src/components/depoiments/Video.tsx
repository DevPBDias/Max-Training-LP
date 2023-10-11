type IVideoProps = {
  video: string,
  poster: string,
};

function Video({ video, poster }: IVideoProps) {
  return (
    <video poster={ poster } className="video" controls>
      <source src={ video } type="video/mp4" />
      <track default kind="captions" srcLang="pt" />
    </video>
  );
}

export default Video;
