import CheckPage from "../CheckPage/CheckPage";
import MainPage from "../MainPage/MainPage";
import "./App.scss";
import { Switch, Router, Route } from "react-router-dom";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import ArticleList from "../ArticlesPage/ArticleList";
import Charts from "../charts/charts"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Route exact path="/" render={() => <MainPage />}></Route>
          <Route path="/check" render={() => <CheckPage />}></Route>
          <Route path="/articles" render={() => <ArticleList />}></Route>
          <Route path="/charts" render={() => <Charts />}></Route>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
