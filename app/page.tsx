"use client"
import Image from "next/image";
import Card from "./ui/card";
import { data } from "./data";
import { Inter } from "next/font/google";
import "./globals.css";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import Filtro from "./ui/filtro";
import Link from "next/link";




export default function Home() {

    const [showSnackbar, setShowSnackbar] = useState('');
    const [responseSearch, setResponseSearch] = useState('');

    const botaoDesativado = () => {
        setShowSnackbar('show');
        setTimeout(() => {
            setShowSnackbar('');
        }, 3000);
    };


    const [checkVisual, setCheckVisual] = useState('');
    const [opacidade, setOpacidade] = useState('');
    const [viFiltro, setViFiltro] = useState('hidden');
    const [eventoPonteiro, setEventoPonteiro] = useState('');
    const [fullTime, setFullTime] = useState(false);
    const [buscaLocal, setBuscaLocal] = useState('');
    const [buscaTipo, setBuscaTipo] = useState('');
    const [IDlist, setIDlist] = useState(data.map(dados => dados.id));
    const [correspondenteNulo, setShowCorrespondenteNulo] = useState('hidden');
    const [mainShow, setMainShow] = useState('block');

    function mostraCheck() {
        setCheckVisual(checkVisual == '' ? 'md:inline-block' : '');
        setFullTime(fullTime == false ? true : false);
    }

    function clickIconFiltro() {
        setOpacidade(opacidade == '' ? 'opacity-20' : '');
        setEventoPonteiro(eventoPonteiro == '' ? 'pointer-events-none' : '')
        setViFiltro(viFiltro == 'hidden' ? 'flex' : 'hidden');
    }

    function valorCorrespondenteNulo() {
        setShowCorrespondenteNulo(correspondenteNulo == 'flex' ? 'hidden' : 'flex')
        setMainShow(mainShow == 'hidden' ? 'block' : 'hidden');
    }

    const buscar = () => {
        fetch("/api/busca", {
            method: "POST",
            body: JSON.stringify({
                fullTime,
                buscaLocal,
                buscaTipo,
            }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then(response => response.json())
            .then(dados => dados.ids == (0) ? (fullTime == false ? (buscaTipo == '' ? (buscaLocal == '' ? (setIDlist(data.map(dado => dado.id))) : (valorCorrespondenteNulo())) : (valorCorrespondenteNulo())) : (valorCorrespondenteNulo())) : setIDlist(dados.ids))
            .catch((e) => console.log(e))

    };

    return (
        <div>
            <div className={`${correspondenteNulo} h-screen text-center`}>
                <div className="w-full">
                    <p className="text-center mt-20 mx-auto text-2xl"> Sorry, no matches were found. </p>
                    <button className="bg-[#5964E0] rounded h-10 pl-3 pr-3 text-center mt-8" onClick={valorCorrespondenteNulo}>Back Home</button>
                </div>
            </div>
            <main className={`${opacidade} ${mainShow}`}>
                <div className="hidden md:flex mr-8 ml-8 md:mr-10 md:ml-10 lg:mr-20 lg:ml-20">
                    <div className="flex flex-row w-full" style={{ marginTop: '-32px' }}>
                        <div className="w-full flex items-center" id="area-grow">
                            <img className="absolute ml-3" src="/assets/desktop/icon-search.svg" alt="" />
                            <input id="input-text" className="hidden xl:flex pl-12 h-16 w-full rounded-l-lg border-r" type="text" placeholder="Filter by title, companies, expertise..." value={buscaTipo} onChange={(e) => setBuscaTipo(e.target.value)} />
                            <input id="input-text" className="xl:hidden pl-12 h-16 w-full rounded-l-lg border-r" type="text" placeholder="Filter by title..." value={buscaTipo} onChange={(e) => setBuscaTipo(e.target.value)} />
                        </div>
                        <div className="w-full flex items-center" id="area-grow">
                            <img className="absolute ml-3" src="/assets/desktop/icon-location.svg" alt="" />
                            <input id="input-text" className="pl-12 h-16 w-full border-r" type="text" placeholder="Filter by location..." value={buscaLocal} onChange={(e) => setBuscaLocal(e.target.value)} />
                        </div>
                        <div id="input-text" className="hidden md:flex flex-row justify-between min-w-64 lg:min-w-80 items-center pl-3 rounded-r-lg">

                            <div className="flex flex-row">
                                <input onClick={mostraCheck} type="checkbox" id="meuCheckbox" className="" />
                                <label htmlFor="meuCheckbox" className="label-checkbox">Full</label>
                                <p className="ml-1">time</p>
                                <p className="hidden lg:flex ml-1">only</p>
                                <img src="/assets/desktop/icon-check.svg" className={`hidden ${checkVisual} relative md:ml-[-91px] lg:ml-[-127px] pointer-events-none`} alt="" />
                            </div>
                            <button className="rounded bg-[#5964E0] h-9 lg:h-10 w-20 lg:w-28 mr-5" onClick={buscar}>search</button>
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
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 md:ml-10 lg:ml-20 ${eventoPonteiro}`}>
                    {IDlist.map((id) => (
                        <Card key={id} id={id} />
                    ))}
                </div>
                <div className="mb-10 mt-12 w-full flex items-center"><button className="mx-auto p-4 rounded" style={{ backgroundColor: "#5964E0" }} onClick={botaoDesativado}>Load more</button></div>
            </main>
            <div className={viFiltro}>
                <button className="m-10 fixed mx-auto w-full h-full top-0" onClick={clickIconFiltro}></button>
                <Filtro viFiltro={viFiltro}></Filtro>
            </div>
            <div id="snackbar" className={showSnackbar}>
                <p className="my-auto mx-auto text-2xl" style={{ color: "#5964E0" }}>Illustrative button</p>
            </div>
        </div>
    );
}
