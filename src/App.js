import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import {Routes,Route,Link} from 'react-router-dom'
import Tasks from './components/Tasks';
import DemoTable from './components/DemoTable';

function App() {
  return (
    <div className="App">
      {/* <DemoTable></DemoTable> */}
    
      




      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
        <Route path='tasks' element={<Tasks></Tasks>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
