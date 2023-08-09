import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
          <Header />
        </div>
    </BrowserRouter>
  );
}

export default App;
