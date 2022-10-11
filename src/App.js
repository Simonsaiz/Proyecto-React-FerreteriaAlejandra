import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainerCard from './Components/Card/ItemListContainerCard';
import ItemDetail from './Components/Card/ItemDetail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <h1 className='title'>FERRETERIA ALEJANDRA</h1>
        <Routes>
          <Route path={'/Inicio'} element={<ItemListContainer/>} />
          <Route path={'/Productos'} element={<ItemListContainerCard/>} />
          <Route path={'/Productos/item/:id'} element={<ItemDetail/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
