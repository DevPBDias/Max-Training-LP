type IVideoProps = {
  video: string,
};

function Video({ video }: IVideoProps) {
  return (
    <video className="video" controls src={ video }>
      <track default kind="captions" srcLang="pt" />
    </video>
  );
}

export default Video;
