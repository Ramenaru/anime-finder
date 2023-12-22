import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import withLoading from './components/HOC/withLoading';

import SearchPage from './pages/searchPage';
import DetailsPage from './pages/detailsPage';
import NotFoundPage from './pages/notFound';
import HomePage from './pages/homePage';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  const HomePageWithLoading = withLoading(HomePage); 

  root.render(
    <React.StrictMode>
      <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePageWithLoading />} /> 
          <Route path="/search" element={<SearchPage />} />
          <Route path="/anime/:animeId" element={<DetailsPage />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      </HelmetProvider>
    </React.StrictMode>,
  );

} else {
  console.error('Failed to find the root element');
}
