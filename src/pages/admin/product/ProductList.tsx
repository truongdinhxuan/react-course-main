import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { IProduct } from "../../../interfaces";
import { getProducts } from "../../../api/product.service";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    
    const getAllProducts = async () => {
        const data = await getProducts()
        // const data = await response.json();
        setProducts(data);
    }
    
    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <section>
            <div className="btn-add-product">
                <Link
                    className="inline-block rounded-sm bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"
                    to="add"
                >
                    New product
                </Link>
            </div>
            <div className="mt-4 overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">ID</th>
                            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Image</th>
                            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Name</th>
                            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Original Price</th>
                            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Created Time</th>
                            {/* <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Description</th> */}
                            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Action</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {products.map((product) =>
                            <ProductItem onGetProducts={getAllProducts} product={product} />
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ProductList        