import { conection } from "../db.js"
 
export const getProductos = async (req, res) => {
    try {
        const [result] = await conection.query('select * from productos')
        res.json(result)
    } catch (error) {
        return res.status(500).json({
            "message": "Error."
        })        
    }
}

export const getProducto = async (req, res) => {
    try {
        const id =  req.params.id
        const result = await conection.query('select * from productos where id = ?', [id])
        
        if (result[0].length <= 0) return res.status(404).json({
            "message": "Producto no encontrado"
        })
    
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({
            "message": "Error."
        }) 
    }
}

export const createProductos = async (req, res) => {
    try {
        const {nombre, precio, descripcion} = req.body
        const [result] = await conection.query('insert into productos(nombre, precio, descripcion) values (?, ?, ?)', [nombre, precio, descripcion])
        res.send({
            id: result.insertId,
            nombre,
            precio,
            descripcion
        })
    } catch (error) {
        return res.status(500).json({
            "message": "Error."
        }) 
    }
}

export const updateProductos = async (req, res) => {
    try {
        const id =  req.params.id
        const {nombre, precio, descripcion} = req.body
        const [result] = await conection.query('update productos set nombre = ?, precio = ?, descripcion = ? where id = ?', [nombre, precio, descripcion, id])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            "message": "Producto no encontrado"
        })
    
        const [obj] = await conection.query('select * from productos where id = ?', [id])
    
        res.json(obj[0])
    } catch (error) {
        return res.status(500).json({
            "message": "Error."
        }) 
    }
}

export const deleteProductos = async (req, res) => {
    try {
        const id =  req.params.id
        const [result] = await conection.query('delete from productos where id = ?', [id])
        
        if (result.affectedRows <= 0) return res.status(404).json({
            "message": "Producto no encontrado"
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            "message": "Error."
        }) 
    }
}
