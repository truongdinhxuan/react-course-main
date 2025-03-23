import {useEffect, useState} from "react";
import { getProducts } from "../../../../api/product.service";
// interface IProduct {
//     id: string,
//     image: string,
//     name: string,
//     originalPrice: string,
//     createdAt: string
//     // description: string
// }
const ProductDetail = () => {
    const [product, setProduct] = useState<IProduct[]>([])
    const fetchProductById = async () => {
        const data = await getProducts()
        setProduct(data);
    }
    // useEffect(() => {
    //     getProduct()
    // },[])
    return (
        <div className="bg-white flow-root rounded-lg border border-gray-100 py-3 shadow-xs">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Image</dt>
                    <dd className="text-gray-700 sm:col-span-3">Mr</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Name</dt>
                    <dd className="text-gray-700 sm:col-span-3">Mr</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Name</dt>
                    <dd className="text-gray-700 sm:col-span-3">John Frusciante</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Occupation</dt>
                    <dd className="text-gray-700 sm:col-span-3">Guitarist</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Salary</dt>
                    <dd className="text-gray-700 sm:col-span-3">$1,000,000+</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Bio</dt>
                    <dd className="text-gray-700 sm:col-span-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                        doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                        aspernatur neque molestiae labore aliquam soluta architecto?
                    </dd>
                </div>
            </dl>
        </div>
    )
}

export default ProductDetail