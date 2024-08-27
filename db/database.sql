create database tienda;

use tienda;

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  descripcion TEXT
);

INSERT INTO productos (nombre, precio, descripcion) VALUES
('Leche Entera', 1.29, 'Leche entera de 1 litro, ideal para el desayuno y la cocina.'),
('Pan Integral', 2.49, 'Pan integral de trigo, 500 gramos. Rico en fibra y nutrientes.'),
('Arroz Basmati', 4.99, 'Arroz basmati de 1 kilogramo, ideal para acompañar tus comidas.'),
('Aceite Vegetal', 3.89, 'Aceite vegetal de 1 litro, perfecto para cocinar y freír.'),
('Azúcar Refinada', 1.79, 'Azúcar blanca refinada de 1 kilogramo, ideal para endulzar tus bebidas y recetas.'),
('Lata de Tomate Triturado', 0.99, 'Lata de 400 gramos de tomate triturado, ideal para salsas y guisos.');

select * from productos;