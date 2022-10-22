import React from "react";
import Image from 'next/image'
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="grid grid-cols-4 grid-rows-4 justify-center items-center bg-gray-200 h-screen">
            <div className={`grid col-span-full self-start justify-center items-center h-16 bg-gray-500 shadow-lg mb-10 border-b-2 from border-b-amber-500 p-0`}>
                <nav>
                    <a href="">Teste</a>
                    <div className="">
                        
                    </div>
                </nav>
            </div>
            <div className="grid col-span-full h-full self-center justify-center items-center row-span-3 bg-gray-400 shadow-lg rounded-xl my-10 mx-2 p-0">
                conteúdo
            </div>
            <div className="grid col-span-full justify-center items-center bg-gray-300 mt-10 p-0 h-10">
                <Footer />
            </div>
        </div>
    )
}
