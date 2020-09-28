import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles.css';
import Header from '../../components/Header';
import Divider from '@material-ui/core/Divider';
import BoxAdoptUs from '../../components/BoxAdoptUs';
import ImgMediaCard from '../../components/Cards';

function Home() {
  return (/* <React.Fragment>
    <Header />
    <Divider />
    <BoxAdoptUs />
    </React.Fragment> */
    <Router>
     <div>
        <nav>
          <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>

        <Switch>
          <Route path="/about">
            <Header />
          </Route>
          <Route path="/users">
            <BoxAdoptUs />
          </Route>
          <Route path="/">
            <Divider />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
