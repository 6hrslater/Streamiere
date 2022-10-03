import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/nav";

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
