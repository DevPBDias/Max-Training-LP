type IVideoProps = {
  linkYoutube: string,
};

function Video({ linkYoutube }: IVideoProps) {
  return (
    <iframe
      className="video"
      src={ `https://www.youtube.com/embed/${linkYoutube}` }
      title="Video"
    />
  );
}

export default Video;
