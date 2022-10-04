import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/nav";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Trending from "./pages/Trending/Trending";
import Search from "./pages/Search/Search";
import Users from "./pages/Users/users";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
            <Route path="/User" component={Users} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
