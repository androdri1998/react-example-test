import { useCallback, MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleClick = useCallback((index: number, item: string) => {
    setSelectedItem(index);
    onSelectItem(item);
  }, []);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => handleClick(index, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
