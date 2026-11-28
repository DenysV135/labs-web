import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './css/styles.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Catalog from './Catalog';
import ItemPage from './ItemPage';
import Cart from './Cart';
import { MetersProvider } from './MetersContext';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <MetersProvider>
        <Router>
          <div className="App">
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/catalog/:id" element={<ItemPage />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </MetersProvider>
    </Provider>
  );
}

export default App;