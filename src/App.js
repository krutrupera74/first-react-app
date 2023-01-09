import './App.css';
// import CounterWithHooks from './Components/reacthook';
// import Blog from './Containers/Blog/Blog';

import HomePage from './Components/pages/HomePage';
import AboutPage from './Components/pages/AboutPage';
import AppNavBar from './Components/pages/AppNavBar';
import CustomerPage from './Components/pages/CustomerPage';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import useEffectDemo from './Components/useEffectDemo';


function App() {
  return (
    <div className="container">
      <ToastContainer />
      <BrowserRouter>
        <AppNavBar />
        <br />
        <hr />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/customers" component={CustomerPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/useEffectDemo" component={useEffectDemo} />
        </Switch>
      </BrowserRouter>
      {/* <Blog />
      <CounterWithHooks /> */}
    </div>
  );
}

export default App;
