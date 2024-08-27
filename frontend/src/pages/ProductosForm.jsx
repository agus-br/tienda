import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/ProductoForm.css';

export default function ProductoForm() {
  const { id } = useParams();
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Cargar el producto para editar si hay un ID
      const loadProducto = async () => {
        try {
          const res = await fetch(`http://localhost:4000/producto/${id}`);
          if (!res.ok) {
            throw new Error('Error al cargar el producto');
          }
          const data = await res.json();
          setProducto(data[0]); // Asegúrate de que 'data' es un objeto
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      loadProducto();
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = id ? 'PUT' : 'POST';
      const url = id ? `http://localhost:4000/productos/${id}` : 'http://localhost:4000/productos';
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });
      if (!res.ok) {
        throw new Error(`Error al ${id ? 'actualizar' : 'agregar'} el producto`);
      }
      navigate('/'); // Redirige al Dashboard después de agregar o actualizar
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="producto-form">
      <h2>{id ? 'Actualizar Producto' : 'Agregar Producto'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={producto.nombre || ""} // Asegúrate de que sea una cadena vacía si undefined
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            value={producto.precio || ""} // Asegúrate de que sea una cadena vacía si undefined
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={producto.descripcion || ""} // Asegúrate de que sea una cadena vacía si undefined
            onChange={handleChange}
          />
        </div>
        <button type="submit">{id ? 'Actualizar' : 'Agregar'}</button>
      </form>
    </div>
  );
}
