import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import Header from './components/Header';
import Landing from './pages/Landing';


function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default App;
