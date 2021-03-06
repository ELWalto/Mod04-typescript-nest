import { Switch, Route } from "react-router-dom";

// Components
import { Home } from "./components/Home/Home";

// CSS
import './App.css';

export function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="content">
          <Switch>
            <Route path="/" exact={true} component={Home} />
          </Switch>

      </div>
    </div>
  );
}
export default App
