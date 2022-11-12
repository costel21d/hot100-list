import YPlayer from "./YPlayer";

const VideoListItem = ({ item }: any) => {
  console.log(item);
  return (
    <div>
      {/* <a href="#"> */}
      <h3>{item.videoId}</h3>
      <YPlayer videoId={item.videoId} />
      {/* </a> */}
    </div>
  );
};

export default VideoListItem;
