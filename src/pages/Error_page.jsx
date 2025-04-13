import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div
            className="bg-cover bg-center h-screen flex flex-col relative"
            style={{ backgroundImage: "url('src/assets/404.jpg')" }}
        >
            {/* Link at the top center */}
            <Link
                to="/"
                className="absolute top-4 left-1/2 transform -translate-x-1/2 lm:text-2xl sm:text-xl text-amber-300 font-bold hover:text-blue-200 transition duration-300 hover:cursor-pointer border-2 border-gray-300 rounded-lg px-4 py-2"
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;