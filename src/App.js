import './css/styles.css';
import Header from './Header';
import Footer from './Footer';
import HeroPage from './HeroPage';
import Features from './Products';
import MeterCounter from './state';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroPage />
      <Features />
      <MeterCounter />
      <Footer />
    </div>
  );
}

export default App;
