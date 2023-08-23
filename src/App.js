import './App.css';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'




function App() {
  return (
    <>
     <Header/>
     <Routes>
     <Route path='/' element={<Cards/>}/>
      <Route path='/cart' element={<CardsDetails/>}/>
     </Routes>
    </>
  );
}

export default App;
