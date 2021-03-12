import CheckPage from "../CheckPage/CheckPage";
import MainPage from "../MainPage/MainPage";
import "./App.scss";
import { Switch, Router, Route } from "react-router-dom";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import ArticlesPage from "../ArticlesPage/ArticlesPage";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Route exact path="/" render={() => <MainPage />}></Route>
          <Route path="/check" render={() => <CheckPage />}></Route>
          <Route path="/articles" render={() => <ArticlesPage />}></Route>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
