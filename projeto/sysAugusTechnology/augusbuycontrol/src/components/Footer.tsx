import React from "react";
import { IconInstagram, IconFacebook, IconWhatsapp, IconLinkedin } from "./Icones";

export default function Footer() {
    return (
        <div className="grid grid-cols-2">
            <span className="grid justify-start items-center px-8">Todos os direitos reservados AugusTechnology ©</span>
            <div className="grid justify-end items-center grid-cols-4 m-0 p-0">
                <a href="" className="grid hover:bg-amber-500 hover:text-gray-400 hover:rounded-md w-8 h-8 items-center justify-center m-0 p-0"><span className="flex justify-end m-0 p-0">{IconInstagram}</span></a>
                <a href="" className="grid hover:bg-amber-500 hover:text-gray-400 hover:rounded-md w-8 h-8 items-center justify-center m-0 p-0"><span className="flex justify-end m-0 p-0">{IconFacebook}</span></a>
                <a href="" className="grid hover:bg-amber-500 hover:text-gray-400 hover:rounded-md w-8 h-8 items-center justify-center m-0 p-0"><span className="flex justify-end m-0 p-0">{IconWhatsapp}</span></a>
                <a href="" className="grid hover:bg-amber-500 hover:text-gray-400 hover:rounded-md w-8 h-8 items-center justify-center m-0 p-0"><span className="flex justify-end m-0 p-0">{IconLinkedin}</span></a>
            </div>
        </div>
    )
}