const ListItem = ({ item }: any) => {
  return (
    <div>
      <a href={item.web}>
        <h3>{item.name}</h3>
        <img src={item.banner} alt={item.name} />
      </a>
    </div>
  );
};

export default ListItem;
