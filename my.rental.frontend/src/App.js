import UseTheme from "./hooks/UseTheme/UseTheme";
import {RouterComponent} from "./router/Router";

function App() {
  return (
      <UseTheme>
          <RouterComponent/>
      </UseTheme>
  );
}

export default App;
