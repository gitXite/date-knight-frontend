import { useState } from 'react';
import { useLocation } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Header from '../componentes/Header';


function Layout() {
    const location = useLocation();
    const isLanding = location.pathname === '/';
    const [showHeader, setShowHeader] = useState(!isLanding);

    return (
        <>
            {showHeader && <Header />}

            <Routes>
                <Route path='/' element={<Landing onCTAClick={() => setShowHeader(true)} />} />
                <Route path='/start' />
                <Route path='/about' />
            </Routes>
        </>
    );
}


export default Layout;
