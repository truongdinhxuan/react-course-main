import axios from "axios";
import { useState } from "react";

const CategoryDetails = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const apiUrl: string = 'http://localhost:5176/api/v1/categories';

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!name) {
            setError("Name is required");
        } else {
            setError("");
            alert("Name submitted: " + name);
        }

        const data = { name, description };

        axios.post(apiUrl, data).then((response) => {
            console.log(response);
        })
    }

    return (
        <div className="card bg-white rounded-md shadow-md">
            <div className="card-header p-4">
                <h1 className="text-2xl font-bold">Category Edit</h1>
            </div>
            <div className="card-body p-4 border-y border-gray-200">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name"> Name:</label>
                        <input id="name" type="text" value={name} className="w-full p-2 border border-slate-200"
                            onChange={(e) => setName(e.target.value)} />
                        {error && <span style={{ color: "red" }}>{error}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description"> Description:</label>
                        <input id="description" type="text" value={description} className="w-full p-2 border border-slate-200"
                            onChange={(e) => setDescription(e.target.value)} />
                        {error && <span style={{ color: "red" }}>{error}</span>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="card-footer p-4">
                Pagination
            </div>
        </div>

    )
}
export default CategoryDetails;