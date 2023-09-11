import LinearProgress from "@mui/material/LinearProgress";
import {Alert, Spin} from "antd";
import NavBarLayout from "../../Components/Layout/NavBarLayout.jsx";
import {Link} from "react-router-dom";
import {AiOutlineStock} from "react-icons/ai";

function ErrorPage(){

    return (
        <NavBarLayout>
            <div className="-mt-40 lg:-mt-32 p-4 h-screen flex items-center justify-center ">
                <div className="bg-white p-8 rounded shadow-lg bg-red-50">
                    <h1 className="text-4xl text-red-600 font-bold mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-600 mb-6">Oops! The page you&apos;re looking for does not exist.</p>
                    <Link to={"/"}>
                        <button className="flex gap-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            <AiOutlineStock size={25} className={"text-white"}/> Back to Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </NavBarLayout>
    )

}

export default ErrorPage;