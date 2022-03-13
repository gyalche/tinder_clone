
import './App.css';
import Headers from './components/Headers';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    //DOM
    <div className="App">
      
      <BrowserRouter>
        <Headers></Headers>
      </BrowserRouter>
        
      


    </div>
  );
}

export default App;
