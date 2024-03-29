import { Router } from "express";
import { cartsModel } from "../models/carts.model.js"
import CartManager from "../dao/CarritoManagerMongo.js";
import { getCarts, getCartsById, 
  postCart,deleteCartById, 
  putCartById, putProductsInCart, 
  deleteProductsInCart, postProductsInCart } from "../controllers/carts.controller.js";
// import CartManager from "../dao/CarritoManagerFS.js";

const cartsRoutes = Router()

cartsRoutes.get('/', getCarts)

cartsRoutes.get('/:cId', getCartsById)

cartsRoutes.post('/', postCart)

// Borrar un producto de un carrito puntual
cartsRoutes.delete('/:cId/products/:pId', deleteCartById) 

// Modificar un carrito
cartsRoutes.put('/:cId', putCartById)

cartsRoutes.put('/:cId/products/:pId', putProductsInCart)

cartsRoutes.delete('/:cId', deleteProductsInCart)


cartsRoutes.post("/:cId/product/:pId", postProductsInCart)


export default cartsRoutes