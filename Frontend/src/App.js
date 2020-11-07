import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './containers/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" render={(props) => {
          return <HomePage {...props} />
        }} />
      </div>
    </BrowserRouter>
  );
}

export default App;
