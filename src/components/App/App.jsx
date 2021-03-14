import CheckPage from "../CheckPage/CheckPage";
import MainPage from "../MainPage/MainPage";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import ArticleList from "../ArticlesPage/ArticleList";
import Charts from "../charts/Chart"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" c render={() => <MainPage />}></Route>
            <Route path="/check" render={() => <CheckPage />}></Route>
            <Route path="/articles" render={() => <ArticleList />}></Route>
            <Route path="/charts" render={() => <Charts />}></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
