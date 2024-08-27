import { Router } from "express";
import { getProductos, getProducto, createProductos, deleteProductos, updateProductos } from '../controllers/productos.controller.js';

const router = Router()

router.get('/producto/:id', getProducto)

router.get('/productos', getProductos)

router.post('/productos', createProductos)

router.put('/productos/:id', updateProductos)

router.delete('/productos/:id', deleteProductos)

export default router