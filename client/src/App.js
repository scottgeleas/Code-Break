import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/index';
import Nav from './components/Nav/index';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import Banner from './components/Banner/index';
import Footer from './components/Footer/index';
import Filter from './components/Filter/index';
import SnippetDetail from './components/SnippetDetail';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = Auth.getStorageToken();

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
                            <Filter />
                        </Route>
                        <Route path='/dashboard' exact>
                            <h1>Dashboard</h1>
                            <Filter />
                        </Route>
                        <Route path='/signup' exact>
                            <Signup />
                        </Route>
                        <Route path='/login' exact>
                            <Login />
                        </Route>
                        <Route path='/snippets/:snippetId' exact>
                            <SnippetDetail />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
