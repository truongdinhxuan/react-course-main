import { IProduct } from "../interfaces";
import instance from "./api.service";

// get all products
export const getProducts = async (): Promise<IProduct[]> => {
  return instance.get("products")
}
// get product by id
export const getProductById = async (id: string) : Promise<IProduct[]> => {
  return instance.get("products/" + id)
}
// create 
export const createProduct = async (data: IProduct) => {
  return instance.post("products", data)
}
// Update
export const updateProduct = async (id: string, data: IProduct) => {
  return instance.put("products/"+id,data)
}
// Delete
export const deleteProduct = async (id: string) => {
    return instance.delete("products" + `/${id}`)
  }
  