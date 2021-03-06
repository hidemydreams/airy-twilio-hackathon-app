import CheckPage from "../CheckPage/CheckPage";
import MainPage from "../MainPage/MainPage";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "../common/Header/Header";
import AboutPage from "../AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" c render={() => <MainPage />}></Route>
            <Route path="/check" render={() => <CheckPage />}></Route>
            <Route path="/about" render={() => <AboutPage />}></Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
