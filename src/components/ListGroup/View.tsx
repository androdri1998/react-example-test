import ListItem from "../ListItem";

interface ListGroupViewProps {
  heading: string;
  items: string[];
  currentCity: string | undefined;
  handleClick: (item: string) => void;
}

function ListGroupView({
  heading,
  items,
  currentCity,
  handleClick,
}: ListGroupViewProps) {
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <ListItem
            key={item}
            item={item}
            isSelectedItem={currentCity === item}
            onClick={() => handleClick(item)}
          />
        ))}
      </ul>
    </>
  );
}

export default ListGroupView;
