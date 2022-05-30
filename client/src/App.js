import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Views from './view';

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <Views/>
        </BrowserRouter>
      </div>    
  );
}

export default App;
