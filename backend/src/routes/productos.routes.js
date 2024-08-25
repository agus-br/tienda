import { Router } from "express";
import { getProductos, createProductos, deleteProductos, updateProductos } from '../controllers/productos.controller.js';

const router = Router()

router.get('/productos', getProductos)

router.post('/productos', createProductos)

router.put('/productos', updateProductos)

router.delete('/productos', deleteProductos)

export default router