import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../../../../api/product.service";
import ProductForm from "../ProductForm";
import { IProduct } from "../../../../interfaces";

const EditProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<IProduct[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (id) {
                    const data = await getProductById(id);
                    setProduct(data);
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleSubmitSuccess = () => {
        alert("Product updated successfully!");
        navigate('/admin/product');
    };
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Edit Product: {product.name}</h2>
            <ProductForm 
                initialData={product}
                isEditMode={true}
                onSubmitSuccess={handleSubmitSuccess}
            />
        </div>
    );
};

export default EditProductPage;