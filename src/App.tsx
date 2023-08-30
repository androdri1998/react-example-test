import { useCallback, useState } from "react";
import { ListGroup, Alert, Button } from "./components";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "paris"];

  const [alertVisible, setAlertVisibility] = useState<boolean>(false);

  const handleSelectItem = useCallback((item: string) => {
    console.log(item);
  }, []);

  const handleAlertVisibilty = useCallback(() => {
    setAlertVisibility(!alertVisible);
  }, [alertVisible]);

  return (
    <div>
      <Button onClick={handleAlertVisibilty}>
        {!alertVisible ? "Show" : "Hide"} alert
      </Button>

      {alertVisible && (
        <Alert onClose={handleAlertVisibilty}>
          trying to do an <span>alert</span>
        </Alert>
      )}

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
