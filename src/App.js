import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Game from './TicTacToe';
import Form from './Phonebook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/'>
          <div className='div1'>
            <Game />
          </div>

          <div className='div1'>
            <Form />
          </div>  
        </Route>
      </BrowserRouter>
        
      
    </div>
  );
}

export default App;
