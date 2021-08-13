import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/index';
import Nav from './components/Nav/index';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import Banner from './components/Banner/index';
import Footer from './components/Footer/index';
import Filter from './components/Filter/index';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <div className='pageHeader'>
                        <Header />
                        <Nav />
                    </div>
                    <Banner />
                    <Switch>
                        <Route path='/' exact>
                            <h1>Homepage</h1>
                        </Route>
                        <Route path='/dashboard' exact>
                            <h1>Dashboard</h1>
                        </Route>
                        <Route path='/signup' exact>
                            <Signup />
                        </Route>
                        <Route path='/login' exact>
                            <Login />
                        </Route>
                    </Switch>
                    <div className='mainContent'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3'>
                                    <Filter />
                                </div>

                                <div className='col-9'>
                                    {/* Snippet Component here */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
