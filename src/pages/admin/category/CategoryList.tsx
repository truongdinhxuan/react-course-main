import { useEffect, useState } from 'react'
import { ICategory } from '../../../interfaces';
import instance from '../../../api/api.service';
import { getCategory } from '../../../api/category.service';

const CategoryList = () => {
  // State of component - Noi luu tru du lieu trong component
  const [categories, setCategories] = useState<ICategory[]>([]);

  // Call data from api server
  // Side effect
  // Asynchronous
  // setTimeout, fetch

  const getCategories = async () => {
    const response = await getCategory()
    // console.log(data);
    setCategories(response);
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <section>
      <h1 className="text-3xl">Categories list</h1>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {categories.map((cat) =>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{cat.id}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{cat.name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{cat.createdAt}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <button className="group relative inline-block focus:ring-3 focus:outline-hidden">
                    <span
                      className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                    ></span>

                    <span
                      className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase"
                    >
                      Edit
                    </span>
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default CategoryList;