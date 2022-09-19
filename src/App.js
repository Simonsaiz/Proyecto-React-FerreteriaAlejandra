import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import Tools from './Components/Tools';

function App() {
  return (
    <>
      <Navbar/>
      <h1 className='title'>FERRETERIA ALEJANDRA</h1>
      <ItemListContainer Bienvenidos='Bienvenidos a nuetra ferreteria, productos y herrmientas al mejor precio'/>
      <Tools Herramientas='Amoladora'/>
      <Tools Herramientas='Atornilladora'/>
      <Tools Herramientas='Medidor Laser'/>
    </>
  );
}

export default App;
