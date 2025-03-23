import React, { useEffect, useState } from "react";
import { IProduct } from "../../../../interfaces";
import { getProducts } from "../../../../api/product.service";
import ProductForm from "../ProductForm";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const navigate = useNavigate()
    const getAllProducts = async () => {
        const data = await getProducts()
        setProducts(data)
    }
    useEffect(() => {
        getAllProducts()
    }, [])

    const handleSubmitSuccess = () => {
        getAllProducts()
        navigate('/admin/product')
        // return to home products page
    }
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">New Product</h2>
            <ProductForm
                isEditMode={false}
                onSubmitSuccess={handleSubmitSuccess}
            />
        </div>
    )
}

export default ProductAdd