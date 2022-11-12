import { ListItem } from "../components";

const List = ({ list }: any) => {
  console.log("--- list", list);
  const data = list || [];

  return (
    <div>
      List
      {data.map((item, index) => (
        <ListItem item={item} key={index} />
      ))}
    </div>
  );
};

export default List;
