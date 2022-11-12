import { VideoListItem } from "../components";

const VideoList = ({ list }: any) => {
  console.log("--- list", list);
  const data = [
    {
      videoId: "RpSo2e8WptM"
    },
    {
      videoId: "RpSo2e8WptM"
    }
  ];

  return (
    <div>
      List
      {data.map((item, index) => (
        <VideoListItem item={item} key={index} />
      ))}
    </div>
  );
};

export default VideoList;
