import { conection } from "../db.js"
 
export const getProductos = async (req, res) => {
    const result = await conection.query('select * from productos')
    res.json(result[0])
}

export const createProductos = async (req, res) => {
    const result = await conection.query('select * from productos')
    res.json(result[0])
}

export const updateProductos = async (req, res) => {
    const result = await conection.query('select * from productos')
    res.json(result[0])
}

export const deleteProductos = async (req, res) => {
    const result = await conection.query('select * from productos')
    res.json(result[0])
}
