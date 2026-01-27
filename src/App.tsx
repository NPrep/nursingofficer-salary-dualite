import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CentralSalaries from './pages/CentralSalaries';
import StateSalaries from './pages/StateSalaries';
import NhmChoSalaries from './pages/NhmChoSalaries';
import PayMatrix from './pages/PayMatrix';
import InHandEstimator from './pages/InHandEstimator';
import Courses from './pages/Courses';
import SalaryDetail from './pages/SalaryDetail';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';

// Helper to scroll to top on route change
const ScrollToTopHelper = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopHelper />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/central-salaries" element={<CentralSalaries />} />
          <Route path="/central-salaries/:slug" element={<SalaryDetail />} />
          <Route path="/state-salaries" element={<StateSalaries />} />
          <Route path="/state-salaries/:slug" element={<SalaryDetail />} />
          <Route path="/nhm-cho-salaries" element={<NhmChoSalaries />} />
          <Route path="/pay-matrix" element={<PayMatrix />} />
          <Route path="/in-hand-estimator" element={<InHandEstimator />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
