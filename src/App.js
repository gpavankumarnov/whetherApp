import logo from './logo.svg';
import './App.css';
import ContextApi from './ContextApi';
import WhetherDisplay from './pages/WhetherDisplay/WhetherDisplay';

function App() {
  return (
    <ContextApi>
    <div className="app">
     
     <WhetherDisplay/>
    </div>
    </ContextApi>
  );
}

export default App;
