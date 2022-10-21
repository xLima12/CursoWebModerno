import React from "react";
import Image from 'next/image'

export default function Layout() {
    return (
        <div className="grid grid-cols-4 grid-rows-4 items-center bg-gray-200 h-screen">
            <div className="grid col-span-full self-start justify-center items-center h-16 bg-gray-500 shadow-lg border-b-2 from border-b-orange-300 p-0">
                <nav>
                    <a href="">Teste</a>
                    <div>
                        
                    </div>
                </nav>
            </div>
            <div className="grid col-span-full h-auto self-stretch justify-center items-center row-span-3 bg-gray-100 shadow-lg rounded-xl m-2 p-0">
                conteúdo
            </div>
            <div className="grid col-span-full self-end justify-center items-center bg-gray-300 p-0 h-10">
                Rodapé
            </div>
        </div>
    )
}