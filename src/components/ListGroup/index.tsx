import { useCallback, useState } from "react";

import ListGroupView from "./View";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  currentCity: string | undefined;
}

function ListGroup({
  items,
  heading,
  onSelectItem,
  currentCity,
}: ListGroupProps) {
  const handleClick = useCallback((item: string) => {
    onSelectItem(item);
  }, []);

  return (
    <ListGroupView
      heading={heading}
      items={items}
      currentCity={currentCity}
      handleClick={handleClick}
    />
  );
}

export default ListGroup;
