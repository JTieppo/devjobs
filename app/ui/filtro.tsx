"use client"
import { useState, useEffect } from "react";


export default function Filtro(content) {
    const [checkVisual, setCheckVisual] = useState('');
    function mostraCheck(){
        setCheckVisual(checkVisual == '' ? 'md:inline-block':'');
    }
    return (
        <div className="m-10 absolute mx-auto w-full top-56">    
            <div className="flex flex-col mx-auto mr-10 ml-10">
                <div className="">
                    <input className="rounded-none rounded-t w-full h-12 border-b pl-12" type="text" name="" id="input-text" />
                    <img className="-mt-9 ml-6 mb-4" src="/assets/desktop/icon-location.svg" alt="" />
                </div>
                <div>
                    <div id="input-text" className="flex flex-col justify-between p-6 rounded-b-lg">
                        <div className="flex flex-row">
                            <input onClick={mostraCheck} type="checkbox" id="meuCheckbox" className="" />
                            <label htmlFor="meuCheckbox" className="label-checkbox">Full</label>
                            <p className="ml-1">time</p>
                            <p className="ml-1">only</p>
                            <img src="/assets/desktop/icon-check.svg" className={`hidden ${checkVisual} relative md:ml-[-91px] lg:ml-[-127px] pointer-events-none`} alt="" />
                        </div>
                        <button className="mt-2 rounded bg-[#5964E0] h-10 w-full">search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}