import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import MainPage from './components/pages/MainPage';
import AboutPage from './components/pages/AboutPage';
import HobbyPage from './components/pages/HobbyPage';
import ProPage from './components/pages/ProPage';
import TeachersPage from './components/pages/TeachersPage';
import CommentsPage from './components/pages/CommentsPage';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/hobby" exact>
            <HobbyPage />
          </Route>
          <Route path="/pro" exact>
            <ProPage />
          </Route>
          <Route path="/teachers" exact>
            <TeachersPage />
          </Route>
          <Route path="/comments" exact>
            <CommentsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
