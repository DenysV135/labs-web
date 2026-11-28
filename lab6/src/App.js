import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/styles.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Catalog from './Catalog';
import ItemPage from './ItemPage';
import { MetersProvider } from './MetersContext';

function App() {
  return (
    <MetersProvider>
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<div className="coming-soon">Тут скоро буде Кошик</div>} />
            <Route path="/catalog/:id" element={<ItemPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </MetersProvider>
  );
}

export default App;
