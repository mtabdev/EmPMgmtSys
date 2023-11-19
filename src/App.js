import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListAllEmployee from './components/ListAllEmployee';

function App() {
  return (
    <div className="container">
      <Header />
      <ListAllEmployee />
      <Footer />
    </div>
  );
}

export default App;
