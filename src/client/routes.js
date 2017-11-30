import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CounterPage from './pages/CounterPage';

const routes = [
    { 
        path: '/',
        exact: true,
        component: Home
    },
    { 
        path: '/about',
        component: About
    },
    { 
        path: '/contact',
        component: Contact
    },
    {
        path: '/counter',
        component: CounterPage
    }
  ];

  export default routes;