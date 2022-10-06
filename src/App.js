import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/nav";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Trending from "./pages/Trending/Trending";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import Account from "./pages/Login/Account";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path="/" component={Trending} exact />
              <Route path="/movies" component={Movies} />
              <Route path="/series" component={Series} />
              <Route path="/search" component={Search} />
              <Route path="/login" component={Login} />
              <Route path="/account" component={Account} />
            </Switch>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
