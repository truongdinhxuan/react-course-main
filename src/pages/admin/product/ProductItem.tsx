import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IProduct } from '../../../interfaces'
import { Link, NavLink } from "react-router-dom"
import { faCircleInfo, faEllipsis, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { deleteProduct } from '../../../api/product.service';

type ProductItemProps = {
    product: IProduct,
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    onGetProducts: () => {}
}
const ProductItem = ({ product, onGetProducts }: ProductItemProps) => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
    const toggleMenu = () => {
        setIsShowMenu(!isShowMenu)
    }
    const onDeleteProduct = async (id: string) => {
        if (id)
        {
            await deleteProduct(id)
            onGetProducts()
        }
    } 

    return <tr>
        <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">{product.id}</td>
        <td className="w-9">
            <img src={product.image} alt={product.id} />
        </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
            <Link to={product.id}>{product.name}</Link>
        </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">${product.originalPrice}</td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">{product.createdAt}</td>
        {/* <td className="px-4 py-2 whitespace-nowrap text-gray-700">{product.description}</td> */}
        <td className="px-4 py-2 whitespace-nowrap">
            <Menu as="div" className="relative inline-block text-left" onClick={toggleMenu}>
                <div>
                    <MenuButton>
                        <FontAwesomeIcon className="px-4 py-4 cursor-pointer" icon={faEllipsis} />
                    </MenuButton>
                </div>
                <MenuItems transition
                    className="absolute top-7 left-5 z-10 mb-10 w-30 origin-top-right divide-x divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                    <div className="py-1">
                        <MenuItem>
                            <NavLink to={"update/"+product.id} className="*:items-center block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />Details
                            </NavLink>
                        </MenuItem>
                    </div>
                    <div className="py-1">
                        <MenuItem>
                            <NavLink to={product.id} className="*:items-center block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />Edit
                            </NavLink>
                        </MenuItem>
                    </div>
                    <div className="py-1">
                        <MenuItem>
                            <button onClick={()=>onDeleteProduct(product.id)} className="*:text-red-500 block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                <FontAwesomeIcon icon={faTrashCan} className="mr-2" /><span>Delete</span>
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>


            {/* <Link
            className="inline-block rounded-sm bg-blue-500 px-3 py-3 text-sm font-medium text-white transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden"
            to={product.id}
        >
            <span><FontAwesomeIcon icon={faCircleInfo} /> Details</span>
        </Link> */}
        </td>
    </tr>
}
export default ProductItem