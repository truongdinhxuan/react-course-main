import React, { useEffect, useState } from "react";
import { createProduct, getProducts, updateProduct } from "../../../api/product.service";
import { useForm, SubmitHandler } from 'react-hook-form';
import { IProduct } from "../../../interfaces";
type Inputs = {
    id: string,
    name: string,
    originalPrice: string,
    description: string,
    image: string,
    createdAt: string
}
interface ProductFormProps {
    initialData?: IProduct,
    isEditMode: boolean,
    onSubmitSuccess: () => void
}
const ProductForm: React.FC<ProductFormProps> = ({initialData,isEditMode,onSubmitSuccess}) => {
    // Phân trang

    // post data
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: isEditMode && initialData ?
        {
            id: initialData.id,
            name: initialData.name,
            originalPrice: initialData.originalPrice,
            description: initialData.description,
            image: initialData.image,
            createdAt: initialData.createdAt
        } : {
            id: '',
            name: '',
            originalPrice: '',
            description: '',
            image: '',
            createdAt: ''
        }
    });
    useEffect(() => {
        if (isEditMode && initialData) {
            reset({
                id: initialData.id,
                name: initialData.name,
                originalPrice: initialData.originalPrice,
                description: initialData.description,
                image: initialData.image,
                createdAt: initialData.createdAt
            });
        } else {
            reset({
                id: '',
                name: '',
                originalPrice: '',
                description: '',
                image: '',
                createdAt:''
            });
        }
    }, [initialData, isEditMode, reset]);
    const submitForm: SubmitHandler<Inputs> = async (data) => {
        // console.log(data);
        const { id } = data;
        const { name } = data;
        const { originalPrice } = data;
        const { description } = data;
        const { image } = data;
        if (isEditMode && initialData) {
            const updateProductData = {
                ...initialData,
                name,
                originalPrice,
                description,
                image,
                createdAt: new Date().toISOString()
            }
            console.log(updateProductData)
            await updateProduct(updateProductData.id,updateProductData)
        } else {
            const newProduct = {
                id,
                name,
                originalPrice,
                description,
                image,
                createdAt: new Date().toISOString()
            };
            await createProduct(newProduct);
        }
        onSubmitSuccess()
        }
        return (
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="bg-white flow-root rounded-lg border border-gray-100 py-3 shadow-xs">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Id</dt>
                            <dd className="text-gray-700 sm:col-span-3">
                                <input
                                    type="text"
                                    {...register("id",{required: "Id is needed"})}
                                    placeholder="Enter Id"
                                    className="mt-1 py-3 w-120 rounded-md border-gray-200 shadow-xs sm:text-sm"
                                />
                                <span></span>
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Name</dt>
                            <dd className="text-gray-700 sm:col-span-3">
                                <input
                                    type="text"
                                    {...register("name",{required: "Name is needed"})}
                                    placeholder="Enter name"
                                    className="mt-1 py-3 w-120 rounded-md border-gray-200 shadow-xs sm:text-sm"
                                />
                                <span></span>
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Original Price</dt>
                            <dd className="text-gray-700 sm:col-span-3">
                                <input
                                    type="text"
                                    {...register("originalPrice",{required: true})}
                                    placeholder="Enter original price"
                                    className="mt-1 py-3 w-120 rounded-md border-gray-200 shadow-xs sm:text-sm"
                                />
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Description</dt>
                            <dd className="text-gray-700 sm:col-span-3">
                                <input
                                    type="text"
                                    {...register("description",{required: true})}
                                    placeholder="Enter description"
                                    className="mt-1 py-3 w-120 rounded-md border-gray-200 shadow-xs sm:text-sm"
                                />
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Image (link)</dt>
                            <dd className="text-gray-700 sm:col-span-3">
                                <input
                                    type="text"
                                    {...register("image",{required: true})}
                                    placeholder="Enter image"
                                    className="mt-1 py-3 w-120 rounded-md border-gray-200 shadow-xs sm:text-sm"
                                />
                            </dd>
                        </div>

                        <div className="flex justify-end p-3">
                            <button
                                type="submit"
                                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                            >
                                {isEditMode ? 'Update Product' : 'Add Product'}
                            </button>
                        </div>
                    </dl>
                </div>
            </form>
        )
    }

export default ProductForm