import { useCallback, useState } from "react";
import { ListGroup, Alert } from "./components";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "paris"];

  const [alertVisible, setAlertVisibility] = useState<boolean>(false);
  const [currentCity, setCurrentCity] = useState<string | undefined>(undefined);

  const handleAlertVisibilty = useCallback(
    (item?: string) => {
      setAlertVisibility(!alertVisible);
      setCurrentCity(item);
    },
    [alertVisible]
  );

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleAlertVisibilty}
      />
      {alertVisible && (
        <Alert onClose={handleAlertVisibilty}>
          Showing <span>{currentCity}</span>
        </Alert>
      )}
    </div>
  );
}

export default App;
