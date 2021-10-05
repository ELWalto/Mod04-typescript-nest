// React
import { Switch, Route } from "react-router-dom";

// Pages
import { Home } from "../src/Pages/Home/Home";

// CSS
import "./App.css";
import CreateProduct from "../src/Pages/CreateProduct/CreateProduct";

export function App() {
    return (
        <div className="App">
            <header className="App-header">Product App</header>

            <div className="content">
                <Switch>
                    <Route path="/" exact={true} component={Home} />

                    <Route path="/product/create" component={CreateProduct} />
                </Switch>
            </div>
        </div>
    );
}