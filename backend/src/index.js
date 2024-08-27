import express from 'express'
import productosRoutes from './routes/productos.routes.js'
import cors from 'cors';

const app = express()

app.use(cors())
app.use(express.json())

app.use(productosRoutes)

const port = 4000
app.listen(port)
console.log("Server running in port: " + port);