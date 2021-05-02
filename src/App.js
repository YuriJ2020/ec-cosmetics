import "App.scss";

import CustomSwitch from "switch";
import navBarWithSwitch from "components/NavBar";

const App = () => {
  return (
    <>
      <div className="App">{navBarWithSwitch(CustomSwitch)}</div>
    </>
  );
};

export default App;
