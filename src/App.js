import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './containers/Header';
import ProductList from './containers/ProductList';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProdcutDetail';

function App() {
  return (

    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/product" element={<ProductDetail/>}/>
        </Routes>

      </Router>
      <h1>Hellow from react</h1>e
    </div>
  );
}

export default App;
