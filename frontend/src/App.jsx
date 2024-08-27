import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dahsboard'
import ProductosForm from './pages/ProductosForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/productos' element={<Dashboard />} />
        <Route path='/productos/nuevo' element={<ProductosForm />} />
        <Route path='/productos/editar/:id' element={<ProductosForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
