import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/index';
import Nav from './components/Nav/index';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import Banner from './components/Banner/index';

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
      <div>
          <div className='pageHeader'>
            <Header />
            <Nav />
          </div>
        <Signup />
        <Login />
        <Banner />
      </div>
    </ApolloProvider>
  );
}

export default App;
