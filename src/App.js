
import './App.css';
import Headers from './components/Headers';
import { BrowserRouter } from 'react-router-dom';
import TinderCards from './Cards/TinderCards';
import SwipButtons from './Swip/SwipButtons';
function App() {
  return (
    //DOM
    <div className="App">
      
      <BrowserRouter>
        <Headers></Headers>
        <TinderCards></TinderCards>
        <SwipButtons></SwipButtons>
      </BrowserRouter>
        
      


    </div>
  );
}

export default App;
