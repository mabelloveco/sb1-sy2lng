import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import TopCategories from './components/TopCategories';
import FeaturedStores from './components/FeaturedStores';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import StorePage from './pages/StorePage';
import SearchResults from './pages/SearchResults';
import News from './pages/News';
import Account from './pages/Account';
import SubmitCoupon from './pages/SubmitCoupon';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <HowItWorks />
                <TopCategories />
                <FeaturedStores />
                <FAQ />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:slug" element={<CategoryDetail />} />
            <Route path="/stores/:slug" element={<StorePage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/news" element={<News />} />
            <Route path="/account" element={<Account />} />
            <Route path="/submit" element={<SubmitCoupon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;