import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/nav";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Trending from "./pages/Trending/Trending";
import Search from "./pages/Search/Search";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app"></div>
      <Container>
        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />
        </Switch>
      </Container>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
