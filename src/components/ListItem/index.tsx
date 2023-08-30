interface ListItemProps {
  item: string;
  isSelectedItem: boolean;
  onClick: () => void;
}

function ListItem({ item, isSelectedItem, onClick }: ListItemProps) {
  return (
    <li
      className={isSelectedItem ? "list-group-item active" : "list-group-item"}
      onClick={onClick}
    >
      {item}
    </li>
  );
}

export default ListItem;
