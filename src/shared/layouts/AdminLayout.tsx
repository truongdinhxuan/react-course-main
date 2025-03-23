import { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex">
                <Sidebar />
                <div className="content flex-grow p-4">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default AdminLayout;