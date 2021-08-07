import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div>
     <Header />
     <Signup />
     <Login />     
    </div>
  );
}

export default App;
