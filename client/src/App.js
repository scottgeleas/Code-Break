import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/index';
import Nav from './components/Nav/index';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import Banner from './components/Banner/index';

function App() {
    return (
        <div>
            <div className='pageHeader'>
            <Header />
            <Nav />
            </div>

            <Signup />
            <Login />
            <Banner />
        </div>
    );
}

export default App;
