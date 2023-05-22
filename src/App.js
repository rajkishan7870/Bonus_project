import {Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import Contact from './component/Contact';
import Task from './component/Task';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar/>

    <Routes>
        <Route path="/" element={<Home/>}   />
        <Route path="/contact" element={<Contact/>}   />
        <Route path="/task" element={<Task/>}   />

    </Routes>
    

    
    </div>
  );
}

export default App;