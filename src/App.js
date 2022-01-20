import FetchStarships from './Components.js/Starships';
import './App.css';
import FetchPlanets from './Components.js/Planets';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './Components.js/Nav';
import Error from './Components.js/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='Title'>
          
        </div>
        <Nav />
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/Starships' element={<FetchStarships />} />
          <Route path='/Planets' element={<FetchPlanets />} />
        </Routes>
      </div>
    </BrowserRouter>
     
    
  );
}

export default App;
