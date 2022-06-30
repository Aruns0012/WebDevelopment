
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Join from './component/Join/Join'
import Chat from './component/Chat/Chat';
import Login from './component/login/Login';




function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/join' element={<Join/>} />
          <Route exact path='/chat' element={<Chat/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
