import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch></Switch>
      </Router>
    </div>
  );
};

export default App;
