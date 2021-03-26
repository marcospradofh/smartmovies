import { Router } from 'react-router-dom';
import { Header } from './components';
import Routes from './Routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
