import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../css/Dashboard.css';

export default function Dashboard() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Usa useNavigate

  // Función para cargar productos desde la API
  const loadProductos = async () => {
    try {
      const res = await fetch('http://localhost:4000/productos');
      if (!res.ok) {
        throw new Error('Error al cargar los productos');
      }
      const data = await res.json();
      setProductos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProductos();
  }, []);

  const handleAddProduct = () => {
    navigate('/productos/nuevo'); // Redirige a ProductoForm para agregar un nuevo producto
  };

  const handleEditProduct = (id) => {
    navigate(`/productos/editar/${id}`); // Redirige a ProductoForm con el ID del producto
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        const res = await fetch(`http://localhost:4000/productos/${id}`, {
          method: 'DELETE',
        });
        if (!res.ok) {
          throw new Error('Error al eliminar el producto');
        }
        // Refresca la lista de productos después de eliminar
        loadProductos();
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dashboard">
      <button className="add-button" onClick={handleAddProduct}>
        Agregar Producto
      </button>
      <div className="table-header">
        <div className="header-item">Nombre</div>
        <div className="header-item">Precio</div>
        <div className="header-item">Descripción</div>
        <div className="header-item">Acciones</div>
      </div>
      <div className="table-body">
        {productos.map((producto) => (
          <div key={producto.id} className="table-row">
            <div className="row-item">{producto.nombre}</div>
            <div className="row-item">${parseFloat(producto.precio).toFixed(2)}</div>
            <div className="row-item">{producto.descripcion}</div>
            <div className="row-item">
              <button
                className="action-button action-button-update"
                onClick={() => handleEditProduct(producto.id)}
              >
                Actualizar
              </button>
              <button
                className="action-button action-button-delete"
                onClick={() => handleDeleteProduct(producto.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
