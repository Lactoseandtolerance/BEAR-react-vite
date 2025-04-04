import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';

// Import global styles
import './styles/global.css';
import './styles/animations.css';

// Import layouts
import MainLayout from './components/layouts/MainLayout';

// Create placeholder pages for now
const HomePage = () => <div>Home Page</div>;
const CollectionPage = () => <div>Collection Page</div>;
const ProductDetailPage = () => <div>Product Detail Page</div>;
const NotFoundPage = () => <div>Not Found</div>;

// App component with route setup
const App = () => {
  const location = useLocation();
  
  return (
    <ThemeProvider>
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection/:collectionId" element={<CollectionPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </ThemeProvider>
  );
};

// Wrap the app with BrowserRouter
const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);