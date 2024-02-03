"use client"
import Image from "next/image";
import Card from "./ui/card";
import { data } from "./data";
import { Inter } from "next/font/google";
import "./globals.css";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import Filtro from "./ui/filtro";

export default function Home() {
    const IDlist = data.map(componente => componente.id)

    const [checkVisual, setCheckVisual] = useState('');
    function mostraCheck(){
        setCheckVisual(checkVisual == '' ? 'md:inline-block':'');
    }


    const [opacidade, setOpacidade] = useState('');
    const [viFiltro, setViFiltro] = useState('hidden');
    function clickIconFiltro(){
        setOpacidade(opacidade == '' ? 'opacity-5' : '');
        setViFiltro(viFiltro == 'hidden' ? 'flex' : 'hidden');
    }

    return (
        <main className="">
            <div className="hidden md:flex mr-8 ml-8 md:mr-10 md:ml-10 lg:mr-20 lg:ml-20">
                <div className="flex flex-row w-full" style={{ marginTop: '-32px' }}>
                    <div className="w-full flex items-center">
                        <img className="absolute ml-3" src="/assets/desktop/icon-search.svg" alt="" />
                        <input id="input-text" className="hidden xl:flex pl-12 h-16 w-full rounded-l-lg border-r" type="text" placeholder="Filter by title, companies, expertise..." />
                        <input id="input-text" className="xl:hidden pl-12 h-16 w-full rounded-l-lg border-r" type="text" placeholder="Filter by title..." />
                    </div>
                    <div className="w-full flex items-center">
                        <img className="absolute ml-3" src="/assets/desktop/icon-location.svg" alt="" />
                        <input id="input-text" className="pl-12 h-16 w-full border-r" type="text" placeholder="Filter by location..." />
                    </div>
                    <div id="input-text" className="hidden md:flex flex-row justify-between min-w-64 lg:min-w-80 items-center pl-3 rounded-r-lg">

                        <div className="flex flex-row">
                            <input onClick={mostraCheck} type="checkbox" id="meuCheckbox" className="" />
                            <label htmlFor="meuCheckbox" className="label-checkbox">Full</label>
                            <p className="ml-1">time</p>
                            <p className="hidden lg:flex ml-1">only</p>
                            <img src="/assets/desktop/icon-check.svg" className={`hidden ${checkVisual} relative md:ml-[-91px] lg:ml-[-127px] pointer-events-none`} alt="" />
                        </div>
                        <button className="rounded bg-[#5964E0] h-9 lg:h-10 w-20 lg:w-28 mr-5">search</button>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex flex-row justify-between ml-10 mr-10 items-center" style={{ marginTop: "-32px" }}>
                <input id="input-text" className="p-4 rounded w-full pr-24" type="text" placeholder="Filter by title..." />
                <div className="flex items-center ml-[-120%] mr-5">
                    <button onClick={clickIconFiltro} className="mr-2"><img src="assets/mobile/icon-filter.svg" alt="" /></button>
                    <button className="rounded-md bg-[#5964E0] h-8 w-8"><MagnifyingGlassIcon className="mx-auto h-8 w-8 text-white"></MagnifyingGlassIcon></button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 md:ml-10 lg:ml-20">
                {IDlist.map((id) => (
                    <Card key={id} id={id} />
                ))}
            </div>
            <div className={viFiltro}>
                <Filtro></Filtro>
            </div>
        </main>
    );
}
