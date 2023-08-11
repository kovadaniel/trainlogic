import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useActions } from './hooks/useActions';
import {useEffect} from 'react';

function App() {
  const {fetchTrains} = useActions();

  useEffect(() => {
      fetchTrains();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
